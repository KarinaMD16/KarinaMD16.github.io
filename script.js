import { createExplorerView } from "./components/explorer.js";
import { createCVView } from "./components/cv.js";
import { normalizeRoute, toExplorerAddress, toPersonAddress } from "./components/router.js";

const explorerMount = document.getElementById("explorerMount");
const cvMount = document.getElementById("cvMount");

const backBtn = document.getElementById("backBtn");
const addressBar = document.getElementById("address");

const viewTitle = document.getElementById("viewTitle");
const viewHint = document.getElementById("viewHint");
const ORIGIN_LABEL = "curriculum";
const ORIGIN_PREFIX = ORIGIN_LABEL.toLowerCase() + "/";

let DATA = null;

async function loadData() {
    const res = await fetch("data.json");
    if (!res.ok) throw new Error("No se pudo cargar data.json");
    return res.json();
}

function clearMounts() {
    explorerMount.replaceChildren();
    cvMount.replaceChildren();
}

// theme helpers
const THEME_ICONS = {
    light: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7 3V0H9V3H7Z"/> <path d="M9 13V16H7V13H9Z"/> <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"/> <path d="M0 9H3V7H0V9Z"/> <path d="M16 7H13V9H16V7Z"/> <path d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z"/> <path d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z"/> <path d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z"/> <path d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z"/>
        </svg>`
    ,
    dark: `
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    `
};

function applyTheme(theme) {
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.innerHTML = theme === "dark" ? THEME_ICONS.light : THEME_ICONS.dark;
}

function initTheme() {
    let stored = localStorage.getItem("theme");
    if (!stored) {
        stored = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(stored);
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
            const next = current === "dark" ? "light" : "dark";
            applyTheme(next);
            localStorage.setItem("theme", next);
        });
    }
}

function setBackEnabled(enabled) {
    backBtn.disabled = !enabled;
}

function showExplorer() {
    viewTitle.textContent = "Explorador";
    viewHint.textContent = "Tip: click abre el CV.";
    setBackEnabled(false);

    clearMounts();

    const explorerView = createExplorerView({
        people: DATA.people,
        onOpenPerson: (id) => showPerson(id),
    });

    explorerMount.appendChild(explorerView);
    addressBar.value = toExplorerAddress(ORIGIN_LABEL);
}

function showPerson(personId) {
    const person = DATA?.people?.[personId];
    if (!person) {
        viewHint.textContent = `No existe: "${personId}"`;
        return;
    }

    viewTitle.textContent = "";
    viewHint.textContent = "";
    setBackEnabled(true);

    clearMounts();

    const cvView = createCVView(person);
    cvMount.appendChild(cvView);

    addressBar.value = toPersonAddress(personId, ORIGIN_LABEL);
}

// Back button
backBtn.addEventListener("click", () => {
    showExplorer();
});

addressBar.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const normalized = normalizeRoute(addressBar.value);
    const route = normalized.startsWith(ORIGIN_PREFIX) ? normalized.slice(ORIGIN_PREFIX.length) : normalized;

    if (route === "" || route === "explorer") {
        showExplorer();
        return;
    }

    if (DATA?.people?.[route]) {
        showPerson(route);
        return;
    }

    viewHint.textContent = `No existe: "${route}"`;
});

// Init
(async function init() {
    try {
        DATA = await loadData();
        showExplorer();
        initTheme();
    } catch (err) {
        console.error(err);
        viewHint.textContent = "No se pudo cargar data.json. Usa Live Server (no file://).";
        setBackEnabled(false);
    }
})();