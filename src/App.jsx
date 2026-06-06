import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const EMAIL = "kevinkdu23@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kevin-upadhyay-45a959294";
const GITHUB_URL = "https://github.com/kevinupadhyay";
const PORTFOLIO_REPO_URL = "https://github.com/kevinupadhyay/Portfolio-";
const ECOOFFSET_DEVPOST_URL =
  "https://devpost.com/software/ecooffset?_gl=1*4lvpmv*_gcl_au*MTU4NDU2OTI3LjE3ODA3Mjg2MTc.*_ga*MTU0ODgyNzU5My4xNzgwNzI4NjE4*_ga_0YHJK3Y10M*czE3ODA3Mjg2MTckbzEkZzEkdDE3ODA3Mjg2NDkkajI4JGwwJGgw";
const RESUME_URL = "/Kevin-Upadhyay-Resume.pdf";

const navItems = [
  { id: "spawn", label: "Spawn", icon: "sky" },
  { id: "wood", label: "Wood", icon: "wood" },
  { id: "stone", label: "Stone", icon: "stone" },
  { id: "iron", label: "Iron", icon: "iron" },
  { id: "diamond", label: "Diamond", icon: "diamond" },
  { id: "netherite", label: "Netherite", icon: "netherite" },
  { id: "village", label: "Village", icon: "village" },
  { id: "nether-portal", label: "Portal", icon: "netherite" }
];

const playerStats = [
  ["Honour Roll", "Gr 7-12"],
  ["Certifications", "10+"],
  ["Leadership", "5+ Roles"],
  ["Hackathons", "3+"],
  ["Projects Built", "5+"]
];

const education = [
  {
    school: "University of Waterloo",
    degree: "Honours Mathematics Undergraduate",
    date: "Expected Apr 2030",
    location: "Waterloo, ON",
    tags: ["Hackathons", "AI Agents", "Web Apps"],
    details: "Areas: CS / AI / Software Dev / Math"
  },
  {
    school: "West Humber Collegiate Institute",
    degree: "Ontario Secondary School Diploma",
    date: "June 2025",
    location: "Toronto, ON",
    tags: ["MST Diploma", "SHSM Red Seal", "Honour Roll Gr 7-12", "Ontario Scholar"],
    details: "Academic Honour Roll and specialized technology pathway."
  }
];

const experiences = [
  {
    title: "VP of Communications",
    org: "Residence Council, UWaterloo",
    dates: "May 2026-Present",
    badge: "ACTIVE",
    bullets: [
      "Manage communications, branding, and student engagement initiatives for residence-wide events and programming.",
      "Support social media outreach, event promotion, and community engagement strategies.",
      "Collaborate with executive team members to improve student participation and campus involvement."
    ]
  },
  {
    title: "Ambassador & Campus Manager",
    org: "Frosh Fest 2025, UWaterloo",
    dates: "Aug 2025-Apr 2026",
    bullets: [
      "Selected as Campus Manager to lead student engagement and marketing outreach initiatives.",
      "Promote events across social platforms and coordinate residence and community outreach.",
      "Support branding, communications, and networking initiatives for incoming students."
    ]
  },
  {
    title: "Research Co-op Student",
    org: "SARIT @ York University, Lassonde School of Engineering",
    dates: "Feb 2024-Jun 2024",
    bullets: [
      "Installed, tested, and troubleshot 5+ vehicle systems and related code.",
      "Created technical reports and documentation to track system functionality and project progress.",
      "Developed hands-on experience in soldering, electronics, wiring, and cable management."
    ]
  },
  {
    title: "Volunteer - Summer Experience",
    org: "SARIT, York University",
    dates: "Jul 2024-Aug 2024",
    bullets: [
      "Worked on practical applications involving electronics and Python programming.",
      "Collaborated with team members to improve vehicle system functionality through technical problem-solving.",
      "Completed hands-on engineering and programming activities in a university lab environment."
    ]
  }
];

const leadership = [
  {
    icon: "iron-sword",
    title: "President - Chess Club, WHCI",
    dates: "Sep 2024-Jun 2025",
    text: "Co-founded and led the club. Organized tournaments, training sessions, and fundraising initiatives. Increased student engagement through club events and competitions."
  },
  {
    icon: "book-quill",
    title: "Vice President - Scholarly Service Society Toronto",
    dates: "Sep 2023-Jun 2025",
    text: "Managed partnerships, volunteer opportunities, and communications. Coordinated volunteer opportunities and Google Classroom communications for 30+ students."
  },
  {
    icon: "written-page",
    title: "Secretary - Model UN Club, WHCI",
    dates: "Sep 2023-Jun 2024",
    text: "Organized meetings and managed club communications. Designed digital posters and supported social media campaigns. Strengthened leadership and public speaking through conference participation."
  },
  {
    icon: "leather-shield",
    title: "Lead Manager & Coach Assistant - Cricket Team, WHCI",
    dates: "Sep 2023-Jun 2024",
    text: "Assisted with team organization, logistics, and practice coordination. Supported coaching staff during games and training activities."
  }
];

