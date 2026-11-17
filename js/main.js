/**
 * ==========================================================================
 * Persona 3 Reload - Portfolio Interaction & Animation Engine
 * Authentic Atlus Aesthetic (60fps, Zero-Latency Audio, Zero Bugs)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Data Structures & Configuration
// --------------------------------------------------------------------------
const colors = ["fill-button-1", "fill-button-2", "fill-button-3"];

const options = [
  {
    name: "PROJECT",
    description: "View Featured Works & Projects",
    rotation: -20,
    zIndex: 1,
    offsetX: -40,
    offsetY: 25,
    fontSize: "5.15rem",
    bannerScaleX: 1.07,
    bannerScaleY: 3.35,
    tag: "PORTFOLIO WORKS",
    summary: "Featured applications, interactive web systems & creative experiments",
    cards: [
      {
        title: "Persona 3 Reload Pause Menu",
        desc: "Pixel-perfect vanilla recreation with SVG color-inversion, Web Audio SFX, and video backdrops."
      },
      {
        title: "Persona 5 Style Portfolio",
        desc: "Signature comic-book high-contrast red & black interactive developer showcase."
      },
      {
        title: "Persona 5 Typography Playground",
        desc: "Custom typeface exploration tool for Ransom and Solid font systems."
      },
      {
        title: "Modern Web App Suite",
        desc: "High-performance responsive web applications crafted with clean code architecture."
      }
    ]
  },
  {
    name: "SKILLS",
    description: "View Technical Abilities & Stack",
    rotation: -12,
    zIndex: 2,
    offsetX: -65,
    offsetY: 30,
    fontSize: "4.55rem",
    bannerScaleX: 0.96,
    bannerScaleY: 3.05,
    tag: "ABILITIES & PROFICIENCY",
    summary: "Modern frontend technologies, system design, and AI workflows",
    cards: [
      {
        title: "Modern Frontend Core",
        desc: "TypeScript, JavaScript (ES6+), HTML5 Semantic Architecture, Native CSS3 (Flexbox/Grid/Animations)."
      },
      {
        title: "Component Systems",
        desc: "React, Next.js App Router, Vue.js, Tailwind CSS v4, Headless UI, Material Design 3 tokens."
      },
      {
        title: "Performance & Audio",
        desc: "Web Audio API latency mitigation, 60fps WAAPI & CSS Hardware Accelerated pipelines."
      },
      {
        title: "AI Integration & Dev Tools",
        desc: "Frontier LLM integrations, Prompt Engineering, Agentic coding workflows, Git automation."
      }
    ]
  },
  {
    name: "ABOUT",
    description: "Developer Profile & Philosophy",
    rotation: -4,
    zIndex: 3,
    offsetX: -80,
    offsetY: 35,
    fontSize: "4.85rem",
    bannerScaleX: 1.02,
    bannerScaleY: 3.25,
    tag: "PROFILE & JOURNEY",
    summary: "Frontend web designer & developer dedicated to immersive web experiences",
    cards: [
      {
        title: "Design Philosophy",
        desc: "Belief in high-fidelity micro-interactions, bold visual identity, and accessible engineering."
      },
      {
        title: "Inspiration",
        desc: "Persona 3 Reload & Atlus design systems: dynamic angled layouts, typographic hierarchy, and responsive fluid motion."
      },
      {
        title: "Developer Identity",
        desc: "Ilham Ziqri: Frontend specialist crafting web interfaces that feel alive, intuitive, and memorable."
      }
    ]
  },
  {
    name: "SOCIALS",
    description: "Find Me Online",
    rotation: 5,
    zIndex: 4,
    offsetX: -85,
    offsetY: 40,
    fontSize: "4.65rem",
    bannerScaleX: 1.04,
    bannerScaleY: 3.2,
    tag: "SOCIAL CHANNELS",
    summary: "Available for collaboration, freelance inquiries, and frontend opportunities",
    cards: [
      {
        title: "Instagram",
        desc: "instagram.com/gerrymarsius: Daily updates, behind-the-scenes, and design snippets."
      },
      {
        title: "Direct Mail",
        desc: "gerrymarsius562@gmail.com: Priority channel for direct communication and collaborations."
      },
      {
        title: "GitHub Repository",
        desc: "github.com/gary-ms: Explore active source code, repos, and open-source experiments."
      },
      {
        title: "Discord",
        desc: "discord.gg/5rC9MzZhk: Join the server to chat, ask questions, or just hang out."
      }
    ]
  }
];

const slinkData = [
  {
    numeral: "I",
    title: "Semai",
    subtitle: "plant care app that helps users manage plants.",
    url: "https://github.com/gary-ms/Semai"
  },
  {
    numeral: "II",
    title: "Noot",
    subtitle: "Daily task management mobile application",
    url: "https://github.com/gerry195/Noot-"
  },
  {
    numeral: "III",
    title: "Noberu",
    subtitle: "A voice-based app providing daily information",
    url: "https://github.com/gerry195/Noberu"
  },
  {
    numeral: "IV",
    title: "Kanbify",
    subtitle: "Kanban board task management for team",
    url: "https://github.com/gerry195/Kanbify"
  },
  {
    numeral: "V",
    title: "PBL 307 - Get Daily Information",
    subtitle: "A voice-based app providing daily information for impaired users.",
    url: "#"
  },
];

// Detail content shown in the right-hand panel. Index matches slinkData.
// "TODO" entries are drafts: verify them against the real project.
const slinkDetails = [
  {
    slug: "semai",
    // portrait = mobile app screenshots (3 tall frames side by side), landscape = web (3 wide frames stacked)
    layout: "portrait",
    description: "A plant care app that helps users keep track of their collection, know when each plant needs water, and log how it grows over time.",
    features: [
      "Add, edit and delete plants with your own photos",
      "Mark as watered and the next schedule is recalculated",
      "Search and filter the plant collection",
      "Growth journal for every plant"
    ],
    stack: ["Flutter", "Dart", "Provider", "ChangeNotifier"],
    links: [{ label: "GitHub", url: "https://github.com/gary-ms/Semai" }]
  },
  {
    slug: "noot",
    // portrait = mobile app screenshots (3 tall frames side by side), landscape = web (3 wide frames stacked)
    layout: "portrait",
    description: "A daily notes and task app with a clean, simple interface for writing things down and finding them again quickly.",
    features: [
      "Splash, login, home, add note and note detail screens",
      "Notes saved locally on the device",
      "Installable as a PWA, hosted on GitHub Pages"
    ],
    stack: ["Flutter", "Dart", "PWA", "GitHub Pages"],
    links: [{ label: "GitHub", url: "https://github.com/gerry195/Noot-" }]
  },
  {
    slug: "noberu",
    // portrait = mobile app screenshots (3 tall frames side by side), landscape = web (3 wide frames stacked)
    layout: "portrait",
    description: "A voice-based app that reads out daily information, so users can get what they need without reading a screen.",
    features: [
      "Hands-free daily information through voice",
      "Simple screens with large, readable controls"
    ],
    // TODO: replace with the real stack
    stack: ["Mobile App", "Voice Interface"],
    links: [{ label: "GitHub", url: "https://github.com/gerry195/Noberu" }]
  },
  {
    slug: "kanbify",
    // portrait = mobile app screenshots (3 tall frames side by side), landscape = web (3 wide frames stacked)
    layout: "landscape",
    description: "A Kanban board for teams to plan work, move tasks across columns and see progress at a glance on a dashboard.",
    features: [
      "Team boards with task columns",
      "Dashboard panels and a task status bar chart",
      "Toast notifications for successful actions",
      "Glassmorphism UI with animated pages"
    ],
    // TODO: replace with the real stack
    stack: ["Web App", "Kanban", "Glassmorphism UI"],
    links: [{ label: "GitHub", url: "https://github.com/gerry195/Kanbify" }]
  },
  {
    slug: "dailybrief",
    // portrait = mobile app screenshots (3 tall frames side by side), landscape = web (3 wide frames stacked)
    layout: "portrait",
    description: "PBL TRPL-307 team project: a voice-based app that gives daily information to visually impaired users. My role was System Requirements Analyst.",
    features: [
      "Daily information delivered by voice",
      "Designed around accessibility for impaired users",
      "Requirements and SKPPL documentation"
    ],
    // TODO: replace with the real stack
    stack: ["Mobile App", "Voice Interface", "Accessibility"],
    links: []
  }
];

const skillTabsList = [
  { id: "frontend", code: "01", label: "FRONTEND" },
  { id: "backend", code: "02", label: "BACKEND" },
  { id: "ai", code: "03", label: "AI & ML" },
  { id: "languages", code: "04", label: "LANGUAGES" }
];

const skillGroupsData = [
  {
    id: "frontend",
    title: "FRONTEND & WEB ENGINEERING",
    code: "01",
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "React · Next.js · Vue 3", level: 88 },
      { name: "HTML5 · Modern CSS3 · Tailwind", level: 95 },
      { name: "SvelteKit · State Management", level: 84 },
      { name: "WebGL · Three.js · Canvas", level: 80 },
      { name: "UI/UX Design · Figma Systems", level: 86 }
    ]
  },
  {
    id: "backend",
    title: "BACKEND & CLOUD ARCHITECTURE",
    code: "02",
    skills: [
      { name: "Node.js · Express · REST APIs", level: 85 },
      { name: "Python · FastAPI · Django", level: 82 },
      { name: "SQL · PostgreSQL · Supabase", level: 80 },
      { name: "Docker · CI/CD · Cloud Hosting", level: 76 },
      { name: "Git · GitHub · Workflows", level: 90 },
      { name: "WebSockets & Realtime Systems", level: 78 }
    ]
  },
  {
    id: "ai",
    title: "AI & MACHINE LEARNING",
    code: "03",
    skills: [
      { name: "Prompt Engineering & Agent Swarms", level: 90 },
      { name: "TensorFlow / PyTorch · Neural Nets", level: 82 },
      { name: "NLP & LLM API Integrations", level: 85 },
      { name: "Computer Vision · MediaPipe", level: 80 },
      { name: "Vector DB & RAG Architecture", level: 84 }
    ]
  },
  {
    id: "languages",
    title: "LANGUAGE PROFICIENCY",
    code: "04",
    skills: [
      { name: "Bahasa Indonesia (Native / Fluent)", level: 100 },
      { name: "English (Professional Working Proficiency)", level: 86 },
      { name: "English (Technical & Documentation)", level: 90 },
      { name: "English (Spoken & Conversational)", level: 82 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. Global State & DOM Element Cache
// --------------------------------------------------------------------------
let isLoaded = false;
let isStarted = false;
let selectedIndex = 0;
let isModalOpen = false;
let isProjectPageOpen = false;
let selectedSlinkIndex = 0;
let isProjectDetailOpen = false;
let isSkillPageOpen = false;
let currentSkillTab = "frontend";
let isAboutPageOpen = false;
let isContactPageOpen = false;
let selectedContactIndex = 0;
let isWavyTransitionRunning = false;

// DOM Elements: Main Menu & Background
const bgVideoIntro = document.getElementById("background-video-intro") || document.getElementById("background-video");
const bgVideoLoop = document.getElementById("background-video-loop");
const optionsList = document.getElementById("options-list");
const sideNumber = document.getElementById("side-number");
const wavyTransitionPortal = document.getElementById("wavy-transition-portal");

// DOM Elements: Modal
const portfolioModal = document.getElementById("portfolio-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalCardsContainer = document.getElementById("modal-cards-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalFooterCloseBtn = document.getElementById("modal-footer-close-btn");

// DOM Elements: Project Screen (S.Link)
const projectPage = document.getElementById("project-page");
const slinkBgVideo = document.getElementById("slink-bg-video");
const slinkCardsContainer = document.getElementById("slink-cards-container");
const slinkConfirmBtn = document.getElementById("slink-confirm-btn");
const slinkBackBtn = document.getElementById("slink-back-btn");
const slinkDetail = document.getElementById("slink-detail");
const detailPage = document.getElementById("project-detail-page");
const detailBgVideo = document.getElementById("detail-bg-video");
const detailHeaderDiv = document.getElementById("detail-header-div");
const detailTitle = document.getElementById("detail-title");
const detailIconImg = document.getElementById("detail-icon-img");
const detailPreview = document.getElementById("detail-preview");

// DOM Elements: Skill Screen
const skillPage = document.getElementById("skill-page");
const skillBgVideo = document.getElementById("skill-bg-video");
const skillHeaderDiv = document.getElementById("skill-header-div");
const skillTabsNav = document.getElementById("skill-tabs-nav");
const p3rSkillsContainer = document.getElementById("p3r-skills-container");
const skillBackBtn = document.getElementById("skill-back-btn");
const skillTabPrevBtn = document.getElementById("skill-tab-prev-btn");
const skillTabNextBtn = document.getElementById("skill-tab-next-btn");

// DOM Elements: About Screen
const aboutPage = document.getElementById("about-page");
const aboutBgVideo = document.getElementById("about-bg-video");
const aboutHeaderDiv = document.getElementById("about-header-div");
const aboutBackBtn = document.getElementById("about-back-btn");

// DOM Elements: Contact Screen
const contactPage = document.getElementById("contact-page");
const contactBgVideo = document.getElementById("contact-bg-video");
const contactBackBtn = document.getElementById("contact-back-btn");
const contactMailRows = document.querySelectorAll(".p3r-mail-row");

// DOM Elements: Loading Screen
const loadingScreen = document.getElementById("loading-screen");
const loadingBar = document.getElementById("loading-bar");
const loadingPercent = document.getElementById("loading-percent");

// --------------------------------------------------------------------------
// 3. Low-Latency Audio Engine (Web Audio API + Audio Pools + HTML5 Fallbacks)
// --------------------------------------------------------------------------
let audioCtx = null;
let sfxAudioBuffer = null;
let closeMenuAudioBuffer = null;
let menuUtamaAudioBuffer = null;

const SFX_POOL_SIZE = 4;
const sfxAudioPool = [];
const closeMenuAudioPool = [];
const menuUtamaAudioPool = [];
let sfxPoolIndex = 0;
let closeMenuPoolIndex = 0;
let menuUtamaPoolIndex = 0;

let hasMenuUtamaSFXPlayed = false;
let experienceEntryTime = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Pre-create fallback HTMLAudioElement pools
for (let i = 0; i < SFX_POOL_SIZE; i++) {
  const a = new Audio("sfx/navigation.wav");
  a.preload = "auto";
  a.volume = 0.6;
  sfxAudioPool.push(a);

  const b = new Audio("sfx/close-menu.mp3");
  b.preload = "auto";
  b.volume = 0.75;
  closeMenuAudioPool.push(b);

  const c = new Audio("sfx/menu-utama.mp3");
  c.preload = "auto";
  c.volume = 0.8;
  menuUtamaAudioPool.push(c);
}

// Background buffer decoding for instantaneous hardware playback
async function loadAudioBuffers() {
  try {
    const [navRes, closeRes, menuRes] = await Promise.all([
      fetch("sfx/navigation.wav"),
      fetch("sfx/close-menu.mp3"),
      fetch("sfx/menu-utama.mp3")
    ]);
    const ctx = getAudioContext();
    if (ctx) {
      if (navRes.ok && !sfxAudioBuffer) {
        const buf = await navRes.arrayBuffer();
        sfxAudioBuffer = await ctx.decodeAudioData(buf);
      }
      if (closeRes.ok && !closeMenuAudioBuffer) {
        const buf = await closeRes.arrayBuffer();
        closeMenuAudioBuffer = await ctx.decodeAudioData(buf);
      }
      if (menuRes.ok && !menuUtamaAudioBuffer) {
        const buf = await menuRes.arrayBuffer();
        menuUtamaAudioBuffer = await ctx.decodeAudioData(buf);
      }
    }
  } catch (_) {}
}
loadAudioBuffers();

// Clean unified audio playback dispatcher
function playAudioChannel({
  buffer,
  staticElId,
  pool,
  getPoolIdx,
  setPoolIdx,
  volume = 0.6,
  onPlaySuccess
}) {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "running" && buffer) {
    try {
      const source = ctx.createBufferSource();
      const gainNode = ctx.createGain();
      gainNode.gain.value = volume;
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      if (onPlaySuccess) onPlaySuccess();
      return true;
    } catch (_) {}
  }

  const staticEl = document.getElementById(staticElId);
  if (staticEl) {
    try {
      staticEl.currentTime = 0;
      staticEl.volume = volume;
      const p = staticEl.play();
      if (p !== undefined) {
        p.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      return true;
    } catch (_) {}
  }

  if (pool && pool.length > 0) {
    try {
      const idx = getPoolIdx();
      const sound = pool[idx];
      sound.currentTime = 0;
      sound.volume = volume;
      const sp = sound.play();
      if (sp !== undefined) {
        sp.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      setPoolIdx((idx + 1) % pool.length);
      return true;
    } catch (_) {}
  }
  return false;
}

function playSFX() {
  if (!isStarted) return;
  playAudioChannel({
    buffer: sfxAudioBuffer,
    staticElId: "sfx-navigation-el",
    pool: sfxAudioPool,
    getPoolIdx: () => sfxPoolIndex,
    setPoolIdx: (v) => { sfxPoolIndex = v; },
    volume: 0.6
  });
}

function playCloseMenuSFX() {
  playAudioChannel({
    buffer: closeMenuAudioBuffer,
    staticElId: "sfx-close-menu-el",
    pool: closeMenuAudioPool,
    getPoolIdx: () => closeMenuPoolIndex,
    setPoolIdx: (v) => { closeMenuPoolIndex = v; },
    volume: 0.75
  });
}

async function playMenuUtamaSFX() {
  if (hasMenuUtamaSFXPlayed) return true;
  const ctx = getAudioContext();
  if (ctx && ctx.state !== "running") {
    try { await ctx.resume(); } catch (_) {}
  }
  playAudioChannel({
    buffer: menuUtamaAudioBuffer,
    staticElId: "sfx-menu-utama-el",
    pool: menuUtamaAudioPool,
    getPoolIdx: () => menuUtamaPoolIndex,
    setPoolIdx: (v) => { menuUtamaPoolIndex = v; },
    volume: 0.95,
    onPlaySuccess: () => { hasMenuUtamaSFXPlayed = true; }
  });
  return true;
}

// Early Audio Unlocker on First User Gesture
async function unlockAudioEngine() {
  const ctx = getAudioContext();
  if (ctx) {
    if (ctx.state !== "running") {
      try { await ctx.resume(); } catch (_) {}
    }
    try {
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    } catch (_) {}
  }

  if (isStarted && !hasMenuUtamaSFXPlayed) {
    if (Date.now() - experienceEntryTime < 2500) {
      playMenuUtamaSFX();
    } else {
      hasMenuUtamaSFXPlayed = true;
    }
  }
}

["pointerdown", "mousedown", "touchstart", "touchend", "click", "keydown", "focus"].forEach((evt) => {
  window.addEventListener(evt, unlockAudioEngine, { capture: true, passive: true });
});

// --------------------------------------------------------------------------
// 4. Main Menu SVG Dynamic Mask Inversion Engine
// --------------------------------------------------------------------------
const selectorPath = "M 24.853754, 93.31573 135.14625, 49.684266 114.14751, 97.331142 Z";
const selectorBackgroundPath = "M 12.7428765,95.50088 144.25712,47.499123 116.75625,95.465764 Z";

function renderOptions() {
  optionsList.innerHTML = "";

  options.forEach((opt, index) => {
    const colorClass = colors[(index + 2) % colors.length];
    const cleanName = opt.name.replace(/ /g, "");
    const bannerScaleFactorX = opt.bannerScaleX || 1.0;
    const bannerScaleY = opt.bannerScaleY || 3.2;
    const scaleX = (cleanName.length * 0.52 + 1.6) * bannerScaleFactorX;
    const selectorTransform = `translate(-60, -9) rotate(8, 0, 100) scale(${scaleX}, ${bannerScaleY})`;
    const maskId = `selector-mask-${index}`;

    const item = document.createElement("div");
    item.className = `option-item ${index === 0 ? "selected" : ""}`;
    item.id = `option-item-${index}`;
    item.style.zIndex = index === 0 ? 15 : opt.zIndex;

    item.innerHTML = `
      <button 
        class="option-hitbox" 
        data-index="${index}" 
        aria-label="${opt.name}">
      </button>

      <svg
        width="950"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        class="option-svg"
        style="transform: translate(${opt.offsetX}px, ${opt.offsetY}px) rotate(${opt.rotation}deg);"
      >
        <defs>
          <mask
            id="${maskId}"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="950"
            height="200"
          >
            <rect width="100%" height="100%" fill="black" />
            <g transform="${selectorTransform}" transform-origin="left center">
              <path fill="white" d="${selectorPath}" />
              <path class="pulse-anim" transform-origin="52 100" fill="white" d="${selectorBackgroundPath}" />
            </g>
          </mask>
        </defs>

        <!-- Selector banner when selected -->
        <g class="selector-group" transform="${selectorTransform}" transform-origin="left center">
          <path class="fill-pink pulse-anim" transform-origin="52 100" d="${selectorBackgroundPath}" />
          <path class="fill-fg" d="${selectorPath}" />
        </g>

        <!-- Base Text -->
        <text
          x="150"
          y="122"
          class="option-text base-text ${colorClass}"
          style="font-size: ${opt.fontSize || '4.8rem'};"
        >
          ${opt.name}
        </text>

        <!-- Masked Red Text (Over the white selector) -->
        <g class="masked-red-group" mask="url(#${maskId})">
          <text
            x="150"
            y="122"
            class="option-text fill-red"
            style="font-size: ${opt.fontSize || '4.8rem'};"
          >
            ${opt.name}
          </text>
        </g>
      </svg>
    `;

    // Interactive event triggers
    const hitbox = item.querySelector(".option-hitbox");
    hitbox.addEventListener("mouseenter", () => {
      if (selectedIndex !== index) {
        setIndex(index);
      }
    });

    hitbox.addEventListener("click", (e) => {
      setIndex(index);
      handleOptionConfirm(index, e);
    });

    optionsList.appendChild(item);
  });
}

function setIndex(index) {
  if (index === selectedIndex && optionsList.children.length > 0) return;
  selectedIndex = index;

  playSFX();

  if (sideNumber) {
    sideNumber.textContent = (selectedIndex + 1).toString().padStart(2, "0");
  }

  const items = optionsList.querySelectorAll(".option-item");
  items.forEach((item, idx) => {
    if (idx === selectedIndex) {
      item.classList.add("selected");
      item.style.zIndex = 15;
    } else {
      item.classList.remove("selected");
      item.style.zIndex = options[idx].zIndex;
    }
  });
}

// --------------------------------------------------------------------------
// 5. Wavy Ripple Geometric Math & Screen Transition Engine
// --------------------------------------------------------------------------
function generateWavyPolygon(
  cx, 
  cy, 
  r, 
  numPoints = 120, 
  waves1 = 7, 
  amp1 = 0.085, 
  waves2 = 14, 
  amp2 = 0.035, 
  phase = 0.0, 
  scaleX = 1.25, 
  scaleY = 1.05
) {
  if (r <= 0.5) {
    const pt = `${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
    return `polygon(${new Array(numPoints).fill(pt).join(", ")})`;
  }
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const theta = (2 * Math.PI * i) / numPoints;
    const wave = 1.0 + amp1 * Math.sin(waves1 * theta + phase) + amp2 * Math.cos(waves2 * theta + phase * 1.6);
    const px = cx + r * wave * Math.cos(theta) * scaleX;
    const py = cy + r * wave * Math.sin(theta) * scaleY;
    points.push(`${px.toFixed(1)}px ${py.toFixed(1)}px`);
  }
  return `polygon(${points.join(", ")})`;
}

function calculateTargetRadius(origin) {
  const maxDist = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );
  return Math.ceil(maxDist * 1.85);
}

// Universal Origin Locators
function getOptionCenter(optionIndex, clickEvent, fallbackXRatio = 0.65, fallbackYRatio = 0.45) {
  if (clickEvent && typeof clickEvent.clientX === "number" && (clickEvent.clientX > 0 || clickEvent.clientY > 0)) {
    return { x: clickEvent.clientX, y: clickEvent.clientY };
  }

  const optionItem = document.getElementById(`option-item-${optionIndex}`) || document.querySelectorAll(".option-item")[optionIndex];
  if (optionItem) {
    const textEls = optionItem.querySelectorAll(".option-text");
    for (let i = 0; i < textEls.length; i++) {
      const tr = textEls[i].getBoundingClientRect();
      if (tr.width > 0 && tr.height > 0) {
        return {
          x: tr.left + tr.width * 0.5,
          y: tr.top + tr.height * 0.5
        };
      }
    }
    const ir = optionItem.getBoundingClientRect();
    if (ir.width > 0 && ir.height > 0) {
      return {
        x: ir.left + ir.width * 0.45,
        y: ir.top + ir.height * 0.5
      };
    }
  }

  return {
    x: window.innerWidth * fallbackXRatio,
    y: window.innerHeight * fallbackYRatio
  };
}

function getExitOrigin(buttonElOrId, fallbackX, fallbackY) {
  const btn = typeof buttonElOrId === "string" ? document.getElementById(buttonElOrId) : buttonElOrId;
  if (btn) {
    const r = btn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return {
        x: r.left + r.width * 0.5,
        y: r.top + r.height * 0.5
      };
    }
  }
  return {
    x: fallbackX !== undefined ? fallbackX : window.innerWidth - 120,
    y: fallbackY !== undefined ? fallbackY : window.innerHeight - 55
  };
}

// Named Aliases for Backward Compatibility & Direct Script Control
const getProjectOptionCenter = (evt) => getOptionCenter(0, evt, 0.70, 0.35);
const getSkillOptionCenter   = (evt) => getOptionCenter(1, evt, 0.65, 0.45);
const getAboutOptionCenter   = (evt) => getOptionCenter(2, evt, 0.65, 0.55);
const getContactOptionCenter = (evt) => getOptionCenter(3, evt, 0.60, 0.65);

const getProjectExitOrigin = () => getExitOrigin(slinkBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getSkillExitOrigin   = () => getExitOrigin(skillBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getAboutExitOrigin   = () => getExitOrigin(aboutBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getContactExitOrigin = () => getExitOrigin(contactBackBtn, 80, window.innerHeight - 60);

// Unified WAAPI Ripple Reveal & Close Transitions
function executeWavyReveal({
  pageEl,
  origin,
  bodyClass,
  videoEl,
  onStart,
  onComplete,
  duration = 820,
  easing = "cubic-bezier(0.2, 1, 0.35, 1)"
}) {
  if (!pageEl) {
    if (bodyClass) document.body.classList.add(bodyClass);
    if (onComplete) onComplete();
    return;
  }

  isWavyTransitionRunning = true;
  if (onStart) onStart();

  const targetRadius = calculateTargetRadius(origin);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");
  pageEl.setAttribute("aria-hidden", "false");

  if (videoEl) {
    videoEl.currentTime = 0;
    videoEl.muted = true;
    videoEl.play().catch(() => {});
  }

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, 0, 120, 7, 0.085, 14, 0.035, 0.0, 1.25, 1.05) 
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 22, origin.y - 12, targetRadius * 0.45, 120, 7, 0.09, 14, 0.035, 1.2, 1.25, 1.05),
      offset: 0.38
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 10, origin.y - 5, targetRadius * 0.85, 120, 7, 0.075, 14, 0.025, 2.2, 1.20, 1.05),
      offset: 0.70
    },
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 120, 7, 0.05, 14, 0.015, 3.4, 1.15, 1.02) 
    }
  ], {
    duration,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning");
    pageEl.classList.add("active");
    pageEl.style.clipPath = "";
    if (bodyClass) document.body.classList.add(bodyClass);
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

function executeWavyClose({
  pageEl,
  exitOrigin,
  bodyClass,
  videoEl,
  onComplete,
  duration = 780,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)"
}) {
  playCloseMenuSFX();

  if (!pageEl) {
    if (bodyClass) document.body.classList.remove(bodyClass);
    isWavyTransitionRunning = false;
    return;
  }

  isWavyTransitionRunning = true;
  const targetRadius = calculateTargetRadius(exitOrigin);

  if (bodyClass) document.body.classList.remove(bodyClass);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 120, 9, 0.07, 18, 0.025, 0.0, 1.15, 1.25) 
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 20, exitOrigin.y - 12, targetRadius * 0.80, 120, 9, 0.08, 18, 0.03, 1.0, 1.15, 1.25),
      offset: 0.32
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 28, exitOrigin.y - 18, targetRadius * 0.42, 120, 9, 0.085, 18, 0.03, 2.0, 1.15, 1.25),
      offset: 0.65
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 120, 9, 0.08, 18, 0.025, 3.0, 1.15, 1.25) 
    }
  ], {
    duration,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning", "active");
    pageEl.style.clipPath = "";
    pageEl.setAttribute("aria-hidden", "true");
    if (videoEl) videoEl.pause();
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

// --------------------------------------------------------------------------
// 6. Subpage: PROJECT (S.Link Cards Stack)
// --------------------------------------------------------------------------
function triggerProjectTitleAnimation() {
  const projectDiv = document.getElementById("slink-project-div");
  if (projectDiv) {
    projectDiv.classList.remove("animating");
    void projectDiv.offsetWidth;
    projectDiv.classList.add("animating");
  }
}

function renderSlinkCards() {
  if (!slinkCardsContainer) return;
  slinkCardsContainer.innerHTML = "";

  slinkData.forEach((item, idx) => {
    const card = document.createElement("button");
    const isActive = idx === selectedSlinkIndex;
    card.className = `slink-card ${isActive ? "active" : ""}`;
    card.id = `slink-card-${idx}`;
    card.setAttribute("role", "tab");
    card.setAttribute("aria-selected", isActive ? "true" : "false");
    card.style.setProperty("--card-idx", idx);

    card.innerHTML = `
      <div class="card-unified-row">
        <!-- Solid Sharp Box for Roman Numeral -->
        <div class="card-numeral-box">
          <span class="card-numeral-text">${item.numeral}</span>
        </div>

        <!-- Unified Main Body: Title & Caption Together -->
        <div class="card-main-body">
          <div class="card-title-text">${item.title}</div>
          <div class="card-subtitle-text">${item.subtitle}</div>
          <div class="card-red-accent" aria-hidden="true"></div>
        </div>
      </div>
    `;

    card.addEventListener("mouseenter", () => {
      if (isProjectPageOpen && !isProjectDetailOpen && !isWavyTransitionRunning && selectedSlinkIndex !== idx) {
        selectSlinkCard(idx);
      }
    });

    card.addEventListener("click", (e) => {
      if (isProjectPageOpen && !isWavyTransitionRunning) {
        if (selectedSlinkIndex !== idx) {
          selectSlinkCard(idx);
        }
        openProjectDetail(e);
      }
    });

    slinkCardsContainer.appendChild(card);
  });
}

function selectSlinkCard(index) {
  selectedSlinkIndex = index;
  const cards = document.querySelectorAll(".slink-card");
  cards.forEach((c, idx) => {
    if (idx === selectedSlinkIndex) {
      c.classList.add("active");
      c.setAttribute("aria-selected", "true");
    } else {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    }
  });
  if (isProjectDetailOpen) renderProjectDetail();
  playSFX();
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

// Image slots. Drop PNG files into these paths and they appear automatically:
//   assets/projects/<slug>/icon.png        project icon (next to the project name)
//   assets/projects/<slug>/1.png .. 3.png  the three preview boxes
//   assets/tech/<name>.png                 tech logos, name = lowercase letters/digits only (e.g. flutter.png)
function techLogoFile(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]/g, "");
}

// --------------------------------------------------------------------------
// Preview frames: size the screenshot to the biggest upright rectangle that
// fits inside the slanted frame (see "PREVIEW" in style.css).
// SHOT_FRAMES mirrors the frame size (w, h), border (b) and --shot-shape in
// style.css, all in the same "u" units. Keep them in sync if the frame changes.
// --------------------------------------------------------------------------
const SHOT_FRAMES = {
  portrait:  { w: 158, h: 290, b: 4, shape: [[45.9, 1], [100, 0], [81.6, 89.5], [0, 100], [19.3, 8]] },
  landscape: { w: 240, h: 131, b: 4, shape: [[25.6, 0.8], [100, 0], [94.5, 89], [0, 100], [5.6, 12.8]] }
};
// Gap (in u) kept between the picture and the slanted edge. 0.6 hides the
// anti-aliased seam. A NEGATIVE value lets the picture bleed past the slant;
// it is then clipped by the frame (crops a few corner pixels, picture grows).
const SHOT_MARGIN = 0.6;
const shotFitCache = {};

function fitShotRect(layout, ratio) {
  const key = layout + ":" + ratio.toFixed(3) + ":" + SHOT_MARGIN;
  if (shotFitCache[key]) return shotFitCache[key];

  const f = SHOT_FRAMES[layout] || SHOT_FRAMES.portrait;
  const bw = f.w - 2 * f.b;
  const bh = f.h - 2 * f.b;
  // the dark body is the same polygon laid into the frame inset by the border
  const poly = f.shape.map(([px, py]) => [f.b + (px / 100) * bw, f.b + (py / 100) * bh]);

  // convex polygon, clockwise in screen space: a point is inside when it is at
  // least SHOT_MARGIN away from every edge
  const inside = (x, y) => {
    for (let i = 0; i < poly.length; i++) {
      const [x1, y1] = poly[i];
      const [x2, y2] = poly[(i + 1) % poly.length];
      const ex = x2 - x1, ey = y2 - y1;
      if ((ex * (y - y1) - ey * (x - x1)) / Math.hypot(ex, ey) < SHOT_MARGIN) return false;
    }
    return true;
  };
  const place = (W) => {
    const H = W / ratio;
    for (let y = 0; y + H <= f.h; y += 0.75) {
      for (let x = 0; x + W <= f.w; x += 0.75) {
        if (inside(x, y) && inside(x + W, y) && inside(x + W, y + H) && inside(x, y + H)) return { x, y };
      }
    }
    return null;
  };

  let lo = 1, hi = f.w, best = null;
  for (let i = 0; i < 14; i++) {
    const mid = (lo + hi) / 2;
    const p = place(mid);
    if (p) { lo = mid; best = { x: p.x, y: p.y, W: mid, H: mid / ratio }; } else { hi = mid; }
  }
  if (!best) best = { x: f.b, y: f.b, W: bw, H: bh }; // safe fallback: whole wrapper

  // convert to percentages of the wrapper (= the frame inset by its border)
  const out = {
    l: ((best.x - f.b) / bw) * 100,
    t: ((best.y - f.b) / bh) * 100,
    w: (best.W / bw) * 100,
    h: (best.H / bh) * 100
  };
  shotFitCache[key] = out;
  return out;
}

function fitShotImages(ratio) {
  if (!detailPreview) return;
  const layout = detailPreview.classList.contains("is-landscape") ? "landscape" : "portrait";
  const r = fitShotRect(layout, ratio);
  detailPreview.querySelectorAll(".detail-shot-media").forEach((media) => {
    media.style.setProperty("--img-l", r.l.toFixed(3) + "%");
    media.style.setProperty("--img-t", r.t.toFixed(3) + "%");
    media.style.setProperty("--img-w", r.w.toFixed(3) + "%");
    media.style.setProperty("--img-h", r.h.toFixed(3) + "%");
  });
}

function renderProjectDetail() {
  if (!slinkDetail) return;
  const item = slinkData[selectedSlinkIndex];
  const d = slinkDetails[selectedSlinkIndex] || {};
  if (!item) return;
  const slug = escapeHTML(d.slug || "project");

  if (detailTitle) {
    detailTitle.textContent = item.title;
    // Long titles (e.g. "PBL 307 - Get Daily Information") use a smaller, wrapping banner font.
    detailTitle.classList.toggle("is-long", item.title.length > 14);
  }
  if (detailIconImg) {
    detailIconImg.style.display = "";
    detailIconImg.src = `assets/projects/${d.slug || "project"}/icon.png`;
  }

  const features = (d.features || []).slice(0, 3)
    .map((f) => `<li class="slink-detail-feature">${escapeHTML(f)}</li>`)
    .join("");

  const tech = (d.stack || [])
    .map((t) => `
      <div class="detail-tech-item">
        <div class="detail-tech-box">
          <img src="assets/tech/${techLogoFile(t)}.png" alt="${escapeHTML(t)} logo" />
        </div>
        <span class="detail-tech-name">${escapeHTML(t)}</span>
      </div>`)
    .join("");

  slinkDetail.innerHTML = `
    <div class="detail-stack">
      <section class="detail-desc-box">
        <span class="detail-desc-edge" aria-hidden="true"></span>
        <div class="detail-desc-inner">
          <h3 class="detail-box-title">Project Description</h3>
          <p class="detail-desc-text">${escapeHTML(d.description || item.subtitle)}</p>
        </div>
      </section>

      <section class="detail-block">
        <h3 class="slink-detail-label">FEATURE</h3>
        <ul class="slink-detail-features">${features}</ul>
      </section>

      <section class="detail-block">
        <h3 class="slink-detail-label">TECH STACK</h3>
        <div class="detail-tech-row">${tech}</div>
      </section>
    </div>
  `;

  if (detailPreview) {
    detailPreview.className = "detail-preview " + (d.layout === "landscape" ? "is-landscape" : "is-portrait");
    // Each screenshot sits upright in its own clipped wrapper inside the slanted frame.
    const shots = [1, 2, 3].map((n) => `
      <div class="detail-shot" tabindex="0">
        <span class="detail-shot-ring" aria-hidden="true"></span>
        <span class="detail-shot-body" aria-hidden="true"></span>
        <span class="detail-shot-media"><img src="assets/projects/${slug}/${n}.png" alt="${escapeHTML(item.title)} preview ${n}" /></span>
      </div>`).join("");
    detailPreview.innerHTML = `
      <h3 class="detail-preview-title">Preview</h3>
      <div class="detail-shot-list">${shots}</div>
    `;

    // Until the real file is known, use a typical ratio (phone 9:20, web 16:9) so the frames never look empty.
    fitShotImages(d.layout === "landscape" ? 16 / 9 : 9 / 20);

    // Then pick the frame layout and the picture size from the real asset.
    const firstShot = detailPreview.querySelector(".detail-shot-media img");
    if (firstShot) {
      const fitLayout = () => {
        if (!firstShot.naturalWidth) return;
        const wide = firstShot.naturalWidth > firstShot.naturalHeight;
        detailPreview.classList.toggle("is-landscape", wide);
        detailPreview.classList.toggle("is-portrait", !wide);
        fitShotImages(firstShot.naturalWidth / firstShot.naturalHeight);
      };
      if (firstShot.complete) fitLayout();
      else firstShot.addEventListener("load", fitLayout, { once: true });
    }
  }
}

function getSlinkCardCenter(evt) {
  if (evt && typeof evt.clientX === "number" && (evt.clientX > 0 || evt.clientY > 0)) {
    return { x: evt.clientX, y: evt.clientY };
  }
  const card = document.getElementById(`slink-card-${selectedSlinkIndex}`);
  if (card) {
    const r = card.getBoundingClientRect();
    if (r.width > 0) return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
  }
  return { x: window.innerWidth * 0.4, y: window.innerHeight * 0.5 };
}

function openProjectDetail(clickEvent) {
  if (!isProjectPageOpen || isProjectDetailOpen || isWavyTransitionRunning || !detailPage) return;
  isProjectDetailOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: detailPage,
    origin: getSlinkCardCenter(clickEvent),
    videoEl: detailBgVideo,
    onStart: () => {
      renderProjectDetail();
      if (detailHeaderDiv) {
        detailHeaderDiv.classList.remove("animating");
        void detailHeaderDiv.offsetWidth;
        detailHeaderDiv.classList.add("animating");
      }
    }
  });
}

function closeProjectDetail(silent) {
  if (!isProjectDetailOpen) return false;
  isProjectDetailOpen = false;

  // Closing the whole project screen: hide the detail page instantly.
  if (silent || !detailPage) {
    if (detailPage) {
      detailPage.classList.remove("active", "circle-transitioning");
      detailPage.setAttribute("aria-hidden", "true");
    }
    if (detailBgVideo) detailBgVideo.pause();
    return true;
  }

  executeWavyClose({
    pageEl: detailPage,
    exitOrigin: getExitOrigin(null, window.innerWidth - 120, window.innerHeight - 55),
    videoEl: detailBgVideo
  });
  return true;
}

function openSlinkLink() {
  const d = slinkDetails[selectedSlinkIndex];
  const link = d && d.links && d.links.find((l) => l.url && l.url !== "#");
  if (link) {
    playSFX();
    window.open(link.url, "_blank", "noopener,noreferrer");
  }
}

// ENTER: open the detail panel; ENTER again inside the panel opens the repository.
function confirmSlinkSelection() {
  if (!isProjectDetailOpen) {
    openProjectDetail();
  } else {
    openSlinkLink();
  }
}

// ESC / Back: close the detail panel first, then the project screen.
function handleProjectBack() {
  if (isWavyTransitionRunning) return;
  if (closeProjectDetail()) return;
  closeProjectPage();
}

function openProjectPage(clickEvent) {
  if (isProjectPageOpen || isWavyTransitionRunning) return;
  isProjectPageOpen = true;
  selectedSlinkIndex = 0;
  playSFX();

  executeWavyReveal({
    pageEl: projectPage,
    origin: getProjectOptionCenter(clickEvent),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo,
    onStart: () => {
      renderSlinkCards();
      selectSlinkCard(0);
      triggerProjectTitleAnimation();
    }
  });
}

function closeProjectPage() {
  if (!isProjectPageOpen || isWavyTransitionRunning) return;
  closeProjectDetail(true);
  isProjectPageOpen = false;

  executeWavyClose({
    pageEl: projectPage,
    exitOrigin: getProjectExitOrigin(),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo
  });
}

const playWavyCircleTransition = (clickEvent, onComplete) => {
  openProjectPage(clickEvent);
  if (onComplete) setTimeout(onComplete, 850);
};

// --------------------------------------------------------------------------
// 7. Subpage: SKILLS (Stats & Abilities Interface)
// --------------------------------------------------------------------------
function triggerSkillTitleAnimation() {
  if (skillHeaderDiv) {
    skillHeaderDiv.classList.remove("animating");
    void skillHeaderDiv.offsetWidth;
    skillHeaderDiv.classList.add("animating");
  }
}

function renderSkillsTabs() {
  if (!skillTabsNav) return;
  skillTabsNav.innerHTML = "";

  skillTabsList.forEach((tab) => {
    const btn = document.createElement("button");
    const isActive = (tab.id === currentSkillTab);
    btn.className = `p3r-skill-tab ${isActive ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.innerHTML = `
      <span class="p3r-tab-tag">${tab.code}</span>
      <span class="p3r-tab-label">${tab.label}</span>
    `;

    btn.addEventListener("click", () => {
      if (currentSkillTab !== tab.id) {
        setSkillTab(tab.id);
      }
    });

    skillTabsNav.appendChild(btn);
  });
}

function setSkillTab(tabId) {
  currentSkillTab = tabId;
  playSFX();
  renderSkillsTabs();
  renderSkillStats(currentSkillTab);
}

function prevSkillTab() {
  const currIdx = skillTabsList.findIndex(t => t.id === currentSkillTab);
  const prevIdx = (currIdx - 1 + skillTabsList.length) % skillTabsList.length;
  setSkillTab(skillTabsList[prevIdx].id);
}

function nextSkillTab() {
  const currIdx = skillTabsList.findIndex(t => t.id === currentSkillTab);
  const nextIdx = (currIdx + 1) % skillTabsList.length;
  setSkillTab(skillTabsList[nextIdx].id);
}

function renderSkillStats(category = "frontend") {
  if (!p3rSkillsContainer) return;
  p3rSkillsContainer.innerHTML = "";

  const groupsToDisplay = skillGroupsData.filter(g => g.id === category);

  groupsToDisplay.forEach((group) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "p3r-skill-group";
    groupDiv.id = `skill-group-${group.id}`;

    let rowsHTML = "";
    group.skills.forEach((skill, idx) => {
      rowsHTML += `
        <div class="p3r-stat-row" style="animation-delay: ${idx * 0.06}s;">
          <div class="p3r-stat-name-col">
            <span class="p3r-stat-name">${skill.name}</span>
          </div>
          <div class="p3r-stat-bar-track">
            <div class="p3r-stat-bar-fill" data-v="${skill.level}" style="width: ${skill.level}%;">
              <div class="p3r-stat-bar-tip" aria-hidden="true"></div>
            </div>
          </div>
          <div class="p3r-stat-lv">
            <span class="p3r-stat-lv-prefix">LV</span>
            <span class="p3r-stat-lv-val">${skill.level}</span>
          </div>
        </div>
      `;
    });

    groupDiv.innerHTML = `
      <div class="p3r-skill-group-header">
        <h3 class="p3r-group-title">${group.title}</h3>
        <div class="p3r-group-line"></div>
      </div>
      <div class="p3r-skill-rows-list">
        ${rowsHTML}
      </div>
    `;

    p3rSkillsContainer.appendChild(groupDiv);
  });
}

function openSkillPage(clickEvent) {
  if (isSkillPageOpen || isWavyTransitionRunning) return;
  isSkillPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: skillPage,
    origin: getSkillOptionCenter(clickEvent),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo,
    onStart: () => {
      renderSkillsTabs();
      renderSkillStats(currentSkillTab);
      triggerSkillTitleAnimation();
    }
  });
}

function closeSkillPage() {
  if (!isSkillPageOpen || isWavyTransitionRunning) return;
  isSkillPageOpen = false;

  executeWavyClose({
    pageEl: skillPage,
    exitOrigin: getSkillExitOrigin(),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo
  });
}

// --------------------------------------------------------------------------
// 8. Subpage: ABOUT (Profile & Philosophy Interface)
// --------------------------------------------------------------------------
function triggerAboutTitleAnimation() {
  if (aboutHeaderDiv) {
    aboutHeaderDiv.classList.remove("animating");
    void aboutHeaderDiv.offsetWidth;
    aboutHeaderDiv.classList.add("animating");
  }
}

function openAboutPage(clickEvent) {
  if (isAboutPageOpen || isWavyTransitionRunning) return;
  isAboutPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: aboutPage,
    origin: getAboutOptionCenter(clickEvent),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo,
    onStart: () => {
      triggerAboutTitleAnimation();
    }
  });
}

function closeAboutPage() {
  if (!isAboutPageOpen || isWavyTransitionRunning) return;
  isAboutPageOpen = false;

  executeWavyClose({
    pageEl: aboutPage,
    exitOrigin: getAboutExitOrigin(),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo
  });
}

// --------------------------------------------------------------------------
// 9. Subpage: SOCIALS (Mail / Phone Messaging UI)
// --------------------------------------------------------------------------
function selectContactRow(index) {
  if (!contactMailRows || contactMailRows.length === 0) return;
  selectedContactIndex = Math.max(0, Math.min(index, contactMailRows.length - 1));
  contactMailRows.forEach((row, i) => {
    if (i === selectedContactIndex) {
      row.classList.add("active");
    } else {
      row.classList.remove("active");
    }
  });
  playSFX();
}

function triggerContactPhoneAnimation() {
  const phoneWrap = document.querySelector(".p3r-mail-phone-wrap");
  if (phoneWrap) {
    phoneWrap.style.animation = "none";
    void phoneWrap.offsetWidth;
    phoneWrap.style.animation = "";
  }
}

function openContactPage(clickEvent) {
  if (isContactPageOpen || isWavyTransitionRunning) return;
  isContactPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: contactPage,
    origin: getContactOptionCenter(clickEvent),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo,
    onStart: () => {
      triggerContactPhoneAnimation();
      selectContactRow(0);
    }
  });
}

function closeContactPage() {
  if (!isContactPageOpen || isWavyTransitionRunning) return;
  isContactPageOpen = false;

  executeWavyClose({
    pageEl: contactPage,
    exitOrigin: getContactExitOrigin(),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo
  });
}

// --------------------------------------------------------------------------
// 10. Portfolio Modal System (General Fallback for ITEM, EQUIP, SYSTEM)
// --------------------------------------------------------------------------
function getModalExitOrigin() {
  if (modalCloseBtn) {
    const r = modalCloseBtn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }
  }
  return { x: window.innerWidth * 0.78, y: window.innerHeight * 0.22 };
}

function openModal(index) {
  const opt = options[index];
  modalTag.textContent = opt.tag;
  modalTitle.textContent = opt.name;
  modalSummary.textContent = opt.summary;

  modalCardsContainer.innerHTML = "";
  opt.cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "modal-card";
    cardEl.innerHTML = `
      <div class="card-glow"></div>
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
      <div class="card-corner"></div>
    `;
    modalCardsContainer.appendChild(cardEl);
  });

  isModalOpen = true;
  portfolioModal.classList.add("active");
  portfolioModal.setAttribute("aria-hidden", "false");
  playSFX();

  const origin = getOptionCenter(index);
  const targetRadius = calculateTargetRadius(origin);

  const keyframes = [
    { clipPath: generateWavyPolygon(origin.x, origin.y, 0, 100, 6, 0.08, 12, 0.03, 0.0, 1.25, 1.05) },
    { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius * 0.45, 100, 6, 0.085, 12, 0.03, 1.0, 1.25, 1.05), offset: 0.4 },
    { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 100, 6, 0.05, 12, 0.015, 2.5, 1.15, 1.02) }
  ];

  portfolioModal.animate(keyframes, {
    duration: 650,
    easing: "cubic-bezier(0.2, 1, 0.35, 1)",
    fill: "forwards"
  });
}

function closeModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  playCloseMenuSFX();

  const exitOrigin = getModalExitOrigin();
  const targetRadius = calculateTargetRadius(exitOrigin);

  const closeAnim = portfolioModal.animate([
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 100, 8, 0.07, 16, 0.025, 0.0, 1.15, 1.25) },
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 100, 8, 0.08, 16, 0.02, 2.5, 1.15, 1.25) }
  ], {
    duration: 600,
    easing: "cubic-bezier(0.2, 1, 0.35, 1)",
    fill: "forwards"
  });

  closeAnim.onfinish = () => {
    portfolioModal.classList.remove("active");
    portfolioModal.setAttribute("aria-hidden", "true");
    portfolioModal.style.clipPath = "";
  };
}

// Option Confirmation Dispatcher (Strictly 4 Options: PROJECT, SKILLS, ABOUT, SOCIALS)
function handleOptionConfirm(index, clickEvent) {
  if (index === 0) {
    openProjectPage(clickEvent);
  } else if (index === 1) {
    openSkillPage(clickEvent);
  } else if (index === 2) {
    openAboutPage(clickEvent);
  } else if (index === 3) {
    openContactPage(clickEvent);
  }
}

// --------------------------------------------------------------------------
// 11. Background Video Flow in Menu Utama (Intro -> Loop Seamless Cut)
// --------------------------------------------------------------------------
let hasSwitchedToLoop = false;

function switchToLoopVideo() {
  if (hasSwitchedToLoop) return;
  hasSwitchedToLoop = true;

  if (bgVideoLoop) {
    bgVideoLoop.currentTime = 0;
    const playPromise = bgVideoLoop.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (bgVideoIntro) {
            bgVideoIntro.classList.add("fade-out");
            setTimeout(() => {
              bgVideoIntro.pause();
              bgVideoIntro.style.display = "none";
            }, 300);
          }
        })
        .catch((err) => {
          console.warn("Loop video playback notice:", err);
          if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
        });
    } else {
      if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
    }
  }
}

if (bgVideoIntro) {
  bgVideoIntro.addEventListener("ended", switchToLoopVideo);
  bgVideoIntro.addEventListener("error", switchToLoopVideo);
  bgVideoIntro.addEventListener("timeupdate", () => {
    if (!hasSwitchedToLoop && bgVideoIntro.duration > 0) {
      if (bgVideoIntro.currentTime >= bgVideoIntro.duration - 0.08) {
        switchToLoopVideo();
      }
    }
  });
}

// --------------------------------------------------------------------------
// 12. Loading Screen & Experience Entry Sequence
// --------------------------------------------------------------------------
let currentProgress = 0;
let targetProgress = 15;
let progressTimer = null;

function setProgress(val) {
  targetProgress = Math.min(100, Math.max(targetProgress, Math.round(val)));
}

function updateProgressUI(val) {
  const rounded = Math.min(100, Math.max(0, Math.round(val)));
  if (loadingBar) loadingBar.style.width = `${rounded}%`;
  if (loadingPercent) loadingPercent.textContent = `${rounded}%`;
  if (loadingScreen) loadingScreen.setAttribute("aria-valuenow", rounded);
}

function runProgressTicker() {
  return new Promise((resolve) => {
    progressTimer = setInterval(() => {
      if (currentProgress < targetProgress) {
        const step = Math.max(1, Math.ceil((targetProgress - currentProgress) / 5));
        currentProgress = Math.min(targetProgress, currentProgress + step);
        updateProgressUI(currentProgress);
      }

      if (currentProgress >= 100) {
        clearInterval(progressTimer);
        updateProgressUI(100);
        resolve();
      }
    }, 20);
  });
}

async function startLoadingSequence() {
  const tickerPromise = runProgressTicker();

  if (bgVideoIntro) {
    bgVideoIntro.muted = true;
    bgVideoIntro.defaultMuted = true;
  }
  if (bgVideoLoop) {
    bgVideoLoop.muted = true;
    bgVideoLoop.defaultMuted = true;
  }

  // Preload audio and fonts smoothly
  loadAudioBuffers();
  setProgress(45);
  setTimeout(() => setProgress(85), 100);

  try {
    if (document.fonts && document.fonts.ready) {
      await Promise.race([
        document.fonts.ready,
        new Promise((r) => setTimeout(r, 200))
      ]);
    }
  } catch (_) {}

  setProgress(100);
  await tickerPromise;
  updateProgressUI(100);
  isLoaded = true;

  await new Promise((r) => setTimeout(r, 220));

  const ctx = getAudioContext();
  if (ctx && ctx.state !== "running") {
    ctx.resume().catch(() => {});
  }

  enterExperience();
}

function enterExperience() {
  if (isStarted) return;
  isStarted = true;
  experienceEntryTime = Date.now();

  playMenuUtamaSFX();

  if (loadingScreen) {
    loadingScreen.classList.add("dismissed");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 450);
  }

  const menuColumn = document.getElementById("menu-column");
  if (menuColumn) menuColumn.classList.add("menu-entered");
  const menuProfileHeader = document.getElementById("menu-profile-header");
  if (menuProfileHeader) menuProfileHeader.classList.add("menu-entered");

  if (bgVideoIntro) {
    bgVideoIntro.currentTime = 0;
    bgVideoIntro.muted = true;
    const playP = bgVideoIntro.play();
    if (playP !== undefined) {
      playP.catch((err) => {
        console.warn("Intro playback notice:", err);
        switchToLoopVideo();
      });
    }
  }
}

// --------------------------------------------------------------------------
// 13. Event Listeners & Keyboard Navigation
// --------------------------------------------------------------------------
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener("click", closeModal);
if (portfolioModal) {
  portfolioModal.addEventListener("click", (e) => {
    if (e.target === portfolioModal) closeModal();
  });
}

if (slinkConfirmBtn) slinkConfirmBtn.addEventListener("click", confirmSlinkSelection);
if (slinkBackBtn) slinkBackBtn.addEventListener("click", handleProjectBack);
// Detail page HUD: ENTER = open repository, ESC = back (keyboard is handled in the router below)
const detailRepoBtn = document.getElementById("detail-repo-btn");
const detailBackBtn = document.getElementById("detail-back-btn");
if (detailRepoBtn) detailRepoBtn.addEventListener("click", openSlinkLink);
if (detailBackBtn) detailBackBtn.addEventListener("click", handleProjectBack);
if (slinkDetail) {
  slinkDetail.addEventListener("click", (e) => {
    const btn = e.target.closest(".slink-action-btn[data-url]");
    if (btn) {
      playSFX();
      window.open(btn.dataset.url, "_blank", "noopener,noreferrer");
    }
  });
}
// A missing image hides itself so the empty slot shows instead of a broken icon.
if (detailPage) {
  detailPage.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") e.target.style.display = "none";
  }, true);
}
if (skillBackBtn) skillBackBtn.addEventListener("click", closeSkillPage);
if (skillTabPrevBtn) skillTabPrevBtn.addEventListener("click", prevSkillTab);
if (skillTabNextBtn) skillTabNextBtn.addEventListener("click", nextSkillTab);
if (aboutBackBtn) aboutBackBtn.addEventListener("click", closeAboutPage);
if (contactBackBtn) contactBackBtn.addEventListener("click", closeContactPage);

if (contactMailRows && contactMailRows.length > 0) {
  contactMailRows.forEach((row, idx) => {
    row.addEventListener("mouseenter", () => {
      selectContactRow(idx);
    });
  });
}

// Keyboard Router
document.addEventListener("keydown", (e) => {
  if (!isStarted) {
    if (isLoaded || e.key === "Enter" || e.key === " ") {
      enterExperience();
    }
    return;
  }

  // Active Screen: Project
  if (isProjectPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      handleProjectBack();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex + 1) % slinkData.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex - 1 + slinkData.length) % slinkData.length);
    } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "a") {
      e.preventDefault();
      confirmSlinkSelection();
    }
    return;
  }

  // Active Screen: Skill
  if (isSkillPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeSkillPage();
    } else if (e.key.toLowerCase() === "q" || e.key === "ArrowLeft") {
      e.preventDefault();
      prevSkillTab();
    } else if (e.key.toLowerCase() === "e" || e.key === "ArrowRight") {
      e.preventDefault();
      nextSkillTab();
    }
    return;
  }

  // Active Screen: About
  if (isAboutPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeAboutPage();
    }
    return;
  }

  // Active Screen: Contact
  if (isContactPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeContactPage();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectContactRow((selectedContactIndex + 1) % contactMailRows.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectContactRow((selectedContactIndex - 1 + contactMailRows.length) % contactMailRows.length);
    } else if (e.key === "Enter" || e.key === " ") {
      if (contactMailRows[selectedContactIndex]) {
        contactMailRows[selectedContactIndex].click();
      }
    }
    return;
  }

  // Active Screen: Modal
  if (isModalOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "a") {
      closeModal();
    }
    return;
  }

  // Main Menu Navigation
  if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
    e.preventDefault();
    setIndex((selectedIndex + 1) % options.length);
  } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
    e.preventDefault();
    setIndex((selectedIndex - 1 + options.length) % options.length);
  } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "b") {
    e.preventDefault();
    handleOptionConfirm(selectedIndex);
  } else if (e.key === "Escape" || e.key.toLowerCase() === "a") {
    playSFX();
  }
});

// --------------------------------------------------------------------------
// 14. Initialization & Window Exports
// --------------------------------------------------------------------------
renderOptions();

const urlParams = new URLSearchParams(window.location.search);
const initialSelect = parseInt(urlParams.get("select"), 10);
if (!isNaN(initialSelect) && initialSelect >= 0 && initialSelect < options.length) {
  setIndex(initialSelect);
} else {
  setIndex(0);
}

// Expose public API for debugging, URL parameters, and automated testing
window.openProjectPage = openProjectPage;
window.closeProjectPage = closeProjectPage;
window.openSkillPage = openSkillPage;
window.closeSkillPage = closeSkillPage;
window.openAboutPage = openAboutPage;
window.closeAboutPage = closeAboutPage;
window.openContactPage = openContactPage;
window.closeContactPage = closeContactPage;
window.triggerContactPhoneAnimation = triggerContactPhoneAnimation;
window.playWavyCircleTransition = playWavyCircleTransition;

// URL Navigation Shortcuts
if (urlParams.get("page") === "project") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openProjectPage();
  triggerProjectTitleAnimation();
} else if (urlParams.get("page") === "skill" || urlParams.get("page") === "skills") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const tabParam = urlParams.get("tab") || urlParams.get("cat");
  if (tabParam && skillTabsList.some((t) => t.id === tabParam)) {
    currentSkillTab = tabParam;
  }
  openSkillPage();
  triggerSkillTitleAnimation();
} else if (urlParams.get("page") === "about") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openAboutPage();
  triggerAboutTitleAnimation();
} else if (urlParams.get("page") === "contact") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openContactPage();
} else if (urlParams.get("skip_loading") === "1") {
  if (loadingScreen) loadingScreen.style.display = "none";
  enterExperience();
  switchToLoopVideo();
} else {
  startLoadingSequence();
}
