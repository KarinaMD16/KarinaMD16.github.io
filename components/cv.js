const ICONS = {
    about: `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path d="M8 9a5 5 0 0 0-5 5v1h10v-1a5 5 0 0 0-5-5z"/>
</svg>
`,

    projects: `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.146-.354l-4-4A.5.5 0 0 0 10.5 2H3zm0 1h7v3.5A1.5 1.5 0 0 0 11.5 7H14v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
</svg>
`,

    contact: `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4z"/>
    <path d="M0 5.383v6.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.743 4.646a.5.5 0 0 1-.514 0L0 5.383z"/>
</svg>
`
};

export function createCVView(person) {
    const cvTpl = document.getElementById("cvTemplate");
    const pillTpl = document.getElementById("pillTemplate");
    const liTpl = document.getElementById("liTemplate");

    const groupTpl = document.getElementById("sideGroupTemplate");
    const mainLinkTpl = document.getElementById("sideMainLinkTemplate");
    const subLinkTpl = document.getElementById("sideSubLinkTemplate");
    const listItemTpl = document.getElementById("sideListItemTemplate");

    const cvNode = cvTpl.content.firstElementChild.cloneNode(true);

    // ===== Palette -> CSS vars
    const pal = person.palette || {};
    cvNode.style.setProperty("--accent", pal.accent || "#FC889F");
    cvNode.style.setProperty("--accentDark", pal.accentDark || "#A52E52");
    cvNode.style.setProperty("--accentSoft", pal.accentSoft || "#FAE3DF");
    cvNode.style.setProperty("--bgSoft", pal.bgSoft || "#F8EBF2");

    // ===== Fill main content
    cvNode.querySelector(".cv__name").textContent = person.name;
    cvNode.querySelector(".cv__role").textContent = person.role;
    cvNode.querySelector(".cv__summary").textContent = person.summary;

    // Education
    const eduList = cvNode.querySelector(".cv__education");
    (person.education || []).forEach((item) => {
        const li = liTpl.content.firstElementChild.cloneNode(true);
        li.textContent = item;
        eduList.appendChild(li);
    });

    // Experience
    const expList = cvNode.querySelector(".cv__experience");
    (person.experience || []).forEach((x) => {
        const li = liTpl.content.firstElementChild.cloneNode(true);
        const strong = document.createElement("strong");
        strong.textContent = x.title;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(` — ${x.detail}`));
        expList.appendChild(li);
    });

    // Skills pills
    const skillsWrap = cvNode.querySelector(".cv__skills");
    (person.skills || []).forEach((skill) => {
        const pill = pillTpl.content.firstElementChild.cloneNode(true);
        pill.textContent = skill;
        skillsWrap.appendChild(pill);
    });

    // Languages (placeholder simple)
    const langP = cvNode.querySelector(".cv__languages");
    if (Array.isArray(person.languages) && person.languages.length) {
        langP.textContent = person.languages.map(l => `${l.name} — ${l.level}`).join(" • ");
    }

    // ===== Sidebar build (like image)
    const sidebar = cvNode.querySelector(".cv__sidebar");
    sidebar.replaceChildren(); // limpiamos el sidebar del template base

    const main = cvNode.querySelector(".cv__main");

    const scrollTo = (selector) => {
        const el = cvNode.querySelector(selector);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const setActiveMain = (el) => {
        sidebar
            .querySelectorAll(".sideMainLink, .sideGroup__titleRow--action")
            .forEach((x) => x.classList.remove("is-active"));
        if (el) el.classList.add("is-active");
    };

    const setActive = (btn) => {
        sidebar.querySelectorAll(".sideSubLink").forEach(x => x.classList.remove("is-active"));
        if (btn?.classList?.contains("sideSubLink")) btn.classList.add("is-active");
    };

    // --- Group: Navigate
    const navGroup = groupTpl.content.firstElementChild.cloneNode(true);
    navGroup.classList.add("sideGroup--navigate");
    navGroup.querySelector(".sideGroup__title").textContent = "Navigate";

    const navIcon = navGroup.querySelector(".sideGroup__icon");
    if (navIcon) navIcon.style.display = "none";

    const navBody = navGroup.querySelector(".sideGroup__body");

    // About me (pill)
    const aboutBtn = mainLinkTpl.content.firstElementChild.cloneNode(true);
    aboutBtn.querySelector(".sideMainLink__text").textContent = "About me";
    aboutBtn.addEventListener("click", () => {
        setActiveMain(aboutBtn);
        scrollTo("#about");
    });

    const aboutIconWrap = document.createElement("span");
    aboutIconWrap.className = "sideMainLink__svg";
    aboutIconWrap.innerHTML = ICONS.about;
    aboutBtn.prepend(aboutIconWrap);

    navBody.appendChild(aboutBtn);
    setActiveMain(aboutBtn);

    const subItems = [
        { label: "Education", target: "#education" },
        { label: "Experience", target: "#experience" },
        { label: "Skills", target: "#skills" },
        { label: "Languages", target: "#languages" },
    ];

    subItems.forEach((it, idx) => {
        const btn = subLinkTpl.content.firstElementChild.cloneNode(true);
        btn.textContent = it.label;
        if (idx === 0) btn.classList.add("is-active");

        btn.addEventListener("click", () => {
            setActive(btn);
            scrollTo(it.target);
        });

        navBody.appendChild(btn);
    });

    sidebar.appendChild(navGroup);

    // --- Group: Projects (from JSON)
    const projectsGroup = groupTpl.content.firstElementChild.cloneNode(true);
    projectsGroup.classList.add("sideGroup--projects");
    projectsGroup.querySelector(".sideGroup__title").textContent = "Projects";

    const projectsIcon = projectsGroup.querySelector(".sideGroup__icon");
    if (projectsIcon) projectsIcon.innerHTML = ICONS.projects;

    const projectsTitleRow = projectsGroup.querySelector(".sideGroup__titleRow");
    projectsTitleRow.classList.add("sideGroup__titleRow--action");
    projectsTitleRow.tabIndex = 0;

    const projBody = projectsGroup.querySelector(".sideGroup__body");
    const projectsList = person.projects || [];

    const openProject = (p) => {
        if (!p) return;
        if (p.href && p.href.startsWith("#")) scrollTo(p.href);
        else if (p.href) window.open(p.href, "_blank");
    };

    const onProjectsTitleClick = () => {
        setActiveMain(projectsTitleRow);
        openProject(projectsList[0]);
    };

    projectsTitleRow.addEventListener("click", onProjectsTitleClick);
    projectsTitleRow.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onProjectsTitleClick();
        }
    });

    projectsList.forEach((p) => {
        const btn = listItemTpl.content.firstElementChild.cloneNode(true);
        btn.textContent = p.name;

        btn.addEventListener("click", () => {
            if (p.href && p.href.startsWith("#")) scrollTo(p.href);
            else if (p.href) window.open(p.href, "_blank");
        });

        projBody.appendChild(btn);
    });

    sidebar.appendChild(projectsGroup);

    // --- Group: Contact (from JSON)
    const contactGroup = groupTpl.content.firstElementChild.cloneNode(true);
    contactGroup.classList.add("sideGroup--contact");
    contactGroup.querySelector(".sideGroup__title").textContent = "Contact";

    const contactIcon = contactGroup.querySelector(".sideGroup__icon");
    if (contactIcon) contactIcon.innerHTML = ICONS.contact;

    const contactTitleRow = contactGroup.querySelector(".sideGroup__titleRow");
    contactTitleRow.classList.add("sideGroup__titleRow--action");
    contactTitleRow.tabIndex = 0;

    const contactBody = contactGroup.querySelector(".sideGroup__body");
    const primaryContact = (person.contact || []).find((c) => c?.href) || (person.contact || [])[0];
    const contactBtn = listItemTpl.content.firstElementChild.cloneNode(true);
    contactBtn.textContent = "Contact";

    const openPrimaryContact = () => {
        if (!primaryContact?.href) return;
        window.open(primaryContact.href, primaryContact.href.startsWith("mailto:") ? "_self" : "_blank");
    };

    const onContactTitleClick = () => {
        setActiveMain(contactTitleRow);
        openPrimaryContact();
    };

    contactTitleRow.addEventListener("click", onContactTitleClick);
    contactTitleRow.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onContactTitleClick();
        }
    });

    contactBtn.addEventListener("click", () => {
        setActiveMain(contactTitleRow);
        openPrimaryContact();
    });

    contactBody.appendChild(contactBtn);

    sidebar.appendChild(contactGroup);

    main.scrollTop = 0;

    return cvNode;
}