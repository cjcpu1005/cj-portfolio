
/* ==========================================
   MOTIONS BY CJ
   Creative Portfolio — Main JavaScript
   ========================================== */

// PERSONAL SETTINGS
// Replace these with your actual contact links.

const SETTINGS = {
  brand: "MOTIONS by CJ",
  tagline: "Stories in motion.",
  email: "",
  instagram: "",
  facebook: "",
  location: "Philippines"
};

// PROJECT COLLECTION
// These are temporary sample projects.
// Replace titles, images, descriptions, and links
// when your actual projects are ready.

const projects = [
  {
    id: 1,
    title: "After Hours",
    category: "videography",
    type: "Event Film",
    year: "2026",
    description:
      "An energetic celebration of spontaneous moments, " +
      "shared memories, and the atmosphere of a night out.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop",
    link: ""
  },
  {
    id: 2,
    title: "Somewhere, Slowly",
    category: "videography",
    type: "Travel Vlog",
    year: "2026",
    description:
      "A visual travel diary capturing unfamiliar places, " +
      "quiet discoveries, and the beauty of exploring.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&auto=format&fit=crop",
    link: ""
  },
  {
    id: 3,
    title: "Little Moments",
    category: "videography",
    type: "Lifestyle Film",
    year: "2026",
    description:
      "An intimate collection of everyday scenes, " +
      "ordinary routines, and memories worth keeping.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop",
    link: ""
  },
  {
    id: 4,
    title: "Visual Impact",
    category: "graphics",
    type: "Promotional Design",
    year: "2026",
    description:
      "A bold visual direction for promotional content, " +
      "combining typography, composition, and storytelling.",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1200&auto=format&fit=crop",
    link: ""
  },
  {
    id: 5,
    title: "The Social Edit",
    category: "graphics",
    type: "Social Media Graphics",
    year: "2026",
    description:
      "A collection of digital graphics designed to " +
      "communicate ideas and engage online audiences.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&auto=format&fit=crop",
    link: ""
  },
  {
    id: 6,
    title: "Creative Direction",
    category: "graphics",
    type: "Visual Design",
    year: "2026",
    description:
      "Exploring expressive layouts, visual identity, " +
      "and graphic compositions for digital platforms.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop",
    link: ""
  }
];

// UTILITIES

const app = document.getElementById("app");

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]
  );
}