const projects = [
  {
    icon: "diamond-item",
    title: "Kevin Upadhyay Portfolio",
    org: "Personal Portfolio Website",
    date: "2026",
    bullets: [
      "Built a Minecraft-inspired interactive portfolio with a custom mining scrollbar, project inspection modals, animated pixel UI, custom cursors, and GitHub Pages deployment.",
      "Designed the site to make my projects, experience, and contact information more memorable than a standard resume page.",
      "Deployed using Vite, React, GitHub Actions, and GitHub Pages."
    ],
    tags: ["React", "Vite", "GitHub Pages", "GitHub Actions", "UI/UX", "Interactive Portfolio"],
    links: [{ label: "GitHub", href: PORTFOLIO_REPO_URL }]
  },
  {
    icon: "diamond-item",
    title: "ClawCourt (Agent 58)",
    org: "OpenClaw Toronto Hackathon",
    date: "May 2026",
    awards: "UX Master Award, x402 Master Award",
    bullets: [
      "Designed and developed the live ledger dashboard and real-time visualization layer for an escrow + AI referee workflow system.",
      "Built a Next.js dashboard featuring transaction lifecycle tracking, settlement monitoring, and AI referee terminal visualization.",
      "Integrated real-time transaction flows including escrow, validation, release, and refund states."
    ],
    tags: ["Next.js", "Real-time", "AI", "Dashboard"]
  },
  {
    icon: "emerald-item",
    title: "EcoOffset Chrome Extension",
    org: "GenAI Genesis Hackathon",
    date: "2026",
    bullets: [
      "Built a Chrome extension focused on sustainable shopping and environmental awareness.",
      "Developed features using React/JavaScript to provide sustainability-focused insights during online shopping.",
      "Collaborated with teammates to rapidly prototype and present the solution."
    ],
    tags: ["React", "JavaScript", "Chrome Extension", "Sustainability"],
    links: [{ label: "Devpost", href: ECOOFFSET_DEVPOST_URL }]
  },
  {
    icon: "redstone-item",
    title: "Memory Match Mania",
    org: "Personal Project",
    date: "Jun 2024",
    bullets: [
      "Developed an interactive Memory Match game using vanilla JavaScript.",
      "Implemented dynamic card matching mechanics, sound effects, and visual feedback.",
      "Designed adaptable difficulty levels to support different player skill levels."
    ],
    tags: ["JavaScript", "Game Dev", "UI/UX"]
  },
  {
    icon: "copper-item",
    title: "Family Feud Game",
    org: "Personal Project",
    date: "Jan 2023",
    bullets: [
      "Developed an interactive Family Feud-style game using Python.",
      "Implemented multiple difficulty levels and responsive game logic.",
      "Focused on clean code structure and user-friendly CLI interaction."
    ],
    tags: ["Python", "Game Logic", "Multi-level"]
  },
  {
    icon: "lapis-item",
    title: "Tic Tac Toe",
    org: "Personal Project",
    date: "Dec 2022",
    bullets: [
      "Created a Tic Tac Toe game in Python using object-oriented programming principles.",
      "Focused on game mechanics, user interaction, and clean logic implementation.",
      "Structured codebase using OOP to keep logic modular and maintainable."
    ],
    tags: ["Python", "OOP", "Game Mechanics"]
  }
];

const skillGroups = [
  ["Languages", ["Python", "JavaScript", "TypeScript", "HTML/CSS", "Java", "Racket"]],
  ["Frameworks & Tools", ["React", "Next.js", "Git", "Fusion 360", "Chrome Extensions"]],
  ["Engineering", ["Basic Electronics", "Soldering", "Wiring", "Cable Management", "Technical Reports"]],
  ["Abilities", ["UI/UX Design", "Leadership", "Public Speaking", "Social Media Marketing", "Content Creation", "Team Collaboration", "Technical Communication"]]
];

const certifications = [
  ["Google Cloud: Generative AI", "Jul 2024"],
  ["Fusion 360 Certification", "Jul 2024"],
  ["Android Development (Udemy)", "Dec 2024"],
  ["Standard First Aid & CPR C", "Nov 2023"],
  ["Innovation & Entrepreneurship", "Oct 2023"],
  ["EDI Training, York University", "May 2024"],
  ["Leadership SHSM Certification", "May 2024"],
  ["Customer Service SHSM Certification", "May 2024"],
  ["WHMIS I & II", "Feb 2024"],
  ["Infection Control Certification", "Feb 2024"],
  ["BEST Startup Experience", "Mar 2024"],
  ["Let's Talk Science STEM Workshop", "Mar 2024"]
];

