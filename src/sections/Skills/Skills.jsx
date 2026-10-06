import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    label: "FRONT-END CORE",
    color: "violet",
    description:
      "The core technologies I use to structure, style and build responsive web interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: "html5",
        brand: "#E34F26",
        level: "CORE",
      },
      {
        name: "CSS3",
        icon: "css3",
        brand: "#1572B6",
        level: "CORE",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        brand: "#F7DF1E",
        level: "CORE",
      },
      {
        name: "React.js",
        icon: "react",
        brand: "#61DAFB",
        level: "CORE",
      },
      {
        name: "Vite",
        icon: "vite",
        brand: "#646CFF",
        level: "TOOLING",
      },
      {
        name: "Responsive Design",
        icon: "custom",
        symbol: "↔",
        brand: "#A855F7",
        level: "UI",
      },
    ],
  },

  {
    id: "web",
    number: "02",
    label: "WEB DEVELOPMENT",
    color: "blue",
    description:
      "Practical frontend capabilities for creating interactive and production-ready web experiences.",
    skills: [
      {
        name: "React Components",
        icon: "react",
        brand: "#61DAFB",
        level: "REACT",
      },
      {
        name: "JavaScript ES6+",
        icon: "javascript",
        brand: "#F7DF1E",
        level: "JS",
      },
      {
        name: "REST APIs",
        icon: "custom",
        symbol: "API",
        brand: "#85EA2D",
        level: "API",
      },
      {
        name: "DOM & Events",
        icon: "custom",
        symbol: "<>",
        brand: "#F97316",
        level: "WEB",
      },
      {
        name: "UI Interaction",
        icon: "custom",
        symbol: "UI",
        brand: "#EC4899",
        level: "INTERACTION",
      },
      {
        name: "Performance",
        icon: "custom",
        symbol: "↯",
        brand: "#06B6D4",
        level: "QUALITY",
      },
    ],
  },

  {
    id: "firebase",
    number: "03",
    label: "BACKEND & SERVICES",
    color: "green",
    description:
      "Frontend-connected services and backend foundations used to turn interfaces into functional products.",
    skills: [
      {
        name: "Firebase",
        icon: "firebase",
        brand: "#FFCA28",
        level: "SERVICE",
      },
      {
        name: "Firestore",
        icon: "firebase",
        brand: "#FFCA28",
        level: "DATA",
      },
      {
        name: "Authentication",
        icon: "custom",
        symbol: "AUTH",
        brand: "#22C55E",
        level: "SERVICE",
      },
      {
        name: "Node.js",
        icon: "nodedotjs",
        brand: "#5FA04E",
        level: "FOUNDATION",
      },
      {
        name: "Express.js",
        icon: "express",
        brand: "#FFFFFF",
        level: "FOUNDATION",
      },
    ],
  },

  {
    id: "workflow",
    number: "04",
    label: "DEVELOPMENT WORKFLOW",
    color: "orange",
    description:
      "The tools I use to write, manage, version and ship frontend projects.",
    skills: [
      {
        name: "Git",
        icon: "git",
        brand: "#F05032",
        level: "VERSION",
      },
      {
        name: "GitHub",
        icon: "github",
        brand: "#FFFFFF",
        level: "VERSION",
      },
      {
        name: "VS Code",
        icon: "visualstudiocode",
        brand: "#007ACC",
        level: "EDITOR",
      },
      {
        name: "Git Branching",
        icon: "custom",
        symbol: "⌘",
        brand: "#F97316",
        level: "WORKFLOW",
      },
      {
        name: "Debugging",
        icon: "custom",
        symbol: "DBG",
        brand: "#EF4444",
        level: "QUALITY",
      },
      {
        name: "Deployment",
        icon: "custom",
        symbol: "DEP",
        brand: "#A855F7",
        level: "DELIVERY",
      },
    ],
  },

  {
    id: "deployment",
    number: "05",
    label: "DEPLOYMENT",
    color: "cyan",
    description:
      "Platforms and services used to move projects from local development to live environments.",
    skills: [
      {
        name: "Vercel",
        icon: "vercel",
        brand: "#FFFFFF",
        level: "DEPLOY",
      },
      {
        name: "Netlify",
        icon: "netlify",
        brand: "#00C7B7",
        level: "DEPLOY",
      },
      {
        name: "Render",
        icon: "render",
        brand: "#FFFFFF",
        level: "HOSTING",
      },
      {
        name: "Railway",
        icon: "railway",
        brand: "#FFFFFF",
        level: "HOSTING",
      },
      {
        name: "Hostinger",
        icon: "custom",
        symbol: "H",
        brand: "#673DE6",
        level: "HOSTING",
      },
    ],
  },

  {
    id: "ai",
    number: "06",
    label: "AI & AUTOMATION",
    color: "pink",
    description:
      "AI-assisted development and automation used to improve research, development speed and workflows.",
    skills: [
      {
        name: "ChatGPT",
        icon: "openai",
        brand: "#FFFFFF",
        level: "AI",
      },
      {
        name: "Claude",
        icon: "anthropic",
        brand: "#D97757",
        level: "AI",
      },
      {
        name: "Google Gemini",
        icon: "googlegemini",
        brand: "#8AB4F8",
        level: "AI",
      },
      {
        name: "AI-Assisted Development",
        icon: "custom",
        symbol: "AI",
        brand: "#EC4899",
        level: "WORKFLOW",
      },
      {
        name: "Workflow Automation",
        icon: "custom",
        symbol: "↯",
        brand: "#06B6D4",
        level: "AUTOMATION",
      },
    ],
  },
];

