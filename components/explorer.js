export function createExplorerView({ people, onOpenPerson }) {
    const explorerTpl = document.getElementById("explorerTemplate");
    const folderTpl = document.getElementById("folderTemplate");

    const explorerNode = explorerTpl.content.firstElementChild.cloneNode(true);

    const entries = Object.entries(people);

    entries.forEach(([id, person]) => {
        const folderNode = folderTpl.content.firstElementChild.cloneNode(true);

        folderNode.dataset.person = id;
        folderNode.style.setProperty("--c", person.palette?.accent || "#FC889F");

        folderNode.querySelector(".folder__name").textContent = person.name;
        folderNode.querySelector(".folder__sub").textContent = "Read more";

        folderNode.addEventListener("click", (e) => {
            e.preventDefault();
            onOpenPerson(id);
        });

        folderNode.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenPerson(id);
            }
        });

        explorerNode.appendChild(folderNode);
    });

    return explorerNode;
}