const awards = [
  ["UX Master Award", "OpenClaw Toronto Hackathon / May 2026", "Won for ClawCourt, an AI referee + escrow dashboard."],
  ["x402 Master Award", "OpenClaw Toronto Hackathon / May 2026", "Won for real-time transaction lifecycle visualization and settlement monitoring."],
  ["Ontario Scholar", "West Humber C.I. / June 2025", "Top academic achievement upon graduation."],
  ["Hack Canada", "National Hackathon / 2025", "Attended Hack Canada national hackathon event."]
];

const trades = [
  ["LinkedIn", "blue", LINKEDIN_URL],
  ["GitHub", "purple", GITHUB_URL],
  ["Email", "green", `mailto:${EMAIL}`],
  ["Phone", "orange", "tel:+14374224234"]
];

const quickInventory = [
  ["Current Spawn", "Waterloo, ON"],
  ["Class", "Mathematics Student"],
  ["Build Style", "Hackathons, web apps, extensions, games"],
  ["Main Quest", "Build useful software and keep leveling up"]
];

const rewardTypes = ["coal", "iron", "diamond", "emerald", "redstone", "lapis"];

function useScrollState() {
  const [state, setState] = useState({ progress: 0, direction: "idle", active: "spawn" });

  useEffect(() => {
    let lastY = window.scrollY;
    let idleTimer;

    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / max, 1);
      const direction = window.scrollY > lastY ? "down" : window.scrollY < lastY ? "up" : "idle";
      lastY = window.scrollY;

      const activeSection =
        navItems
          .map((item) => document.getElementById(item.id))
          .filter(Boolean)
          .reverse()
          .find((section) => section.getBoundingClientRect().top <= 160)?.id || "spawn";

      setState({ progress, direction, active: activeSection });
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setState((current) => ({ ...current, direction: "idle" }));
      }, 180);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CustomCursor() {
  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");

    const updateCursorMode = () => {
      document.body.classList.toggle("custom-cursor-enabled", pointerQuery.matches);
    };

    updateCursorMode();
    pointerQuery.addEventListener("change", updateCursorMode);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      pointerQuery.removeEventListener("change", updateCursorMode);
    };
  }, []);

  return null;
}

function getMinerState(direction, currentBlock, crackStage) {
  if (direction === "down") {
    return crackStage <= 1 ? "look-down" : "mine-down";
  }

  if (direction === "up") {
    return currentBlock % 5 <= 1 ? "build-up-high" : "build-up-low";
  }

  return "idle-front";
}

function PixelMiner({ state = "idle-front" }) {
  return (
    <div className={`miner miner-${state}`} aria-hidden="true" data-state={state}>
      <span className="miner-pickaxe">
        <i></i>
      </span>
      <span className="miner-head">
        <i className="miner-hair"></i>
        <i className="miner-eye miner-eye-left"></i>
        <i className="miner-eye miner-eye-right"></i>
      </span>
      <span className="miner-body"></span>
      <span className="miner-arm miner-arm-left"></span>
      <span className="miner-arm miner-arm-right"></span>
      <span className="miner-leg miner-leg-left"></span>
      <span className="miner-leg miner-leg-right"></span>
    </div>
  );
}

function MiningScrollbar({ progress, direction }) {
  const railRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const totalBlocks = 44;
  const blockProgress = progress * totalBlocks;
  const currentBlock = Math.min(Math.floor(blockProgress + 0.75), totalBlocks - 1);
  const crackStage = Math.min(Math.floor((blockProgress % 1) * 4) + 1, 4);
  const minerState = getMinerState(direction, currentBlock, crackStage);
  const footPosition = `clamp(88px, calc(${progress * 100}% + 8px), calc(100% - 4px))`;

  const blocks = useMemo(
    () =>
      Array.from({ length: totalBlocks }, (_, index) => {
        const sectionIndex = Math.floor((index / totalBlocks) * navItems.length);
        return navItems[Math.min(sectionIndex, navItems.length - 1)].icon;
      }),
    []
  );

  useEffect(() => {
    if (!dragging) return undefined;

    const drag = (event) => {
      const rect = railRef.current.getBoundingClientRect();
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
      const nextProgress = y / rect.height;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: max * nextProgress, behavior: "auto" });
    };

    const stop = () => setDragging(false);
    window.addEventListener("pointermove", drag);
    window.addEventListener("pointerup", stop);

    return () => {
      window.removeEventListener("pointermove", drag);
      window.removeEventListener("pointerup", stop);
    };
  }, [dragging]);

  return (
    <aside className="mining-scrollbar" aria-label="Mining progress">
      <div className="mine-rail" ref={railRef} onPointerDown={() => setDragging(true)}>
        {blocks.map((type, index) => {
          const broken = index < currentBlock;
          const cracking = index === currentBlock && direction === "down";
          const placing = index === currentBlock && direction === "up";
          return (
            <span
              className={`mine-block block-${type} ${broken ? "is-broken" : ""} ${cracking ? `is-cracking crack-${crackStage}` : ""} ${placing ? "is-placing" : ""}`}
              key={`${type}-${index}`}
            ></span>
          );
        })}
        <button
          className="miner-thumb"
          type="button"
          aria-label="Drag mining progress"
          style={{ top: footPosition }}
          onPointerDown={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
        >
          <PixelMiner state={minerState} />
        </button>
      </div>
    </aside>
  );
}