const professionalSkills = [
  "Problem Solving",
  "Attention to Detail",
  "Responsive Thinking",
  "Clean UI Structure",
  "Debugging",
  "Communication",
  "Adaptability",
  "Continuous Learning",
];

function BrandIcon({ skill }) {
  const [hasError, setHasError] = useState(false);

  if (skill.icon === "custom" || hasError) {
    return (
      <span
        className="skills__custom-icon"
        style={{ "--icon-brand": skill.brand }}
        aria-hidden="true"
      >
        {skill.symbol || skill.name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  const src = `https://cdn.simpleicons.org/${skill.icon}/${skill.brand.replace(
    "#",
    "",
  )}`;

  return (
    <img
      className="skills__brand-icon"
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState("frontend");

  const active =
    skillGroups.find((group) => group.id === activeGroup) || skillGroups[0];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [
            ".skills__top",
            ".skills__kicker",
            ".skills__heading-line",
            ".skills__intro",
            ".skills__command",
            ".skills__category",
            ".skills__workspace",
            ".skills__skill-card",
            ".skills__workflow",
            ".skills__professional",
            ".skills__bottom",
          ],
          { clearProps: "all" },
        );

        return;
      }

      gsap.from(".skills__top", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills__kicker", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__header",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".skills__heading-line", {
        yPercent: 115,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skills__heading",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills__intro", {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__header",
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".skills__command", {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skills__command",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".skills__category", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__categories",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".skills__workspace", {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__workspace",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills__workflow", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__workflow",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills__professional-item", {
        y: 25,
        opacity: 0,
        scale: 0.96,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__professional",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".skills__bottom", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__bottom",
          start: "top 92%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".skills__skill-card");

    if (!cards) return;

    const handlers = [];

    cards.forEach((card) => {
      const handleMove = (event) => {
        if (
          window.matchMedia("(max-width: 900px)").matches ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          return;
        }

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 7;
        const rotateX = (y / rect.height - 0.5) * -7;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-7px)
        `;
      };

      const handleLeave = () => {
        card.style.transform = `
          perspective(900px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0)
        `;
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);

      handlers.push({
        card,
        handleMove,
        handleLeave,
      });
    });

    return () => {
      handlers.forEach(({ card, handleMove, handleLeave }) => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, [activeGroup]);

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <div className="skills__background" aria-hidden="true">
        <div className="skills__grid" />
        <div className="skills__orb skills__orb--one" />
        <div className="skills__orb skills__orb--two" />
        <div className="skills__orb skills__orb--three" />

        <div className="skills__code-stream">
          <span>{"<React />"}</span>
          <span>{"const UI = () =>"}</span>
          <span>{"fetch('/api')"}</span>
          <span>{"git push origin"}</span>
          <span>{"npm run build"}</span>
        </div>
      </div>

      <div className="skills__inner">
        <div className="skills__top">
          <span className="skills__label">05 — SKILLS</span>

          <span className="skills__meta">
            FRONT-END / ENGINEERING / DELIVERY
          </span>
        </div>

        <header className="skills__header">
          <div className="skills__heading-wrap">
            <p className="skills__kicker">FRONT-END ENGINEERING</p>

            <h2 className="skills__heading">
              <span className="skills__heading-line">TOOLS</span>

              <span className="skills__heading-line skills__heading-line--muted">
                THAT BUILD
              </span>

              <strong className="skills__heading-line">
                DIGITAL EXPERIENCES.
              </strong>
            </h2>
          </div>

          <div className="skills__intro">
            <span className="skills__intro-line" />

            <p>
              A practical frontend stack focused on responsive interfaces, React
              development, real-world APIs, deployment and modern development
              workflows.
            </p>

            <div className="skills__intro-meta">
              <span>06 DOMAINS</span>
              <span>30+ CAPABILITIES</span>
            </div>
          </div>
        </header>

        <div className="skills__command">
          <div className="skills__command-grid" />
          <div className="skills__command-glow" />

          <div className="skills__command-top">
            <div>
              <span className="skills__eyebrow">PRIMARY SPECIALIZATION</span>

              <strong>FRONT-END DEVELOPMENT</strong>
            </div>

            <div className="skills__system-status">
              <span />
              SYSTEM / READY
            </div>
          </div>

          <div className="skills__command-main">
            <div className="skills__command-index">01</div>

            <div className="skills__command-title">
              <h3>
                HTML
                <span>CSS</span>
                <strong>REACT</strong>
              </h3>

              <p>STRUCTURE. INTERACTION. EXPERIENCE.</p>
            </div>

            <div className="skills__core-visual" aria-hidden="true">
              <div className="skills__core-ring skills__core-ring--one" />
              <div className="skills__core-ring skills__core-ring--two" />
              <div className="skills__core-ring skills__core-ring--three" />

              <div className="skills__core">
                <span>FRONTEND</span>
                <strong>LIVE</strong>
              </div>

              <span className="skills__core-dot skills__core-dot--one" />
              <span className="skills__core-dot skills__core-dot--two" />
            </div>
          </div>

          <div className="skills__command-flow">
            <span>IDEA</span>
            <i />
            <span>STRUCTURE</span>
            <i />
            <span>COMPONENT</span>
            <i />
            <span>INTERACTION</span>
            <i />
            <span>DEPLOY</span>
          </div>

          <div className="skills__terminal">
            <span>npm</span>
            <span>run</span>
            <strong>build</strong>
            <i />
            <span>✓ READY</span>
          </div>
        </div>

        <div className="skills__categories">
          {skillGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              className={`
                skills__category
                skills__category--${group.color}
                ${activeGroup === group.id ? "is-active" : ""}
              `}
              onClick={() => setActiveGroup(group.id)}
            >
              <span className="skills__category-number">{group.number}</span>

              <span className="skills__category-name">{group.label}</span>

              <span className="skills__category-arrow">↗</span>

              <span className="skills__category-scan" />
            </button>
          ))}
        </div>

        <div
          className={`
            skills__workspace
            skills__workspace--${active.color}
          `}
        >
          <div className="skills__workspace-header">
            <div>
              <span className="skills__eyebrow">
                {active.number} / SKILL DOMAIN
              </span>

              <h3>{active.label}</h3>

              <p>{active.description}</p>
            </div>

            <div className="skills__workspace-count">
              <strong>{String(active.skills.length).padStart(2, "0")}</strong>
              <span>SKILLS</span>
            </div>
          </div>

          <div className="skills__skill-grid">
            {active.skills.map((skill, index) => (
              <article
                className="skills__skill-card"
                key={skill.name}
                style={{
                  "--card-index": index,
                  "--icon-brand": skill.brand,
                }}
              >
                <div className="skills__card-light" />

                <div className="skills__skill-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <small>{skill.level}</small>
                </div>

                <div className="skills__skill-icon">
                  <BrandIcon skill={skill} />
                </div>

                <h4>{skill.name}</h4>

                <div className="skills__skill-bottom">
                  <span>{active.label}</span>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skills__workflow">
          <div className="skills__workflow-heading">
            <div>
              <span className="skills__eyebrow">FRONTEND WORKFLOW</span>

              <strong>
                FROM
                <span>CODE TO LIVE.</span>
              </strong>
            </div>

            <div className="skills__workflow-status">
              <span />
              DELIVERY PIPELINE
            </div>
          </div>

          <div className="skills__workflow-flow">
            <div className="skills__workflow-node">
              <span>01</span>
              <strong>PLAN</strong>
              <small>STRUCTURE</small>
            </div>

            <i />

            <div className="skills__workflow-node">
              <span>02</span>
              <strong>BUILD</strong>
              <small>REACT / JS</small>
            </div>

            <i />

            <div className="skills__workflow-node">
              <span>03</span>
              <strong>TEST</strong>
              <small>DEBUG</small>
            </div>

            <i />

            <div className="skills__workflow-node">
              <span>04</span>
              <strong>SHIP</strong>
              <small>GIT / GITHUB</small>
            </div>

            <i />

            <div className="skills__workflow-node">
              <span>05</span>
              <strong>LIVE</strong>
              <small>VERCEL / NETLIFY</small>
            </div>
          </div>
        </div>

        <div className="skills__professional">
          <div className="skills__professional-heading">
            <span className="skills__eyebrow">PROFESSIONAL CAPABILITY</span>

            <h3>
              HOW I<span>THINK &amp; WORK.</span>
            </h3>

            <div className="skills__signal-line">
              <span />
            </div>
          </div>

          <div className="skills__professional-grid">
            {professionalSkills.map((skill, index) => (
              <div className="skills__professional-item" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{skill}</strong>

                <i>↗</i>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__bottom">
          <span>DESIGN</span>
          <i />
          <span>BUILD</span>
          <i />
          <span>TEST</span>
          <i />
          <span>DEPLOY</span>
          <i />
          <span>IMPROVE</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
