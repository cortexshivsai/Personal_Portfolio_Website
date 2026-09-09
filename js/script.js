/* ==========================================================================
   EMAILJS CONFIG — CUSTOMIZE THIS
   Powers the contact form so messages land in your inbox with no backend.

   1. Create a free account at https://www.emailjs.com
   2. Add an Email Service (e.g. Gmail) → copy its Service ID below.
   3. Create an Email Template with variables matching the form field names:
      {{name}}, {{email}}, {{subject}}, {{message}} → copy its Template ID below.
   4. In Account → General, copy your Public Key below.
   ========================================================================== */
const EMAILJS_CONFIG = {
  serviceId: "service_qlnmqz5",
  templateId: "template_2xj0o0i",
  publicKey: "XRf1INso1--sEBtzx"
};

/* ==========================================================================
   PORTFOLIO DATA — CUSTOMIZE THIS
   Everything personal lives here. Edit this object to update the site;
   you should rarely need to touch index.html or style.css for content.
   ========================================================================== */
const portfolioData = {
  personal: {
    name: "Shivsai Jagadale",           // YOUR NAME
    title: "AI/ML Engineer Intern (Seeking)", // YOUR PROFESSIONAL TITLE
    location: "Kolhapur, Maharashtra, India", // YOUR LOCATION
    email: "shivsai1396@gmail.com",     // YOUR EMAIL
    phone: "+91 93592 31309",           // YOUR PHONE
    // CUSTOMIZE THIS: add your own photo to assets/images/ and update the path
    profileImage: "assets/images/profile.jpg",
    // CUSTOMIZE THIS: drop your real PDF resume into assets/resume/ using this filename,
    // or update the path/link here (and in index.html's "Download Resume" button)
    resume: "assets/resume/Shivsai_Jagadale_Resume.pdf"
  },

  social: {
    github: "https://github.com/cortexshivsai",
    linkedin: "https://linkedin.com/in/shivsaijagadale",
    instagram: "https://instagram.com/shivsai0045",
    twitter: "https://x.com/shivsai1396"
  },

  // ------------------------------------------------------------------------
  // SKILLS — grouped into categories. Add/remove categories or tags freely.
  // ------------------------------------------------------------------------
  skills: [
    { category: "Languages", tags: ["Python", "JavaScript", "SQL", "C/C++"] },
    { category: "Machine Learning", tags: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "Data Preprocessing"] },
    { category: "AI / Deep Learning", tags: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision", "Generative AI"] },
    { category: "Web Technologies", tags: ["HTML", "CSS", "JavaScript",] },
    { category: "Libraries & Frameworks", tags: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"] },
    { category: "Databases", tags: ["MySQL","PostgreSQL","MongoDB"] },
    { category: "Dev Tools", tags: ["Git", "GitHub", "VS Code", "Postman", "Jenkins", "Docker", "Kubernetes"] },
    { category: "Other", tags: ["REST APIs","FLASK", "JSON", "OOP", "Data Structures & Algorithms"] }
  ],

  // Experience: no entries yet (add here when available — see README for how
  // to bring back the Experience section in index.html and script.js).
  experience: [],

  // ------------------------------------------------------------------------
  // PROJECTS — category must be one of: ai-ml, python, web (used by filters)
  // ------------------------------------------------------------------------
  projects: [
    {
      title: "FaceMark-AI — Automated Attendance System",
      category: "ai-ml",
      categoryLabel: "AI / Computer Vision",
      icon: "eye",
      description: "AI-based attendance system with real-time webcam face recognition, automated marking and duplicate prevention.",
      features: [
        "Real-time webcam face recognition using face encodings and face-distance comparison for identification",
        "Automated attendance marking with duplicate prevention",
        "MySQL database integration for student and attendance record management",
        "Dashboard for tracking attendance records"
      ],
      tech: ["Python", "OpenCV", "Face Recognition", "CustomTkinter", "MySQL"],
      github: "https://github.com/cortexshivsai/FaceMark-AI.git", // CUSTOMIZE THIS: link to this repo
      demo: "" // CUSTOMIZE THIS: live demo link if available
    },
    {
      title: "ShadowAI — AI-Powered Voice Assistant",
      category: "ai-ml",
      categoryLabel: "AI / NLP",
      icon: "chat",
      description: "Voice-controlled assistant with wake-word detection, natural language interaction and web automation.",
      features: [
        "Wake-word detection and natural language interaction",
        "Web automation for app launching, navigation and music playback",
        "Google Gemini API and News API integration for conversational responses and real-time news retrieval",
        "Modular architecture built for extensibility"
      ],
      tech: ["Python", "SpeechRecognition", "pyttsx3", "Gemini API", "News API"],
      github: "https://github.com/cortexshivsai/ShadowAI-Assistant.git",
      demo: ""
    },
    {
      title: "Customer Churn Prediction & Business Insight System",
      category: "python",
      categoryLabel: "Machine Learning",
      icon: "brain",
      description: "ML pipeline that predicts customer churn and segments at-risk customers for retention strategy.",
      features: [
        "Machine learning pipeline for churn prediction and at-risk customer segmentation",
        "Data preprocessing and exploratory data analysis",
        "Interactive dashboards and visualizations delivering actionable business insights"
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      github: "https://github.com/cortexshivsai/Customer_Churn_Prediction.git",
      demo: ""
    },
    {
      title: "Personal Portfolio Website",
      category: "web",
      categoryLabel: "Web Development",
      icon: "code",
      description: "A responsive personal portfolio showcasing projects, skills and experience, deployed on Netlify.",
      features: [
        "Fully responsive, hand-built layout",
        "Deployed on Netlify"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/cortexshivsai/Personal_Portfolio_Website.git",
      demo: ""
    }
  ],

  // ------------------------------------------------------------------------
  // EDUCATION
  // ------------------------------------------------------------------------
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      school: "D Y Patil Agriculture & Technical University, Talsande, Kolhapur",
      start: "2024",
      end: "2028",
      description: "CGPA: 8.5 / 10.0"
    }
  ],

  certifications: [
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS" },
    { name: "JavaScript IT Specialist", issuer: "Certiport" },
    { name: "Software Foundation Course — C++", issuer: "IBMCE" },
    { name: "Python", issuer: "IBMCE" },
    { name: "AI — Data Engineering Analyst", issuer: "NASSCOM" },
    { name: "AI — Machine Learning Engineer", issuer: "Reliance Foundation" }
  ],

  achievements: [
    "Solved 150 DSA problems on NeetCode.",
    "Achieved a 5-star rating in SQL and Python on HackerRank."
  ],

  // ------------------------------------------------------------------------
  // FOCUS AREAS ("services") — capabilities, not a freelance rate card.
  // ------------------------------------------------------------------------
  services: [
    {
      title: "Machine Learning & Modeling",
      description: "Data preprocessing, feature engineering and model development for classification, regression and clustering problems.",
      icon: "brain"
    },
    {
      title: "Computer Vision",
      description: "Real-time recognition and detection systems using OpenCV and face-embedding techniques.",
      icon: "eye"
    },
    {
      title: "NLP & Conversational AI",
      description: "Voice and text interfaces built on APIs like Gemini, with modular, extensible architectures.",
      icon: "chat"
    },
    {
      title: "Full-Stack Web Development",
      description: "Responsive front ends and REST-backed apps using HTML, CSS, JavaScript, React and Node.js.",
      icon: "code"
    }
  ],

  // No testimonials yet — add real ones here as { name, role, company, quote } when available.
  testimonials: []
};

/* ==========================================================================
   ICONS (small inline SVG paths reused for focus/cert cards)
   ========================================================================== */
const ICONS = {
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 10v1a3 3 0 0 0 1.5 2.6A3 3 0 0 0 7 19a3 3 0 0 0 2-.8A3 3 0 0 0 12 20a3 3 0 0 0 3-1.8 3 3 0 0 0 2-.6A3 3 0 0 0 19 14v-1a3 3 0 0 0-2-2.7V7a3 3 0 0 0-3-3 3 3 0 0 0-2 .8A3 3 0 0 0 9 4Z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.2-4.3A8 8 0 1 1 21 12Z"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 18-6-6 6-6M15 6l6 6-6 6"/></svg>',
  badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="9" r="6"/><path d="m8.5 14.5-1.7 6.5L12 18l5.2 3-1.7-6.5"/></svg>'
};

document.addEventListener("DOMContentLoaded", () => {
  renderPersonalData();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderFocusAreas();

  initTheme();
  initNav();
  initScrollSpy();
  initScrollReveal();
  initProjectFilters();
  initProjectModal();
  initCounters();
  initContactForm();
  initBackToTop();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ==========================================================================
   RENDER: personal / hero
   ========================================================================== */
function renderPersonalData() {
  const { name, title } = portfolioData.personal;
  document.getElementById("heroName").textContent = name;
  document.getElementById("heroTitle").textContent = title;

  const resumeLink = document.querySelector('a[download]');
  if (resumeLink) resumeLink.setAttribute("href", portfolioData.personal.resume);
}

/* ==========================================================================
   RENDER: skills
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = portfolioData.skills.map(group => `
    <div class="skills__category" data-reveal>
      <h3>${escapeHTML(group.category)}</h3>
      <div class="skills__tags">
        ${group.tags.map(tag => `<span class="skills__tag">${escapeHTML(tag)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER: projects + filtering + modal wiring
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = portfolioData.projects.map((p, i) => `
    <article class="project-card" data-category="${p.category}" data-index="${i}" data-reveal tabindex="0" role="button" aria-haspopup="dialog" aria-label="View details for ${escapeHTML(p.title)}">
      <div class="project-card__media">
        ${p.image
          ? `<img src="${p.image}" alt="${escapeHTML(p.title)} screenshot" loading="lazy">`
          : `<span class="project-card__media-tag">${escapeHTML(p.categoryLabel)}</span><div class="project-card__media-icon">${ICONS[p.icon] || ICONS.code}</div>`
        }
      </div>
      <div class="project-card__body">
        <p class="project-card__cat">${escapeHTML(p.categoryLabel)}</p>
        <h3 class="project-card__title">${escapeHTML(p.title)}</h3>
        <p class="project-card__desc">${escapeHTML(p.description)}</p>
        <div class="project-card__tech">${p.tech.slice(0, 4).map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
        <div class="project-card__links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">GitHub ↗</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Live Demo ↗</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    const open = () => openProjectModal(portfolioData.projects[card.dataset.index]);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
}

function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter__btn");
  const cards = () => document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      cards().forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });
}

/* ==========================================================================
   PROJECT MODAL
   ========================================================================== */
let lastFocusedEl = null;

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  modal.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProjectModal));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeProjectModal();
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  lastFocusedEl = document.activeElement;

  document.getElementById("modalCategory").textContent = project.categoryLabel;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDesc").textContent = project.description;
  document.getElementById("modalMediaFallback").textContent = project.categoryLabel;

  document.getElementById("modalFeatures").innerHTML =
    project.features.map(f => `<li>${escapeHTML(f)}</li>`).join("");

  document.getElementById("modalTech").innerHTML =
    project.tech.map(t => `<span>${escapeHTML(t)}</span>`).join("");

  document.getElementById("modalLinks").innerHTML = `
    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">GitHub ↗</a>` : ""}
    ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Live Demo ↗</a>` : ""}
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

/* ==========================================================================
   RENDER: education / certifications / achievements
   ========================================================================== */
function renderEducation() {
  const list = document.getElementById("educationList");
  list.innerHTML = portfolioData.education.map(edu => `
    <div class="edu__card" data-reveal>
      <p class="edu__years">${escapeHTML(edu.start)} — ${escapeHTML(edu.end)}</p>
      <div>
        <h3 class="edu__degree">${escapeHTML(edu.degree)}</h3>
        <p class="edu__school">${escapeHTML(edu.school)}</p>
        ${edu.description ? `<p class="edu__desc">${escapeHTML(edu.description)}</p>` : ""}
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const grid = document.getElementById("certGrid");
  grid.innerHTML = portfolioData.certifications.map(c => `
    <li class="cert__item" data-reveal>
      ${ICONS.badge}
      <span><strong>${escapeHTML(c.name)}</strong><span>${escapeHTML(c.issuer)}</span></span>
    </li>
  `).join("");
}

