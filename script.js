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

const windowEl = document.querySelector(".window");
const hamburgerBar = document.getElementById("hamburgerBar");
const hamburgerToggle = document.getElementById("hamburgerToggle");
const hamburgerMenu = document.getElementById("hamburgerMenu");

// Toggle hamburger menu open/close
hamburgerToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !hamburgerMenu.hidden;
    hamburgerMenu.hidden = isOpen;
    hamburgerToggle.setAttribute("aria-expanded", String(!isOpen));
});

// Close hamburger menu when clicking outside
document.addEventListener("click", (e) => {
    if (!hamburgerBar.contains(e.target) && !hamburgerMenu.hidden) {
        hamburgerMenu.hidden = true;
        hamburgerToggle.setAttribute("aria-expanded", "false");
    }
});

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

function setBackEnabled(enabled) {
    backBtn.disabled = !enabled;
}

function showExplorer() {
    viewTitle.textContent = "Explorador";
    viewHint.textContent = "Tip: click abre el CV.";
    setBackEnabled(false);

    windowEl.classList.remove("window--cv");
    hamburgerBar.classList.remove("is-visible");
    hamburgerMenu.hidden = true;
    hamburgerToggle.setAttribute("aria-expanded", "false");

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
        windowEl.classList.remove("window--cv");
        hamburgerBar.classList.remove("is-visible");
        return;
    }

    viewTitle.textContent = "";
    viewHint.textContent = "";
    setBackEnabled(true);

    windowEl.classList.add("window--cv");
    hamburgerBar.classList.add("is-visible");
    hamburgerMenu.hidden = true;
    hamburgerToggle.setAttribute("aria-expanded", "false");

    clearMounts();

    const { node: cvView, buildHamburgerMenu } = createCVView(person);
    cvMount.appendChild(cvView);

    buildHamburgerMenu(hamburgerMenu, () => {
        hamburgerMenu.hidden = true;
        hamburgerToggle.setAttribute("aria-expanded", "false");
    });

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
    } catch (err) {
        console.error(err);
        viewHint.textContent = "No se pudo cargar data.json. Usa Live Server (no file://).";
        setBackEnabled(false);
    }
})();