function safeURL(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function socialLink(url, label) {
  const href = safeURL(url);
  if (!href) return "";

  return `
    <a href="${escapeHTML(href)}"
       target="_blank"
       rel="noopener noreferrer">
      ${escapeHTML(label)} ↗
    </a>
  `;
}

// PROJECT CARDS

function renderProject(project) {
  const image = safeURL(project.image);

  return `
    <article
      class="project-card reveal"
      data-category="${escapeHTML(project.category)}"
      data-project-id="${project.id}"
      role="button"
      tabindex="0"
      aria-label="View ${escapeHTML(project.title)}"
    >
      <div class="project-image">
        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(project.title)}"
          loading="lazy"
        />
        <div class="project-overlay">
          <span class="section-label">
            ${escapeHTML(project.type)}
          </span>
          <span>↗</span>
        </div>
      </div>

      <div class="project-category">
        ${escapeHTML(project.category)}
        / ${escapeHTML(project.year)}
      </div>

      <h3 class="project-title">
        ${escapeHTML(project.title)}
      </h3>

      <p class="project-description">
        ${escapeHTML(project.description)}
      </p>
    </article>
  `;
}

// WEBSITE LAYOUT

app.innerHTML = `
  <header>
    <nav class="navbar" aria-label="Main navigation">
      <a href="#home" class="logo">
        MOTIONS<span>.</span>
        <span style="
          color:var(--text);
          font-size:11px;
          letter-spacing:.1em;
          vertical-align:middle;
        ">BY CJ</span>
      </a>

      <div class="nav-links">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  </header>

  <!-- HERO SECTION -->

  <section class="hero" id="home">

    <div
      class="hero-bg"
      style="
        background-image:
        url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=2000&auto=format&fit=crop');
      "
    ></div>

    <div class="hero-content">

      <div class="hero-topline">
        <span class="eyebrow">
          INDEPENDENT CREATIVE PORTFOLIO
        </span>

        <span>
          VIDEOGRAPHY / DESIGN / VISUAL STORIES
        </span>
      </div>

      <h1 class="hero-title">
        STORIES
        <span>IN MOTION.</span>
      </h1>

      <p class="hero-subtitle">
        Capturing moments. Creating memories.
      </p>

      <p class="hero-description">
        Short-form films, everyday stories,
        and creative visuals by CJ.
      </p>

      <div class="hero-bottom">
        <a href="#work" class="contact-button">
          EXPLORE MY WORK ↗
        </a>

        <span class="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </span>
      </div>

    </div>
  </section>

  <!-- SELECTED WORK -->

  <section class="work-section" id="work">
    <div class="container">

      <div class="section-header reveal">
        <div>
          <p class="section-label">
            01 / SELECTED WORK
          </p>

          <h2 class="section-title">
            THE<br>ARCHIVE.
          </h2>
        </div>

        <p class="section-description">
          A growing collection of moments captured,
          stories told, and visuals created.
          From event highlights to digital graphics,
          every project is another story.
        </p>
      </div>

      <div
        class="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        <button class="filter-btn active"
                data-filter="all">
          ALL PROJECTS
        </button>

        <button class="filter-btn"
                data-filter="videography">
          VIDEOGRAPHY
        </button>

        <button class="filter-btn"
                data-filter="graphics">
          GRAPHIC DESIGN
        </button>
      </div>

      <div class="projects-grid" id="projects-grid">
        ${projects.map(renderProject).join("")}
      </div>

    </div>
  </section>

  <!-- ABOUT SECTION -->

  <section class="about-section" id="about">
    <div class="container">

      <div class="about-grid">

        <div class="reveal">
          <p class="section-label">
            02 / BEHIND THE LENS
          </p>

          <h2 class="about-heading">
            THE PERSON<br>
            BEHIND THE<br>
            <span>MOTIONS.</span>
          </h2>
        </div>

        <div class="reveal">
          <div class="about-text">

            <p>
              Hey, I'm CJ — the creative behind
              MOTIONS by CJ.
            </p>

            <p>
              I enjoy capturing the moments that
              make life memorable. From lively
              celebrations and spontaneous trips
              to quiet everyday experiences,
              I turn real moments into short-form
              visual stories.
            </p>

            <p>
              My approach to videography is simple:
              capture the atmosphere, preserve the
              emotion, and let every moment tell
              its own story.
            </p>

            <p>
              Beyond filmmaking, I also explore
              graphic design and digital content
              creation. I create promotional
              graphics, social media visuals,
              and occasionally manage social
              media pages.
            </p>

            <p>
              MOTIONS by CJ brings these interests
              together — storytelling through
              movement, imagery, and design.
            </p>

          </div>

          <div class="tools-section">
            <h3 class="tools-title">
              MY CREATIVE TOOLKIT
            </h3>

            <div class="tools-list">
              <span class="tool-tag">
                DJI Osmo Pocket 3
              </span>
              <span class="tool-tag">
                iPhone 13
              </span>
              <span class="tool-tag">
                CapCut
              </span>
              <span class="tool-tag">
                DaVinci Resolve
              </span>
              <span class="tool-tag">
                Canva
              </span>
              <span class="tool-tag">
                Figma
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->

  <section class="contact-section" id="contact">
    <div class="container reveal">

      <p class="section-label">
        03 / LET'S CONNECT
      </p>

      <h2 class="contact-heading">
        LET'S MAKE<br>
        <span>IT MOVE.</span>
      </h2>

      <p class="contact-description">
        Have an event to capture, a story to tell,
        or a creative idea in mind?
        Let's turn it into something memorable.
      </p>

      ${
        SETTINGS.email
          ? `<a class="contact-button"
               href="mailto:${encodeURIComponent(SETTINGS.email)}">
               GET IN TOUCH ↗
             </a>`
          : `<p class="section-description"
                style="margin:20px auto">
               Contact details coming soon.
             </p>`
      }

    </div>
  </section>

  <!-- FOOTER -->

  <footer class="footer">
    <div class="footer-inner">

      <p>
        © ${new Date().getFullYear()}
        MOTIONS BY CJ.
        STORIES IN MOTION.
      </p>

      <div class="footer-links">
        ${socialLink(SETTINGS.instagram, "INSTAGRAM")}
        ${socialLink(SETTINGS.facebook, "FACEBOOK")}
        <a href="#home">BACK TO TOP ↑</a>
      </div>

    </div>
  </footer>

  <!-- PROJECT DETAIL MODAL -->

  <div
    class="modal"
    id="project-modal"
    role="dialog"
    aria-modal="true"
    aria-label="Project details"
    aria-hidden="true"
  >
    <div class="modal-content">
      <button
        class="modal-close"
        id="modal-close"
        aria-label="Close project"
      >×</button>

      <div id="modal-body"></div>
    </div>
  </div>
`;

// FILTER FUNCTIONALITY

const filterButtons =
  document.querySelectorAll(".filter-btn");

const projectCards =
  document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.toggle(
        "active",
        btn === button
      );
    });

    projectCards.forEach(card => {
      card.hidden =
        filter !== "all" &&
        card.dataset.category !== filter;
    });
  });
});

// PROJECT MODAL

const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeButton = document.getElementById("modal-close");

let previousFocus = null;

function openProject(projectId) {
  const project = projects.find(
    item => item.id === Number(projectId)
  );

  if (!project) return;

  previousFocus = document.activeElement;

  const image = safeURL(project.image);
  const link = safeURL(project.link);

  modalBody.innerHTML = `
    <img
      src="${escapeHTML(image)}"
      alt="${escapeHTML(project.title)}"
    />

    <p class="section-label">
      ${escapeHTML(project.type)}
      / ${escapeHTML(project.year)}
    </p>

    <h2 class="project-title"
        style="margin:18px 0">
      ${escapeHTML(project.title)}
    </h2>

    <p class="project-description">
      ${escapeHTML(project.description)}
    </p>

    ${
      link
        ? `<a class="contact-button"
              href="${escapeHTML(link)}"
              target="_blank"
              rel="noopener noreferrer">
             VIEW FULL PROJECT ↗
           </a>`
        : `<p class="project-description"
              style="margin-top:24px">
             Full project coming soon.
           </p>`
    }
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (previousFocus) {
    previousFocus.focus();
  }
}

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    openProject(card.dataset.projectId);
  });

  card.addEventListener("keydown", event => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openProject(card.dataset.projectId);
    }
  });
});

closeButton.addEventListener("click", closeProject);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeProject();
  }
});

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    modal.classList.contains("open")
  ) {
    closeProject();
  }

  if (
    event.key === "Tab" &&
    modal.classList.contains("open")
  ) {
    const focusable = modal.querySelectorAll(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  }
});

// SCROLL REVEAL ANIMATIONS

const revealElements =
  document.querySelectorAll(".reveal");

if (
  "IntersectionObserver" in window &&
  !window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}
