import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Certifications.css";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    number: "01",
    provider: "Udemy",
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Dr. Angela Yu",
    category: "FULL-STACK DEVELOPMENT",
    date: "MAY 12, 2025",
    detail: "61.5 TOTAL HOURS",
    accent: "#a435f0",
    logo: "udemy",
    certificate: "/certificates/udemy-full-stack.pdf",
  },
  {
    number: "02",
    provider: "freeCodeCamp",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp.org",
    category: "WEB DEVELOPMENT",
    date: "MAR 02, 2025",
    detail: "≈ 300 HOURS OF WORK",
    accent: "#ffffff",
    logo: "freecodecamp",
    certificate: "/certificates/freecodecamp-responsive-web-design.jpeg",
    credential:
      "https://www.freecodecamp.org/certification/nikhil8502/responsive-web-design",
  },
  {
    number: "03",
    provider: "Reliance Foundation",
    title: "Front-end Web Development",
    issuer: "Reliance Foundation Skilling Academy",
    category: "FRONT-END DEVELOPMENT",
    date: "JAN 22, 2025",
    detail: "COURSE COMPLETION",
    accent: "#22c55e",
    logo: "reliance",
    certificate: "/certificates/reliance-frontend.pdf",
  },
  {
    number: "04",
    provider: "Microsoft Learn",
    title: "Web Development Workshop",
    issuer: "Microsoft Learn Student Ambassador",
    category: "WEB DEVELOPMENT",
    date: "WORKSHOP",
    detail: "ATTENDANCE & COMPLETION",
    accent: "#00a4ef",
    logo: "microsoft",
    certificate: "/certificates/microsoft-web-development-workshop.pdf",
  },
];

function ProviderIcon({ type }) {
  const icons = {
    udemy: "U",
    freecodecamp: "⌘",
    reliance: "R",
    microsoft: "M",
  };

  return (
    <div
      className={`certifications__provider-icon certifications__provider-icon--${type}`}
    >
      {icons[type]}
    </div>
  );
}

function Certifications() {
  const sectionRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".certifications__top", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".certifications__heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
        },
      });

      gsap.from(".certifications__signal", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certifications__signal",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".certifications__featured-label", {
        x: -25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certifications__featured-label",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".certifications__card", {
        y: 65,
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".certifications__grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".certifications__bottom", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certifications__bottom",
          start: "top 90%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".certifications__card");

    const handlers = [];

    cards.forEach((card) => {
      const move = (event) => {
        if (window.innerWidth <= 760) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * -5;
        const rotateY = (x / rect.width - 0.5) * 5;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 900,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.55,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);

      handlers.push({ card, move, leave });
    });

    return () => {
      handlers.forEach(({ card, move, leave }) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      ref={sectionRef}
      className="certifications"
      id="certifications"
    >
      <div className="certifications__ambient">
        <span className="certifications__orb certifications__orb--one" />
        <span className="certifications__orb certifications__orb--two" />
      </div>

      <div className="certifications__grid-bg" />

      <div className="certifications__inner">
        <div className="certifications__top">
          <span className="certifications__label">
            07 — CERTIFICATIONS
          </span>

          <span className="certifications__meta">
            VERIFIED / CREDENTIALS / CONTINUOUS GROWTH
          </span>
        </div>

        <div className="certifications__heading">
          <div>
            <p className="certifications__kicker">
              VERIFIED CREDENTIALS
            </p>

            <h2>
              PROOF
              <span>BEHIND THE SKILLS.</span>
            </h2>
          </div>

          <p>
            A curated record of completed courses, workshops and
            professional learning credentials supporting my
            development in modern web and front-end development.
          </p>
        </div>

        <div className="certifications__signal">
          <div>
            <span className="certifications__signal-dot" />
            CREDENTIAL SYSTEM
          </div>

          <span className="certifications__signal-line" />

          <strong>{String(certifications.length).padStart(2, "0")}</strong>

          <span>VERIFIED RECORDS</span>
        </div>

        <div className="certifications__featured-label">
          <span>01</span>
          <p>FEATURED CREDENTIALS</p>
        </div>

        <div className="certifications__grid">
          {certifications.map((certificate) => (
            <article
              className="certifications__card"
              key={certificate.number}
              style={{
                "--cert-accent": certificate.accent,
              }}
            >
              <div className="certifications__card-glow" />

              <div className="certifications__card-top">
                <span>{certificate.number}</span>

                <div className="certifications__verified">
                  <i />
                  CREDENTIAL
                </div>
              </div>

              <div className="certifications__provider">
                <ProviderIcon type={certificate.logo} />

                <div>
                  <span>ISSUED BY</span>
                  <strong>{certificate.provider}</strong>
                </div>
              </div>

              <div className="certifications__card-content">
                <span className="certifications__category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>
              </div>

              <div className="certifications__card-details">
                <div>
                  <span>DATE / TYPE</span>
                  <strong>{certificate.date}</strong>
                </div>

                <div>
                  <span>DETAIL</span>
                  <strong>{certificate.detail}</strong>
                </div>
              </div>

              <div className="certifications__card-actions">
                <button
                  type="button"
                  onClick={() => setSelected(certificate)}
                >
                  <span>VIEW CERTIFICATE</span>
                  <b>↗</b>
                </button>

                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VERIFY
                    <span>↗</span>
                  </a>
                )}
              </div>

              <div className="certifications__card-line">
                <span />
              </div>
            </article>
          ))}
        </div>

        <div className="certifications__bottom">
          <span>LEARN</span>
          <b>→</b>
          <span>BUILD</span>
          <b>→</b>
          <span>REFINE</span>
          <b>→</b>
          <strong>DELIVER</strong>
        </div>
      </div>

      {selected && (
        <div
          className="certifications__modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="certifications__modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certifications__modal-top">
              <div>
                <span>
                  CREDENTIAL / {selected.number}
                </span>

                <strong>{selected.title}</strong>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close certificate preview"
              >
                ×
              </button>
            </div>

            <div className="certifications__preview">
              {selected.certificate.endsWith(".pdf") ? (
                <iframe
                  src={selected.certificate}
                  title={`${selected.title} certificate`}
                />
              ) : (
                <img
                  src={selected.certificate}
                  alt={`${selected.title} certificate`}
                />
              )}
            </div>

            <div className="certifications__modal-footer">
              <span>{selected.provider}</span>

              {selected.credential ? (
                <a
                  href={selected.credential}
                  target="_blank"
                  rel="noreferrer"
                >
                  OPEN VERIFICATION ↗
                </a>
              ) : (
                <span>DOCUMENT PREVIEW</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;