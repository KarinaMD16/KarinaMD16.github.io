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
    } catch (err) {
        console.error(err);
        viewHint.textContent = "No se pudo cargar data.json. Usa Live Server (no file://).";
        setBackEnabled(false);
    }
})();