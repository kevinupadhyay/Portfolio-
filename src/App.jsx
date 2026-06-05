import React, { useEffect, useMemo, useRef, useState } from "react";

const EMAIL = "kevinkdu23@gmail.com";

const navItems = [
  { id: "spawn", label: "Spawn", icon: "sky" },
  { id: "wood", label: "Wood", icon: "wood" },
  { id: "stone", label: "Stone", icon: "stone" },
  { id: "iron", label: "Iron", icon: "iron" },
  { id: "diamond", label: "Diamond", icon: "diamond" },
  { id: "netherite", label: "Netherite", icon: "netherite" },
  { id: "village", label: "Village", icon: "village" }
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
    icon: "chess",
    title: "President - Chess Club, WHCI",
    dates: "Sep 2024-Jun 2025",
    text: "Co-founded and led the club. Organized tournaments, training sessions, and fundraising initiatives. Increased student engagement through club events and competitions."
  },
  {
    icon: "service",
    title: "Vice President - Scholarly Service Society Toronto",
    dates: "Sep 2023-Jun 2025",
    text: "Managed partnerships, volunteer opportunities, and communications. Coordinated volunteer opportunities and Google Classroom communications for 30+ students."
  },
  {
    icon: "un",
    title: "Secretary - Model UN Club, WHCI",
    dates: "Sep 2023-Jun 2024",
    text: "Organized meetings and managed club communications. Designed digital posters and supported social media campaigns. Strengthened leadership and public speaking through conference participation."
  },
  {
    icon: "team",
    title: "Lead Manager & Coach Assistant - Cricket Team, WHCI",
    dates: "Sep 2023-Jun 2024",
    text: "Assisted with team organization, logistics, and practice coordination. Supported coaching staff during games and training activities."
  }
];

const projects = [
  {
    featured: true,
    icon: "ledger",
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
    icon: "leaf",
    title: "EcoOffset Chrome Extension",
    org: "GenAI Genesis Hackathon",
    date: "2026",
    bullets: [
      "Built a Chrome extension focused on sustainable shopping and environmental awareness.",
      "Developed features using React/JavaScript to provide sustainability-focused insights during online shopping.",
      "Collaborated with teammates to rapidly prototype and present the solution."
    ],
    tags: ["React", "JavaScript", "Chrome Extension", "Sustainability"]
  },
  {
    icon: "cards",
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
    icon: "quiz",
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
    icon: "grid",
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
  ["LinkedIn", "blue", "https://www.linkedin.com/in/kevin-upadhyay-b64b23330"],
  ["GitHub", "purple", "https://github.com/kevinupadhyay"],
  ["Email", "green", `mailto:${EMAIL}`],
  ["Phone", "orange", "tel:+14374224234"]
];

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
  const currentBlock = Math.min(Math.floor(progress * totalBlocks), totalBlocks - 1);
  const crackStage = Math.min(Math.floor((blockProgress % 1) * 4) + 1, 4);
  const minerState = getMinerState(direction, currentBlock, crackStage);
  const footPosition = `clamp(112px, calc(${progress * 100}% + 12px), calc(100% - 4px))`;

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
        <p className="spawn-label">Spawn Point</p>
        <h1>
          <span>KEVIN</span>
          <strong>UPADHYAY</strong>
        </h1>
        <div className="subtitle-box">Waterloo Math Student / Builder / Hacker / Developer</div>
        <div className="xp-bars">
          {[
            ["Honour Roll", "100%"],
            ["Skills", "88%"],
            ["Projects", "76%"]
          ].map(([label, width]) => (
            <div className="xp-row" key={label}>
              <span>{label}</span>
              <div className="xp-track">
                <i style={{ width }}></i>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-actions">
          <button className="pixel-button green" type="button" onClick={() => scrollToId("wood")}>
            START MINING
          </button>
          <button className="pixel-button brown" type="button" onClick={() => scrollToId("resume-chest")}>
            OPEN CHEST
          </button>
        </div>
      </div>
      <div className="floating-head" aria-hidden="true">
        KU
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

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
            className={`project-card reveal ${item.featured ? "featured" : ""}`}
            key={item.title}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(item)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedProject(item);
              }
            }}
          >
            <div className={`project-icon icon-${item.icon}`} aria-hidden="true"></div>
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
            <TagRow tags={item.tags} />
            <div className="inspect-label">Inspect Project</div>
          </article>
        ))}
      </div>
      {selectedProject && (
        <ProjectInspectionModal project={selectedProject} onClose={() => setSelectedProject(null)} />
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

        <div className="inventory-actions">
          <button type="button">GitHub Coming Soon</button>
          <button type="button">Demo Coming Soon</button>
          <button type="button">Devpost Coming Soon</button>
        </div>
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

function SkillsAndChest() {
  const [open, setOpen] = useState(false);

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

      <div className={`resume-chest reveal ${open ? "open" : ""}`} id="resume-chest">
        <button type="button" className="chest" onClick={() => setOpen(true)} aria-expanded={open}>
          <span className="chest-lid"></span>
          <span className="chest-base"></span>
          <span className="chest-lock"></span>
        </button>
        <div className="chest-copy">
          <h2>Resume Chest</h2>
          <p>{open ? "EASTER EGG FOUND: CHEST OPENED!" : "Click the chest to unlock contact loot."}</p>
        </div>
        {open && (
          <div className="chest-items">
            <span>Resume PDF Coming Soon</span>
            <a href="https://www.linkedin.com/in/kevin-upadhyay-b64b23330" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/kevinupadhyay" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
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
        <button className="pixel-button green" type="button" onClick={copyEmail}>
          {copied ? "COPIED!" : "COPY EMAIL"}
        </button>
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

  return (
    <>
      <CustomCursor />
      <RevealController />
      <Navbar active={scroll.active} />
      <MiningScrollbar progress={scroll.progress} direction={scroll.direction} />
      <main>
        <Hero />
        <WoodAge />
        <Experience />
        <Leadership />
        <Projects />
        <SkillsAndChest />
        <Contact />
      </main>
      <footer className="footer">Kevin Upadhyay / Built like a mining run, written like a portfolio.</footer>
    </>
  );
}