function renderAchievements() {
  const list = document.getElementById("achieveList");
  list.innerHTML = portfolioData.achievements.map(a => `<li data-reveal>${escapeHTML(a)}</li>`).join("");
}

/* ==========================================================================
   RENDER: focus areas ("services")
   ========================================================================== */
function renderFocusAreas() {
  const grid = document.getElementById("focusGrid");
  grid.innerHTML = portfolioData.services.map(s => `
    <div class="focus__card" data-reveal>
      <div class="focus__icon">${ICONS[s.icon] || ICONS.code}</div>
      <h3>${escapeHTML(s.title)}</h3>
      <p>${escapeHTML(s.description)}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   THEME TOGGLE (dark/light, persisted, respects system preference)
   ========================================================================== */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  const initial = stored || (systemPrefersLight ? "light" : "dark");
  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      toggle.setAttribute("aria-pressed", "true");
      toggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
      root.removeAttribute("data-theme");
      toggle.setAttribute("aria-pressed", "false");
      toggle.setAttribute("aria-label", "Switch to light theme");
    }
  }
}

/* ==========================================================================
   NAVIGATION: sticky shadow, mobile menu, smooth scroll, active link
   ========================================================================== */
function initNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll("[data-nav]").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav__link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ==========================================================================
   STAT COUNTERS (hero panel)
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".stat__num, .hero__photo-stat-num");
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.decimal === "true";
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   CONTACT FORM (sends via EmailJS — see EMAILJS_CONFIG at the top of this file)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  if (window.emailjs && EMAILJS_CONFIG.publicKey && !EMAILJS_CONFIG.publicKey.startsWith("YOUR_")) {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  const fields = {
    name: { input: document.getElementById("fieldName"), error: document.getElementById("errName") },
    email: { input: document.getElementById("fieldEmail"), error: document.getElementById("errEmail") },
    subject: { input: document.getElementById("fieldSubject"), error: document.getElementById("errSubject") },
    message: { input: document.getElementById("fieldMessage"), error: document.getElementById("errMessage") }
  };
  const status = document.getElementById("formStatus");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(fields).forEach(([key, { input, error }]) => {
      input.classList.remove("is-invalid");
      error.textContent = "";

      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        error.textContent = "This field is required.";
        isValid = false;
        return;
      }
      if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        input.classList.add("is-invalid");
        error.textContent = "Enter a valid email address.";
        isValid = false;
      }
    });

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields.";
      return;
    }

    if (!window.emailjs || EMAILJS_CONFIG.publicKey.startsWith("YOUR_")) {
      status.textContent = "Contact form isn't configured yet — add your EmailJS keys in js/script.js (EMAILJS_CONFIG).";
      return;
    }

    submitBtn.disabled = true;
    status.textContent = "Sending…";

    emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form)
      .then(() => {
        status.textContent = "Message sent — thanks for reaching out! I'll get back to you soon.";
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        status.textContent = "Something went wrong sending your message. Please try emailing me directly instead.";
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });
}

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

/* ==========================================================================
   UTIL
   ========================================================================== */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}
