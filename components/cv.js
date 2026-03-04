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

const SKILL_ICONS = {
  // ===== Tech logos (a color) =====
  js: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
  <path d="M13.6 18.2c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.2 0-.9-.7-1.1-1.9-1.6l-.7-.3c-1.9-.8-3.2-1.8-3.2-3.9 0-1.9 1.5-3.3 3.7-3.3 1.6 0 2.8.6 3.6 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.7 1.6l.7.3c2.3 1 3.4 2 3.4 4.1 0 2.4-1.9 3.7-4.4 3.7-2.5 0-4.1-1.2-4.9-2.7l2.1-1.2z" fill="#000"/>
</svg>`,

  ts: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <rect width="24" height="24" rx="4" fill="#3178C6"/>
  <path d="M13.2 10.4h-2.3V9h6.3v1.4h-2.3V19h-1.7v-8.6z" fill="#fff"/>
  <path d="M20.8 19c-.4.7-1.4 1.2-2.7 1.2-1.8 0-3-.9-3.4-2l1.5-.9c.3.7.9 1.2 1.9 1.2.9 0 1.4-.4 1.4-1 0-.7-.6-1-1.6-1.4l-.6-.3c-1.6-.7-2.6-1.5-2.6-3.2 0-1.6 1.3-2.8 3.2-2.8 1.4 0 2.4.5 3.1 1.8l-1.4.9c-.3-.6-.8-.9-1.7-.9-.8 0-1.2.4-1.2.9 0 .7.4.9 1.5 1.3l.6.3c1.8.8 2.8 1.6 2.8 3.4 0 .5-.1 1-.4 1.5z" fill="#fff"/>
</svg>`,

  react: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
  <g fill="none" stroke="#61DAFB" stroke-width="1.6">
    <ellipse cx="12" cy="12" rx="9" ry="3.6"/>
    <ellipse cx="12" cy="12" rx="3.6" ry="9" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="3.6" ry="9" transform="rotate(-60 12 12)"/>
  </g>
</svg>`,

  html: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#E34F26" d="M3 2l1.8 20L12 22l7.2-0.9L21 2H3z"/>
  <path fill="#EF652A" d="M12 20.3l5.8-0.7L19.3 4H12v16.3z"/>
  <path fill="#fff" d="M12 6.9H6.5l.2 2.2H12V6.9zm0 4.5H6.9l.2 2.2H12v-2.2zm0 5.7l-2.4-.7-.1-1.5H7.3l.2 3 4.5 1.3V17.1z"/>
  <path fill="#fff" d="M12 9.1v2.2h2.9l-.3 3.1-2.6.7v2.2l4.5-1.3.6-6.9H12z"/>
  <path fill="#fff" d="M12 6.9V9h5.2l.2-2.1H12z"/>
</svg>`,

  css: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#1572B6" d="M3 2l1.8 20L12 22l7.2-0.9L21 2H3z"/>
  <path fill="#33A9DC" d="M12 20.3l5.8-.7L19.3 4H12v16.3z"/>
  <path fill="#fff" d="M12 6.9H6.5l.2 2.2H12V6.9zm0 4.5H6.9l.2 2.2H12v-2.2z"/>
  <path fill="#EBEBEB" d="M12 17.1l-2.4-.7-.1-1.5H7.3l.2 3 4.5 1.3v-2.1z"/>
  <path fill="#fff" d="M12 9.1v2.2h2.9l-.3 3.1-2.6.7v2.2l4.5-1.3.6-6.9H12z"/>
  <path fill="#EBEBEB" d="M12 6.9V9h5.2l.2-2.1H12z"/>
</svg>`,

  python: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#3776AB" d="M12.1 2c-4.6 0-4.3 2-4.3 2v2.1h4.4v.7H6.1S2 6.6 2 12s3.7 5.2 3.7 5.2h2.2v-3.1s-.1-3.7 3.6-3.7h6.2s3.5.1 3.5-3.4V5.4S21.7 2 17.2 2h-5.1z"/>
  <circle cx="9" cy="4.4" r="0.9" fill="#fff"/>
  <path fill="#FFD43B" d="M11.9 22c4.6 0 4.3-2 4.3-2v-2.1h-4.4v-.7h6.1S22 17.4 22 12s-3.7-5.2-3.7-5.2h-2.2v3.1s.1 3.7-3.6 3.7h-6.2S2.8 13.5 2.8 17v1.6S2.3 22 6.8 22h5.1z"/>
  <circle cx="15" cy="19.6" r="0.9" fill="#2b2b2b"/>
</svg>`,

  git: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#F05032" d="M22.1 10.9 13.1 2a1.6 1.6 0 0 0-2.2 0L2 10.9a1.6 1.6 0 0 0 0 2.2l9 9a1.6 1.6 0 0 0 2.2 0l9-9a1.6 1.6 0 0 0 0-2.2z"/>
  <path fill="#fff" d="M12.6 12.2a1.6 1.6 0 1 1-2.7-1.1L7.8 8.9a1.6 1.6 0 1 1 1.1-1.1l2.1 2.1a1.6 1.6 0 0 1 1.6.4l2.2-2.2a1.6 1.6 0 1 1 1.1 1.1l-2.2 2.2c.1.2.2.5.2.8v4.2a1.6 1.6 0 1 1-1.1 0v-4.2z"/>
</svg>`,

  github: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#181717" d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.2 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7z"/>
</svg>`,

  dotnet: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <rect width="24" height="24" rx="4" fill="#512BD4"/>
  <path fill="#fff" d="M6.3 15.9V8.1h2.9c2.6 0 4.1 1.4 4.1 3.9s-1.5 3.9-4.1 3.9H6.3zm1.8-1.5h1c1.6 0 2.4-.8 2.4-2.4s-.8-2.4-2.4-2.4h-1v4.8zm6.7 1.5V8.1h1.8v7.8h-1.8zm3.1 0V8.1h1.8v6.3h3v1.5h-4.8z"/>
</svg>`,

  // ===== Concept icons (neutros) =====
  api: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M8.6 16.6 4 12l4.6-4.6L10 8.8 6.8 12 10 15.2l-1.4 1.4zM15.4 16.6 14 15.2 17.2 12 14 8.8l1.4-1.4L20 12l-4.6 4.6z"/>
</svg>`,

  db: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M12 3c-4.4 0-8 1.3-8 3v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3zm0 2c3.6 0 6 .9 6 1s-2.4 1-6 1-6-.9-6-1 2.4-1 6-1zm0 14c-3.6 0-6-.9-6-1v-2.1c1.5.9 3.9 1.4 6 1.4s4.5-.5 6-1.4V18c0 .1-2.4 1-6 1z"/>
</svg>`,

  analysis: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M4 19h16v2H4v-2zm2-2V9h2v8H6zm5 0V5h2v12h-2zm5 0v-6h2v6h-2z"/>
</svg>`,

  accessibility: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7-7 2v11h-2v-6h-2v6H8V11L1 9l.6-1.9L12 10l10.4-2.9L21 9z"/>
</svg>`,

  uxui: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M4 6h10v2H4V6zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm14-9h2v2h-2V5zm0 8h2v6h-2v-6z"/>
</svg>`,

  responsive: `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#111827" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5v2h2v1H7v-1h2v-2H6a2 2 0 0 1-2-2V6zm2 0v9h12V6H6z"/>
</svg>`
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

    const pal = person.palette || {};
    cvNode.style.setProperty("--accent", pal.accent || "#FC889F");
    cvNode.style.setProperty("--accentDark", pal.accentDark || "#A52E52");
    cvNode.style.setProperty("--accentSoft", pal.accentSoft || "#FAE3DF");
    cvNode.style.setProperty("--bgSoft", pal.bgSoft || "#F8EBF2");

    cvNode.querySelector(".cv__name").textContent = person.name;
    cvNode.querySelector(".cv__summary").textContent = person.summary;

    // Education
    const eduList = cvNode.querySelector(".cv__education");
    (person.education || []).forEach((item) => {
        const li = liTpl.content.firstElementChild.cloneNode(true);

        const institution = item?.institution || "";
        const degree = item?.degree || "";
        const location = item?.location || "";
        const date = item?.date || "";

        const eduItem = document.createElement("div");
        eduItem.className = "eduItem";

        const leftCol = document.createElement("div");
        leftCol.className = "eduItem__left";

        const rightCol = document.createElement("div");
        rightCol.className = "eduItem__right";

        const leftMain = document.createElement("p");
        leftMain.className = "eduItem__line eduItem__line--main";
        leftMain.textContent = institution;

        const leftSub = document.createElement("p");
        leftSub.className = "eduItem__line";
        leftSub.textContent = degree;

        const rightMain = document.createElement("p");
        rightMain.className = "eduItem__line eduItem__line--accent";
        rightMain.textContent = location;

        const rightSub = document.createElement("p");
        rightSub.className = "eduItem__line eduItem__line--accent";
        rightSub.textContent = date;

        if (leftMain.textContent) leftCol.appendChild(leftMain);
        if (leftSub.textContent) leftCol.appendChild(leftSub);
        if (rightMain.textContent) rightCol.appendChild(rightMain);
        if (rightSub.textContent) rightCol.appendChild(rightSub);

        eduItem.appendChild(leftCol);
        eduItem.appendChild(rightCol);
        li.appendChild(eduItem);

        eduList.appendChild(li);
    });

    // Experience
    const expList = cvNode.querySelector(".cv__experience");
    (person.experience || []).forEach((x) => {
        const li = liTpl.content.firstElementChild.cloneNode(true);

        const organization = x?.organization || "";
        const role = x?.role || "";
        const roleAccent = Boolean(x?.roleAccent);
        const location = x?.location || "";
        const period = x?.period || "";
        const summary = x?.summary || "";
        const highlights = Array.isArray(x?.highlights) ? x.highlights : [];

        const expItem = document.createElement("div");
        expItem.className = "expItem";

        const header = document.createElement("div");
        header.className = "expItem__header";

        const leftCol = document.createElement("div");
        leftCol.className = "expItem__left";

        const rightCol = document.createElement("div");
        rightCol.className = "expItem__right";

        const leftMain = document.createElement("p");
        leftMain.className = "expItem__line expItem__line--main";
        leftMain.textContent = organization;

        const leftSub = document.createElement("p");
        leftSub.className = "expItem__line";
        if (roleAccent) {
            leftSub.classList.add("expItem__line--accent");
        }
        leftSub.textContent = role;

        const rightMain = document.createElement("p");
        rightMain.className = "expItem__line expItem__line--accent";
        rightMain.textContent = location;

        const rightSub = document.createElement("p");
        rightSub.className = "expItem__line";
        rightSub.textContent = period;

        if (leftMain.textContent) leftCol.appendChild(leftMain);
        if (leftSub.textContent) leftCol.appendChild(leftSub);
        if (rightMain.textContent) rightCol.appendChild(rightMain);
        if (rightSub.textContent) rightCol.appendChild(rightSub);

        header.appendChild(leftCol);
        header.appendChild(rightCol);
        expItem.appendChild(header);

        if (summary) {
            const summaryP = document.createElement("p");
            summaryP.className = "expItem__summary";
            summaryP.textContent = summary;
            expItem.appendChild(summaryP);
        }

        if (highlights.length) {
            const highlightsList = document.createElement("ul");
            highlightsList.className = "expItem__highlights";

            highlights.forEach((highlight) => {
                const highlightLi = document.createElement("li");
                highlightLi.textContent = highlight;
                highlightsList.appendChild(highlightLi);
            });

            expItem.appendChild(highlightsList);
        }

        li.appendChild(expItem);

        expList.appendChild(li);
    });

    // Skills pills
    const skillsWrap = cvNode.querySelector(".cv__skills");
    skillsWrap.replaceChildren();

    const skillGroupTpl = document.getElementById("skillGroupTemplate");
    const skillPillTpl = document.getElementById("skillPillTemplate");

    const skillGroups = Array.isArray(person.skills) ? person.skills : [];

    skillGroups.forEach((group) => {
    const groupNode = skillGroupTpl.content.firstElementChild.cloneNode(true);
    groupNode.querySelector(".skillGroup__title").textContent = group?.title || "Skills";

    const row = groupNode.querySelector(".skillGroup__row");
    const items = Array.isArray(group?.items) ? group.items : [];

    items.forEach((it) => {
        const pill = skillPillTpl.content.firstElementChild.cloneNode(true);

        const iconWrap = pill.querySelector(".pill__icon");
        const textWrap = pill.querySelector(".pill__text");

        textWrap.textContent = it?.name || "";

        const key = it?.icon;
        iconWrap.innerHTML = key && SKILL_ICONS[key] ? SKILL_ICONS[key] : "";

        row.appendChild(pill);
    });

    skillsWrap.appendChild(groupNode);
    });

    // Languages badges
    const langWrap = cvNode.querySelector(".cv__languages");
    const languages = Array.isArray(person.languages) ? person.languages : [];

    if (languages.length) {
        languages.forEach((language) => {
            const badge = document.createElement("span");
            badge.className = "langBadge";

            const name = document.createElement("span");
            name.className = "langBadge__name";
            name.textContent = language?.name || "Language";

            const level = document.createElement("span");
            level.className = "langBadge__level";
            level.textContent = language?.level || "";

            badge.appendChild(name);
            if (level.textContent) badge.appendChild(level);
            langWrap.appendChild(badge);
        });
    } else {
        langWrap.textContent = "No languages added yet.";
    }

    // ===== Sidebar build 
    const sidebar = cvNode.querySelector(".cv__sidebar");
    sidebar.replaceChildren(); 

    const main = cvNode.querySelector(".cv__main");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scrollAnimationFrame = null;

    const smoothScrollToY = (targetY, duration = 720) => {
      const maxScroll = Math.max(0, main.scrollHeight - main.clientHeight);
      const clampedTarget = Math.min(Math.max(0, targetY), maxScroll);

      if (prefersReducedMotion || duration <= 0) {
        main.scrollTop = clampedTarget;
        return;
      }

      if (scrollAnimationFrame) {
        cancelAnimationFrame(scrollAnimationFrame);
      }

      const startY = main.scrollTop;
      const delta = clampedTarget - startY;

      if (!delta) return;

      const startTime = performance.now();

      const easeInOutCubic = (t) => (t < 0.5)
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        main.scrollTop = startY + delta * eased;

        if (progress < 1) {
          scrollAnimationFrame = requestAnimationFrame(tick);
        } else {
          scrollAnimationFrame = null;
        }
      };

      scrollAnimationFrame = requestAnimationFrame(tick);
    };

    const scrollTo = (selector) => {
        const el = cvNode.querySelector(selector);
        if (!el) return;
      smoothScrollToY(el.offsetTop - 8);
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

    // --- Group: Projects 
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

    // --- Group: Contact 
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

    cvNode.classList.add("cv--reveal");

    const sections = cvNode.querySelectorAll(".cv__main .cvSection");
    sections.forEach((sec, i) => {
        sec.style.setProperty("--i", i);
    });

    // ===== Hamburger menu builder (used on mobile) =====
    const buildHamburgerMenu = (container, onClose = () => {}) => {
        container.replaceChildren();

        // Navigate
        const navDiv = document.createElement("div");
        navDiv.className = "hamburgerMenuDivider";
        navDiv.textContent = "Navigate";
        container.appendChild(navDiv);

        const aboutBtn = document.createElement("button");
        aboutBtn.className = "hamburgerMenuItem";
        aboutBtn.textContent = "About me";
        aboutBtn.addEventListener("click", () => { scrollTo("#about"); onClose(); });
        container.appendChild(aboutBtn);

        const subItems = [
            { label: "Education",  target: "#education" },
            { label: "Experience", target: "#experience" },
            { label: "Skills",     target: "#skills" },
            { label: "Languages",  target: "#languages" },
        ];
        subItems.forEach((it) => {
            const btn = document.createElement("button");
            btn.className = "hamburgerMenuItem hamburgerMenuItem--sub";
            btn.textContent = it.label;
            btn.addEventListener("click", () => { scrollTo(it.target); onClose(); });
            container.appendChild(btn);
        });

        // Projects
        if ((person.projects || []).length) {
            const projDiv = document.createElement("div");
            projDiv.className = "hamburgerMenuDivider";
            projDiv.textContent = "Projects";
            container.appendChild(projDiv);

            (person.projects || []).forEach((p) => {
                const btn = document.createElement("button");
                btn.className = "hamburgerMenuItem";
                btn.textContent = p.name;
                btn.addEventListener("click", () => { openProject(p); onClose(); });
                container.appendChild(btn);
            });
        }

        // Contact
        if ((person.contact || []).length) {
            const contactDiv = document.createElement("div");
            contactDiv.className = "hamburgerMenuDivider";
            contactDiv.textContent = "Contact";
            container.appendChild(contactDiv);

            (person.contact || []).forEach((c) => {
                const btn = document.createElement("button");
                btn.className = "hamburgerMenuItem";
                btn.textContent = c.label || "Contact";
                btn.addEventListener("click", () => {
                    if (c.href) window.open(c.href, c.href.startsWith("mailto:") ? "_self" : "_blank");
                    onClose();
                });
                container.appendChild(btn);
            });
        }
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach((sec) => sec.classList.add("is-visible"));
      return { node: cvNode, buildHamburgerMenu };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        root: main,
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((sec) => revealObserver.observe(sec));

    return { node: cvNode, buildHamburgerMenu };
}