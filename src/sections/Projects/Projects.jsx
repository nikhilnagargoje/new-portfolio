import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    type: "REAL-WORLD BUSINESS WEBSITE",
    title: "My Wings Ladies Driving School",
    description:
      "A production website built for a real driving school, focused on presenting services, courses, business information and customer-facing digital experiences through a responsive React interface.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "GitHub",
      "Firebase",
      "Automation",
      "Netlify",
      "Vercel",
    ],
    status: "LIVE • REAL BUSINESS USE",
    visual: "mywings",
    liveUrl: "https://mywingsladiesdrivingschool.com/",
  },

  {
    number: "02",
    type: "REAL-WORLD BUSINESS WEBSITE",
    title: "Aai Baba Tours & Travels",
    description:
      "A real-world travel business website designed around destinations, services, routes and customer enquiries. The current product is frontend-focused and structured to evolve into a scalable booking and business platform with backend functionality.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Vite", "GitHub", "Vercel"],
    status: "LIVE • BUSINESS PROJECT",
    visual: "tours",
    liveUrl: "https://aai-baba-tours.vercel.app/",
  },

  {
    number: "03",
    type: "REAL-WORLD BUSINESS WEBSITE",
    title: "Sai Ram Driving School",
    description:
      "A production business website created for a driving school, combining responsive frontend development with structured business information, customer-facing features and Firebase-backed functionality.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Firebase",
      "GitHub",
      "Netlify",
      "Hostinger",
    ],
    status: "LIVE • REAL BUSINESS USE",
    visual: "sairam",
    liveUrl: "https://sairamdrivingschool.in/",
  },

  {
    number: "04",
    type: "BUSINESS APPLICATION",
    title: "Business Billing & Inventory System",
    description:
      "A business-focused application designed to manage products and stock, generate bills, share bills through WhatsApp and provide multiple ways to analyse business performance including profit, loss and margin.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Business Logic",
      "Inventory",
      "Billing",
      "WhatsApp",
      "Vercel",
    ],
    status: "LIVE APPLICATION",
    visual: "billing",
    liveUrl: "https://billing-app-seven-pi.vercel.app/",
  },
];

