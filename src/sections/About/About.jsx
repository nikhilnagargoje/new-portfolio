import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".about__label",
            ".about__meta",
            ".about__kicker",
            ".about__title-line",
            ".about__copy",
            ".about__item",
            ".about__tech-item",
            ".about__languages",
            ".about__bottom",
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /* =====================================================
         TOP META
         ===================================================== */

      gsap.from(".about__label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".about__meta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      /* =====================================================
         HEADING
         ===================================================== */

      gsap.from(".about__kicker", {
        y: 18,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__heading",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".about__title-line", {
        yPercent: 110,
        opacity: 0,
        duration: 0.95,
        stagger: 0.11,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about__heading",
          start: "top 78%",
          once: true,
        },
      });

      /* =====================================================
         COPY
         ===================================================== */

      gsap.from(".about__copy", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__text",
          start: "top 82%",
          once: true,
        },
      });

      /* =====================================================
         DETAIL CARDS
         ===================================================== */

      gsap.from(".about__item", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__details",
          start: "top 84%",
          once: true,
        },
      });

      /* =====================================================
         STACK
         ===================================================== */

      gsap.from(".about__tech-item", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__stack",
          start: "top 86%",
          once: true,
        },
      });

      /* =====================================================
         LANGUAGES + BOTTOM
         ===================================================== */

      gsap.from(".about__languages", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__languages",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".about__bottom", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__bottom",
          start: "top 92%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about"
      id="about"
      aria-labelledby="about-title"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="about__background"
        aria-hidden="true"
      >
        <div className="about__glow about__glow--one" />
        <div className="about__glow about__glow--two" />

        <div className="about__grid" />

        <div className="about__line about__line--one" />
        <div className="about__line about__line--two" />

        <div className="about__scanline" />
      </div>

      <div className="about__inner">

        {/* ===================================================
            HEADER
            =================================================== */}

        <div className="about__top">
          <span className="about__label">
            02 — ABOUT
          </span>

          <span className="about__meta">
            FRONT-END / REACT / 2026
          </span>
        </div>

        {/* ===================================================
            MAIN INTRO
            =================================================== */}

        <div className="about__content">

          <div className="about__heading">
            <p className="about__kicker">
              CODE / INTERFACE / EXPERIENCE
            </p>

            <h2
              id="about-title"
              className="about__title"
            >
              <span className="about__title-mask">
                <span className="about__title-line">
                  I BUILD
                </span>
              </span>

              <span className="about__title-mask">
                <span className="about__title-line">
                  DIGITAL
                </span>
              </span>

              <span className="about__title-mask">
                <span className="about__title-line about__title-line--accent">
                  EXPERIENCES.
                </span>
              </span>
            </h2>
          </div>

          <div className="about__text">

            <div className="about__copy-block">
              <span className="about__copy-index">
                01
              </span>

              <p className="about__copy">
                I&apos;m{" "}
                <strong>Nikhil Nagargoje</strong>, a
                Front-End Developer focused on building
                modern, responsive and user-friendly web
                experiences.
              </p>
            </div>

            <div className="about__copy-block">
              <span className="about__copy-index">
                02
              </span>

              <p className="about__copy">
                I work primarily with{" "}
                <strong>
                  HTML, CSS, JavaScript, React and Vite
                </strong>
                , with a focus on component-based
                development, responsive layouts and
                polished interfaces.
              </p>
            </div>

            <div className="about__copy-block">
              <span className="about__copy-index">
                03
              </span>

              <p className="about__copy">
                I enjoy turning real business
                requirements into practical digital
                products — from business websites and
                landing pages to interactive web
                applications.
              </p>
            </div>

          </div>
        </div>

        {/* ===================================================
            DEVELOPMENT APPROACH
            =================================================== */}

        <div className="about__details">

          <div className="about__item">
            <span className="about__item-number">
              01
            </span>

            <div className="about__item-content">
              <span className="about__item-label">
                PRIMARY FOCUS
              </span>

              <strong>
                FRONT-END DEVELOPMENT
              </strong>

              <span className="about__item-description">
                Interfaces built around usability,
                responsiveness and clean structure.
              </span>
            </div>
          </div>

          <div className="about__item">
            <span className="about__item-number">
              02
            </span>

            <div className="about__item-content">
              <span className="about__item-label">
                CORE TECHNOLOGY
              </span>

              <strong>
                JAVASCRIPT + REACT
              </strong>

              <span className="about__item-description">
                Component-driven development for
                scalable frontend interfaces.
              </span>
            </div>
          </div>

          <div className="about__item">
            <span className="about__item-number">
              03
            </span>

            <div className="about__item-content">
              <span className="about__item-label">
                DEVELOPMENT STYLE
              </span>

              <strong>
                RESPONSIVE + PERFORMANCE
              </strong>

              <span className="about__item-description">
                Mobile-first thinking with attention
                to speed and interaction quality.
              </span>
            </div>
          </div>

        </div>

        {/* ===================================================
            STACK
            =================================================== */}

        <div className="about__stack">

          <div className="about__stack-header">
            <span className="about__stack-label">
              CURRENT STACK
            </span>

            <span className="about__stack-note">
              FRONTEND TOOLKIT
            </span>
          </div>

          <div className="about__tech-list">

            <span className="about__tech-item">
              HTML5
            </span>

            <span className="about__tech-separator">
              /
            </span>

            <span className="about__tech-item">
              CSS3
            </span>

            <span className="about__tech-separator">
              /
            </span>

            <span className="about__tech-item">
              JAVASCRIPT
            </span>

            <span className="about__tech-separator">
              /
            </span>

            <span className="about__tech-item">
              REACT
            </span>

            <span className="about__tech-separator">
              /
            </span>

            <span className="about__tech-item">
              VITE
            </span>

            <span className="about__tech-separator">
              /
            </span>

            <span className="about__tech-item">
              FIREBASE
            </span>

          </div>
        </div>

        {/* ===================================================
            LANGUAGES
            =================================================== */}

        <div className="about__languages">

          <span className="about__languages-label">
            LANGUAGES
          </span>

          <div className="about__language-list">
            <span>MARATHI</span>
            <span>HINDI</span>
            <span>ENGLISH</span>
          </div>

        </div>

        {/* ===================================================
            BOTTOM LINE
            =================================================== */}

        <div className="about__bottom">

          <span>IDEA</span>

          <i />

          <span>INTERFACE</span>

          <i />

          <span>EXPERIENCE</span>

          <i />

          <span>PRODUCT</span>

          <span className="about__bottom-arrow">
            ↓
          </span>

        </div>

      </div>
    </section>
  );
}

export default About;