function Navbar({ active }) {
  return (
    <header className="nav">
      <button className="logo" type="button" onClick={() => scrollToId("spawn")}>
        K.U
      </button>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            className={active === item.id ? "active" : ""}
            type="button"
            key={item.id}
            onClick={() => scrollToId(item.id)}
          >
            <span className={`nav-ore block-${item.icon}`}></span>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function SectionTitle({ label, subtitle }) {
  return (
    <div className="section-title reveal">
      <p>{label}</p>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
}

function AchievementToasts({ toasts }) {
  return (
    <div className="achievement-stack" aria-live="polite" aria-atomic="false">
      {toasts.map((toast) => (
        <div className="achievement-toast" key={toast.id}>
          <span className="achievement-icon" aria-hidden="true"></span>
          <div>
            <small>Achievement Unlocked:</small>
            <strong>{toast.title}</strong>
            {toast.detail && <p>{toast.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero layer-sky" id="spawn">
      <div className="sky-art" aria-hidden="true">
        <span className="sun"></span>
        <span className="cloud cloud-a"></span>
        <span className="cloud cloud-b"></span>
        <span className="cloud cloud-c"></span>
        <span className="bird bird-a"></span>
        <span className="bird bird-b"></span>
      </div>
      <div className="hero-content reveal">
        <p className="spawn-label">Welcome to my world</p>
        <h1>
          <span>KEVIN</span>
          <strong>UPADHYAY</strong>
        </h1>
        <div className="subtitle-box">Waterloo Math Student / Builder / Researcher / Developer</div>
        <div className="hero-actions">
          <button className="pixel-button green" type="button" onClick={() => scrollToId("wood")}>
            START MINING
          </button>
          <button className="pixel-button brown" type="button" onClick={() => scrollToId("resume-chest")}>
            OPEN CHEST
          </button>
        </div>
      </div>
      <div className="grass-ground" aria-hidden="true"></div>
    </section>
  );
}

function WoodAge() {
  return (
    <section className="layer layer-wood" id="wood">
      <SectionTitle label="[ WHO AM I? ]" />
      <div className="two-col">
        <article className="pixel-card reveal">
          <h2>SPAWN INFO</h2>
          <p>
            I'm a driven Mathematics student at UWaterloo with a passion for building things - from
            award-winning hackathon apps to interactive games. I thrive on hard problems, fast
            collaboration, and leaving things better than I found them.
          </p>
          <div className="quick-inventory" aria-label="Quick Inventory">
            <h3>Quick Inventory</h3>
            {quickInventory.map(([label, value]) => (
              <div className="quick-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </article>
        <article className="pixel-card reveal delay-1">
          <h2>PLAYER STATS</h2>
          <div className="stat-list">
            {playerStats.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>

      <SectionTitle label="EDUCATION" />
      <div className="education-grid">
        {education.map((item) => (
          <article className="pixel-card reveal" key={item.school}>
            <div className="meta-line">
              <span>{item.date}</span>
              <span>{item.location}</span>
            </div>
            <h2>{item.school}</h2>
            <p className="role">{item.degree}</p>
            <p>{item.details}</p>
            <TagRow tags={item.tags} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section className="layer layer-stone" id="stone">
      <SectionTitle label="[ EXPERIENCE LOG ]" />
      <div className="accordion">
        {experiences.map((item, index) => (
          <article className={`accordion-card reveal ${open === index ? "open" : ""}`} key={item.title}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span>
                <strong>{item.title}</strong>
                <small>{item.org}</small>
              </span>
              <span className="accordion-meta">
                {item.badge && <i>{item.badge}</i>}
                {item.dates}
                <b className="expand-arrow">{open === index ? "▲" : "▼"}</b>
              </span>
            </button>
            <div className="accordion-body">
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="layer layer-iron" id="iron">
      <SectionTitle label="GUILD LEADERSHIP" />
      <div className="leadership-grid">
        {leadership.map((item) => (
          <article className="pixel-card icon-card reveal" key={item.title}>
            <div className={`pixel-icon icon-${item.icon}`} aria-hidden="true"></div>
            <span className="date">{item.dates}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ onProjectInspect }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const inspectProject = (project) => {
    setSelectedProject(project);
    onProjectInspect(project.title);
  };

  useEffect(() => {
    if (!selectedProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section className="layer layer-diamond" id="diamond">
      <SectionTitle label="[ DIAMOND PROJECTS ]" subtitle="Mine a project block to inspect." />
      <div className="project-grid">
        {projects.map((item) => (
          <article
            className="project-card reveal"
            key={item.title}
            role="button"
            tabIndex={0}
            onClick={() => inspectProject(item)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                inspectProject(item);
              }
            }}
          >
            <div className={`project-icon icon-${item.icon}`} aria-hidden="true"></div>
            <div className="project-card-body">
              <div className="meta-line">
                <span>{item.date}</span>
                <span>{item.org}</span>
              </div>
              <h2>{item.title}</h2>
              {item.awards && <p className="award-line">Awards: {item.awards}</p>}
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="project-card-actions">
              <TagRow tags={item.tags} />
              <div className="inspect-label">Inspect Project</div>
            </div>
          </article>
        ))}
      </div>
      {selectedProject && (
        <ProjectInspectionModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function createMinesweeperBoard() {
  const rows = 6;
  const cols = 6;
  const tntCount = 6;
  const tntPositions = new Set();

  while (tntPositions.size < tntCount) {
    tntPositions.add(Math.floor(Math.random() * rows * cols));
  }

  return Array.from({ length: rows * cols }, (_, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const nearby = [-1, 0, 1].reduce((count, rowOffset) => {
      return (
        count +
        [-1, 0, 1].filter((colOffset) => {
          if (rowOffset === 0 && colOffset === 0) return false;
          const nextRow = row + rowOffset;
          const nextCol = col + colOffset;
          if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) return false;
          return tntPositions.has(nextRow * cols + nextCol);
        }).length
      );
    }, 0);

    return {
      id: index,
      nearby,
      reward: rewardTypes[index % rewardTypes.length],
      revealed: false,
      tnt: tntPositions.has(index)
    };
  });
}

function TntMinesweeper({ onAchievement }) {
  const [tiles, setTiles] = useState(() => createMinesweeperBoard());
  const [status, setStatus] = useState("playing");
  const [showHelp, setShowHelp] = useState(false);
  const [blockClicks, setBlockClicks] = useState(0);
  const [resets, setResets] = useState(0);
  const [recruiterVisible, setRecruiterVisible] = useState(false);
  const recruiterShownRef = useRef(false);
  const gameRootRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const safeTiles = tiles.filter((tile) => !tile.tnt).length;
  const revealedSafeTiles = tiles.filter((tile) => tile.revealed && !tile.tnt).length;

  const unlockRecruiterRetention = useCallback(() => {
    if (recruiterShownRef.current) return;
    recruiterShownRef.current = true;
    setRecruiterVisible(true);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (status === "playing" && Date.now() - startTimeRef.current >= 60000) {
        unlockRecruiterRetention();
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [status, unlockRecruiterRetention]);

  useEffect(() => {
    const root = gameRootRef.current;
    if (!root) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setRecruiterVisible(false);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const resetGame = () => {
    setTiles(createMinesweeperBoard());
    setStatus("playing");
    setResets((current) => {
      const next = current + 1;
      if (next >= 3) unlockRecruiterRetention();
      return next;
    });
  };

  const revealTile = (tileId) => {
    if (status !== "playing") return;

    setTiles((currentTiles) => {
      const selected = currentTiles.find((tile) => tile.id === tileId);
      if (!selected || selected.revealed) return currentTiles;

      setBlockClicks((current) => {
        const next = current + 1;
        if (next >= 20) unlockRecruiterRetention();
        return next;
      });

      const nextTiles = currentTiles.map((tile) => (tile.id === tileId ? { ...tile, revealed: true } : tile));

      if (selected.tnt) {
        setStatus("lost");
        return nextTiles.map((tile) => (tile.tnt ? { ...tile, revealed: true } : tile));
      }

      const nextRevealedSafeTiles = nextTiles.filter((tile) => tile.revealed && !tile.tnt).length;
      if (nextRevealedSafeTiles === safeTiles) {
        setStatus("won");
        onAchievement("The End", "You cleared the dungeon.", 7000);
      }

      return nextTiles;
    });
  };

  return (
    <div className="tnt-game reveal visible" ref={gameRootRef}>
      <div className="tnt-game-header">
        <div>
          <p>TNT Minesweeper</p>
          <span>
            {status === "lost"
              ? "TNT triggered. Reset the dungeon."
              : status === "won"
                ? "Dungeon cleared. Safe blocks mined."
                : `Safe blocks mined: ${revealedSafeTiles}/${safeTiles}`}
          </span>
        </div>
        <div className="tnt-game-actions">
          <button type="button" onClick={() => setShowHelp((current) => !current)}>
            How to Play
          </button>
          <button type="button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>

      <div className={`mine-game-grid game-${status}`}>
        {tiles.map((tile) => (
          <button
            className={`mine-tile ${tile.revealed ? "revealed" : ""} ${tile.tnt && tile.revealed ? "tnt" : ""} reward-${tile.reward}`}
            type="button"
            key={tile.id}
            aria-label={tile.revealed ? (tile.tnt ? "TNT" : `${tile.nearby} nearby TNT`) : "Hidden block"}
            onClick={() => revealTile(tile.id)}
          >
            {tile.revealed && (tile.tnt ? <span className="tnt-icon">TNT</span> : <span>{tile.nearby || ""}</span>)}
          </button>
        ))}
      </div>

      {recruiterVisible && status === "playing" && (
        <div className="recruiter-message" role="status">
          <button type="button" aria-label="Close recruiter message" onClick={() => setRecruiterVisible(false)}>
            X
          </button>
          <small>Achievement Unlocked:</small>
          <strong>Recruiter Retention</strong>
          <p>Looks like you’ve been mining here for a while... maybe it’s time to recruit Kevin?</p>
        </div>
      )}

      {showHelp && (
        <div className="how-to-play-modal" role="dialog" aria-modal="true" aria-labelledby="how-to-play-title">
          <button className="how-to-play-backdrop" type="button" aria-label="Close how to play" onClick={() => setShowHelp(false)}></button>
          <div className="how-to-play">
            <div className="inventory-header">
              <h2 id="how-to-play-title">[ HOW TO PLAY ]</h2>
              <button className="inventory-close" type="button" onClick={() => setShowHelp(false)} aria-label="Close how to play">
                X
              </button>
            </div>
            <ul>
              <li>Click blocks to mine them.</li>
              <li>Avoid TNT.</li>
              <li>Numbers show how many TNT blocks are nearby.</li>
              <li>Reveal all safe blocks to win.</li>
              <li>Reset the dungeon anytime.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function NetherPortalBonus({ enderPearlCollected, onAchievement }) {
  const gateRef = useRef(null);
  const gameRef = useRef(null);
  const [portalSeen, setPortalSeen] = useState(false);
  const [entering, setEntering] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const portalActivated = portalSeen && enderPearlCollected;

  useEffect(() => {
    const gate = gateRef.current;
    if (!gate) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPortalSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.42 }
    );

    observer.observe(gate);
    return () => observer.disconnect();
  }, [onAchievement]);

  const enterPortal = () => {
    if (entering || !portalActivated) return;

    setEntering(true);
    onAchievement("Entered Nether Portal");

    setTimeout(() => {
      setGameOpen(true);
      setEntering(false);
      setTimeout(() => {
        const gameTop = gameRef.current?.getBoundingClientRect().top;
        if (typeof gameTop === "number") {
          window.scrollTo({ top: window.scrollY + gameTop - 96, behavior: "smooth" });
        }
      }, 80);
    }, 950);
  };

  return (
    <section
      className={`layer layer-portal-gate ${portalActivated ? "portal-is-active" : ""} ${entering ? "portal-is-entering" : ""}`}
      id="nether-portal"
      ref={gateRef}
    >
      <SectionTitle label="[ NETHER PORTAL ]" subtitle="Enter the portal to play TNT Minesweeper." />

      <div className="portal-area reveal">
        <div className="portal-status">
          <span>{portalActivated ? "Portal Activated" : "Place the Ender Pearl in your inventory to activate the portal."}</span>
        </div>
        <button
          className="portal"
          type="button"
          data-cursor="portal"
          aria-label={portalActivated ? "Enter TNT Minesweeper" : "Dormant portal"}
          disabled={!portalActivated || entering}
          onClick={enterPortal}
        >
          <span className="portal-frame portal-top"></span>
          <span className="portal-frame portal-left"></span>
          <span className="portal-frame portal-right"></span>
          <span className="portal-frame portal-bottom"></span>
          <span className="portal-center"></span>
          <span className="portal-particles"></span>
        </button>
        <button className="pixel-button purple enter-portal" type="button" onClick={enterPortal} disabled={!portalActivated || entering}>
          ENTER PORTAL
        </button>
      </div>

      {entering && <div className="portal-transition" aria-hidden="true"></div>}
      {gameOpen && (
        <div ref={gameRef}>
          <TntMinesweeper onAchievement={onAchievement} />
        </div>
      )}
    </section>
  );
}

function ProjectInspectionModal({ project, onClose }) {
  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="project-modal-backdrop" type="button" aria-label="Close project inspection" onClick={onClose}></button>
      <article className="inventory-window">
        <div className="inventory-header">
          <div>
            <p>Project Inspection</p>
            <h2 id="project-modal-title">{project.title}</h2>
          </div>
          <button className="inventory-close" type="button" onClick={onClose} aria-label="Close project inspection">
            X
          </button>
        </div>

        <div className="inventory-grid">
          <div className="inventory-slot project-slot">
            <div className={`project-icon icon-${project.icon}`} aria-hidden="true"></div>
          </div>
          <div className="inventory-details">
            <div className="meta-line">
              <span>{project.date}</span>
              <span>{project.org}</span>
            </div>
            {project.awards && (
              <div className="award-badges">
                {project.awards.split(",").map((award) => (
                  <span key={award.trim()}>{award.trim()}</span>
                ))}
              </div>
            )}
            <TagRow tags={project.tags} />
          </div>
        </div>

        <div className="inventory-section">
          <h3>Quest Log</h3>
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        {project.links?.length > 0 && (
          <div className="inventory-actions">
            {project.links.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

function TagRow({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function SkillsAndChest({ enderPearlCollected, onCollectEnderPearl }) {
  const [open, setOpen] = useState(false);
  const [pearlSelected, setPearlSelected] = useState(false);
  const [draggingPearl, setDraggingPearl] = useState(false);
  const [pearlPlaced, setPearlPlaced] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dragging-pearl", draggingPearl);
    return () => document.body.classList.remove("dragging-pearl");
  }, [draggingPearl]);

  const openChest = () => {
    setOpen(true);
    setPearlSelected(false);
    setPearlPlaced(false);
  };

  const collectPearl = () => {
    setPearlSelected(false);
    setDraggingPearl(false);
    setPearlPlaced(true);
    onCollectEnderPearl();
  };

  return (
    <section className="layer layer-netherite" id="netherite">
      <SectionTitle label="[ SKILLS & TOOLS ]" />
      <div className="skills-grid">
        {skillGroups.map(([title, skills]) => (
          <article className="pixel-card reveal" key={title}>
            <h2>{title}</h2>
            <TagRow tags={skills} />
          </article>
        ))}
      </div>

      <h3 className="subhead reveal">Achievements Unlocked</h3>
      <div className="cert-grid reveal">
        {certifications.map(([name, date]) => (
          <article key={name}>
            <strong>{name}</strong>
            <span>{date}</span>
          </article>
        ))}
      </div>

      <SectionTitle label="[ ANCIENT DEBRIS ]" subtitle="Rarest finds. Hardest earned." />
      <div className="award-grid">
        {awards.map(([name, place, text]) => (
          <article className="pixel-card award-card reveal" key={name}>
            <div className="trophy" aria-hidden="true"></div>
            <h2>{name}</h2>
            <span>{place}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="stronghold-heading">
        <SectionTitle label="[ STRONGHOLD CHEST ]" subtitle="A strange chest waits near the end of the journey..." />
      </div>
      <div className={`resume-chest reveal ${open ? "open" : ""}`} id="resume-chest">
        <button type="button" className="chest" onClick={openChest} aria-expanded={open}>
          <span className="chest-lid"></span>
          <span className="chest-base"></span>
          <span className="chest-lock"></span>
        </button>
        <div className="chest-copy">
          <h2>Stronghold Chest</h2>
          <p>{pearlPlaced ? "Ender Pearl Added to Inventory" : open ? "Ender Pearl Found" : "Click the chest to reveal the portal key."}</p>
        </div>
        {open && (
          <div className="chest-inventory" aria-label="Stronghold chest inventory">
            <div className="chest-instructions">
              <strong>{pearlPlaced ? "Ender Pearl Added to Inventory" : "Ender Pearl Found"}</strong>
              <span>{pearlPlaced ? "The Nether Portal is active." : "Drag it into your inventory, then enter the portal for a surprise challenge."}</span>
            </div>
            <div className="inventory-screen">
              <section className="inventory-panel">
                <h3>Chest</h3>
                <div className="inventory-slot-grid chest-slot-grid">
                  {Array.from({ length: 9 }, (_, index) => (
                    <div className="mc-inventory-slot" key={`chest-${index}`}>
                      {index === 0 && !pearlPlaced && (
                        <button
                          className={`ender-pearl-item ${pearlSelected ? "selected" : ""}`}
                          type="button"
                          draggable
                          aria-label="Ender Pearl"
                          onClick={() => setPearlSelected(true)}
                          onDragStart={(event) => {
                            event.dataTransfer.setData("text/plain", "ender-pearl");
                            setDraggingPearl(true);
                            setPearlSelected(true);
                          }}
                          onDragEnd={() => setDraggingPearl(false)}
                        >
                          <span className="ender-pearl" aria-hidden="true"></span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </section>
              <section className="inventory-panel">
                <h3>Inventory</h3>
                <div className="inventory-slot-grid player-slot-grid">
                  {Array.from({ length: 9 }, (_, index) => (
                    <button
                      className={`mc-inventory-slot inventory-target ${pearlPlaced && index === 0 ? "filled" : ""} ${pearlSelected ? "ready" : ""}`}
                      type="button"
                      key={`inventory-${index}`}
                      aria-label={`Inventory slot ${index + 1}`}
                      onClick={() => {
                        if (pearlSelected && !pearlPlaced) collectPearl();
                      }}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => {
                        event.preventDefault();
                        if (event.dataTransfer.getData("text/plain") === "ender-pearl") {
                          collectPearl();
                        }
                      }}
                    >
                      {pearlPlaced && index === 0 && <span className="ender-pearl" aria-hidden="true"></span>}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(EMAIL);
    } else {
      const input = document.createElement("input");
      input.value = EMAIL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1700);
  };

  return (
    <section className="layer layer-village" id="village">
      <SectionTitle label="[ VILLAGE TRADING HALL ]" subtitle="Click a villager to trade" />
      <div className="villager-grid">
        {trades.map(([label, color, href]) => (
          <a className={`villager-card ${color} reveal`} href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
            <span className="villager">
              <i></i>
              <b></b>
              <em></em>
            </span>
            <strong>{label}</strong>
          </a>
        ))}
      </div>

      <div className="coordinates reveal">
        <p>Email: {EMAIL} / Phone: +1 (437) 422-4234 / Location: Waterloo, ON</p>
        <div className="contact-actions">
          <button className="pixel-button green" type="button" onClick={copyEmail}>
            {copied ? "COPIED!" : "COPY EMAIL"}
          </button>
          <a className="pixel-button brown" href={RESUME_URL} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function RevealController() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

export default function App() {
  const scroll = useScrollState();
  const [achievements, setAchievements] = useState([]);
  const [achievementToasts, setAchievementToasts] = useState([]);
  const [inspectedProjects, setInspectedProjects] = useState([]);
  const [enderPearlCollected, setEnderPearlCollected] = useState(() => {
    try {
      return window.localStorage.getItem("kevin-ender-pearl") === "collected";
    } catch {
      return false;
    }
  });
  const unlockedAchievementsRef = useRef(new Set());

  const unlockAchievement = useCallback((title, detail = "", duration = 4200) => {
    if (unlockedAchievementsRef.current.has(title)) return;
    unlockedAchievementsRef.current.add(title);

    const id = `${title}-${Date.now()}`;
    setAchievements((current) => (current.includes(title) ? current : [...current, title]));
    setAchievementToasts((toasts) => [...toasts, { id, title, detail }]);
    window.setTimeout(() => {
      setAchievementToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  const collectEnderPearl = useCallback(() => {
    setEnderPearlCollected(true);
    try {
      window.localStorage.setItem("kevin-ender-pearl", "collected");
    } catch {
      // localStorage can be unavailable in some privacy modes.
    }
    unlockAchievement("Eye of Ender");
  }, [unlockAchievement]);

  const inspectProject = useCallback(
    (title) => {
      setInspectedProjects((current) => (current.includes(title) ? current : [...current, title]));
      unlockAchievement("Inspected First Project");
    },
    [unlockAchievement]
  );

  useEffect(() => {
    if (scroll.active !== "spawn") {
      unlockAchievement("Started Mining");
    }

    if (scroll.active === "diamond") {
      unlockAchievement("Reached Diamond Layer");
    }
  }, [scroll.active, unlockAchievement]);

  return (
    <>
      <CustomCursor />
      <RevealController />
      <AchievementToasts toasts={achievementToasts} />
      <Navbar active={scroll.active} />
      <MiningScrollbar progress={scroll.progress} direction={scroll.direction} />
      <main>
        <Hero />
        <WoodAge />
        <Experience />
        <Leadership />
        <Projects onProjectInspect={inspectProject} />
        <SkillsAndChest enderPearlCollected={enderPearlCollected} onCollectEnderPearl={collectEnderPearl} />
        <Contact />
        <NetherPortalBonus enderPearlCollected={enderPearlCollected} onAchievement={unlockAchievement} />
      </main>
      <footer className="footer">Kevin Upadhyay / Built like a mining run, written like a portfolio.</footer>
    </>
  );
}