function ProjectVisual({ type }) {
  if (type === "mywings") {
    return (
      <div className="project-visual project-visual--mywings">
        <div className="visual-browser">
          <div className="visual-browser__top">
            <span />
            <span />
            <span />
            <b>MY WINGS</b>
          </div>

          <div className="visual-browser__hero">
            <small>LADIES DRIVING SCHOOL</small>
            <strong>
              LEARN TO DRIVE.
              <br />
              DRIVE WITH CONFIDENCE.
            </strong>

            <div className="visual-browser__buttons">
              <i>BOOK NOW</i>
              <i>CALL NOW</i>
            </div>
          </div>

          <div className="visual-browser__cards">
            <span>COURSES</span>
            <span>SERVICES</span>
            <span>RTO</span>
          </div>
        </div>

        <div className="visual-orbit visual-orbit--one" />
        <div className="visual-orbit visual-orbit--two" />
      </div>
    );
  }

  if (type === "tours") {
    return (
      <div className="project-visual project-visual--tours">
        <div className="tour-window">
          <div className="tour-window__header">
            <div className="tour-dots">
              <span />
              <span />
              <span />
            </div>

            <small>AAI BABA TOURS & TRAVELS</small>
          </div>

          <div className="tour-window__hero">
            <small>TRAVEL • EXPLORE • EXPERIENCE</small>
            <strong>
              YOUR JOURNEY
              <br />
              STARTS HERE.
            </strong>

            <div className="tour-search">
              <span>FROM</span>
              <span>TO</span>
              <span>DATE</span>
              <b>SEARCH</b>
            </div>
          </div>

          <div className="tour-route">
            <span>PUNE</span>
            <i>→</i>
            <span>DESTINATION</span>
          </div>
        </div>

        <div className="tour-floating-card">
          <small>TRAVEL PLATFORM</small>
          <strong>01</strong>
          <span>ROUTES / SERVICES / ENQUIRIES</span>
        </div>
      </div>
    );
  }

  if (type === "sairam") {
    return (
      <div className="project-visual project-visual--sairam">
        <div className="sairam-panel">
          <div className="sairam-panel__top">
            <div className="sairam-brand">
              <span>SR</span>
              <div>
                <b>SAI RAM</b>
                <small>DRIVING SCHOOL</small>
              </div>
            </div>

            <div className="sairam-nav">
              <span>HOME</span>
              <span>COURSES</span>
              <span>CONTACT</span>
            </div>
          </div>

          <div className="sairam-panel__content">
            <small>LEARN • DRIVE • LICENSE</small>
            <strong>
              DRIVE WITH
              <br />
              CONFIDENCE.
            </strong>

            <div className="sairam-stat-row">
              <span>
                <b>COURSES</b>
                <small>AVAILABLE</small>
              </span>

              <span>
                <b>RTO</b>
                <small>SUPPORT</small>
              </span>

              <span>
                <b>ONLINE</b>
                <small>ENQUIRY</small>
              </span>
            </div>
          </div>
        </div>

        <div className="sairam-glow" />
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--billing">
      <div className="billing-window">
        <div className="billing-window__top">
          <div className="billing-dots">
            <span />
            <span />
            <span />
          </div>

          <small>BUSINESS CONTROL PANEL</small>
        </div>

        <div className="billing-window__body">
          <div className="billing-sidebar">
            <span className="active">DASHBOARD</span>
            <span>PRODUCTS</span>
            <span>STOCK</span>
            <span>BILLS</span>
            <span>REPORTS</span>
          </div>

          <div className="billing-main">
            <div className="billing-heading">
              <small>BUSINESS OVERVIEW</small>
              <strong>PERFORMANCE</strong>
            </div>

            <div className="billing-metrics">
              <span>
                <small>SALES</small>
                <b>₹ 48.6K</b>
              </span>

              <span>
                <small>STOCK</small>
                <b>286</b>
              </span>

              <span>
                <small>MARGIN</small>
                <b>24.8%</b>
              </span>
            </div>

            <div className="billing-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="billing-bottom">
              <span>PROFIT / LOSS</span>
              <span>INVENTORY</span>
              <span>WHATSAPP BILLING</span>
            </div>
          </div>
        </div>
      </div>

      <div className="billing-ring" />
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [
            ".projects__label",
            ".projects__intro",
            ".projects__signal",
            ".project-card",
            ".projects__bottom",
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      gsap.fromTo(
        ".projects__label",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects__top",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects__intro > *",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects__intro",
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 90,
          rotateX: 8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.16,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects__list",
            start: "top 76%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects__bottom",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects__bottom",
            start: "top 88%",
            once: true,
          },
        },
      );
    }, root);

    const cards = root.querySelectorAll(".project-card");

    const cleanups = [];

    cards.forEach((card) => {
      const handleMove = (event) => {
        if (window.innerWidth <= 760 || reduceMotion) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 7;
        const rotateX = (y / rect.height - 0.5) * -7;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.55,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="projects"
      id="work"
      ref={sectionRef}
      aria-labelledby="projects-title"
    >
      <div className="projects__background">
        <div className="projects__grid" />
        <div className="projects__glow projects__glow--one" />
        <div className="projects__glow projects__glow--two" />
        <div className="projects__line projects__line--one" />
        <div className="projects__line projects__line--two" />
      </div>

      <div className="projects__inner">
        <div className="projects__top">
          <div className="projects__label">
            <span>06</span>
            <strong>SELECTED WORK</strong>
          </div>

          <div className="projects__signal">
            <span className="projects__signal-dot" />
            <span>REAL-WORLD PROJECTS</span>
          </div>
        </div>

        <div className="projects__intro">
          <div className="projects__eyebrow">
            <span>FRONT-END DEVELOPMENT</span>
            <span>2025 — 2026</span>
          </div>

          <h2 id="projects-title">
            <span>BUILT FOR</span>
            <span>REAL</span>
            <span>USE.</span>
          </h2>

          <p>
            A selection of real-world websites and applications built with
            React, JavaScript and modern frontend development practices —
            focused on usability, responsiveness, business needs and
            production-ready interfaces.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <article
                className={`project-card ${
                  isActive ? "project-card--active" : ""
                }`}
                key={project.title}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="project-card__number">
                  <span>{project.number}</span>
                  <i />
                </div>

                <div className="project-card__main">
                  <div className="project-card__meta">
                    <span>{project.type}</span>
                    <span>{project.status}</span>
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__copy">
                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="project-card__stack">
                        {project.stack.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>

                      <div className="project-card__actions">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card__link"
                          aria-label={`Open ${project.title}`}
                        >
                          <span>VIEW LIVE PROJECT</span>
                          <b>↗</b>
                        </a>

                        <span className="project-card__index">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(projects.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="project-card__visual">
                      <ProjectVisual type={project.visual} />

                      <div className="project-card__visual-label">
                        <span>PROJECT</span>
                        <strong>{project.number}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects__bottom">
          <div>
            <span>BUILDING DIGITAL PRODUCTS</span>
            <strong>IDEA → INTERFACE → PRODUCT</strong>
          </div>

          <p>
            Real projects. Real business requirements. Continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
