import { useEffect, useRef } from "react";

import DataVisual from "../../components/3d/DataVisual";
import { runHeroEntrance } from "../../components/animations/HeroEntrance";

import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const cleanup = runHeroEntrance(heroRef.current);

    return cleanup;
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");

    if (workSection) {
      workSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      {/* =====================================================
          BACKGROUND SYSTEM
          ===================================================== */}

      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__glow hero__glow--one" aria-hidden="true" />

      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="hero__noise" aria-hidden="true" />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="hero__container">
        {/* LEFT */}
        <div className="hero__content">
          {/* Availability */}
          <div className="hero__status">
            <span className="hero__status-dot" />

            <span>AVAILABLE FOR FRONT-END OPPORTUNITIES</span>

            <span className="hero__status-line" />
          </div>

          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-index">01</span>

            <span className="hero__eyebrow-text">FRONT-END DEVELOPER</span>

            <span className="hero__eyebrow-separator">/</span>

            <span className="hero__eyebrow-muted">REACT DEVELOPER</span>
          </div>

          {/* Title */}
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">BUILDING</span>

            <span className="hero__title-line hero__title-line--accent">
              DIGITAL
            </span>

            <span className="hero__title-line">EXPERIENCES.</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            I build responsive, high-performance web experiences with clean
            code, thoughtful UI, and modern front-end technologies.
          </p>

          {/* Actions */}
          <div className="hero__actions">
            <button
              type="button"
              className="hero__button hero__button--primary"
              onClick={scrollToWork}
            >
              <span>VIEW MY WORK</span>

              <span className="hero__button-arrow">↗</span>
            </button>

            <button
              type="button"
              className="hero__button hero__button--secondary"
              onClick={scrollToContact}
            >
              <span>LET&apos;S CONNECT</span>

              <span className="hero__button-arrow">→</span>
            </button>
          </div>

          {/* Tech Stack */}
          <div className="hero__tech-strip">
            <span className="hero__tech-label">CORE STACK</span>

            <div className="hero__tech-list">
              <span>HTML</span>
              <i />
              <span>CSS</span>
              <i />
              <span>JAVASCRIPT</span>
              <i />
              <span>REACT</span>
              <i />
              <span>VITE</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            3D VISUAL
            ===================================================== */}

        <div className="hero__visual">
          <div className="hero__visual-label hero__visual-label--top">
            <span className="hero__visual-cross">+</span>

            <span>FRONTEND / SYSTEM</span>
          </div>

          <div className="hero__visual-stage">
            <DataVisual />
          </div>

          <div className="hero__floating-card hero__floating-card--stack">
            <span className="hero__floating-label">STACK</span>

            <strong>REACT</strong>

            <span className="hero__floating-dot" />
          </div>

          <div className="hero__floating-card hero__floating-card--status">
            <span className="hero__floating-label">BUILD</span>

            <strong>READY</strong>

            <span className="hero__floating-check">✓</span>
          </div>

          <div className="hero__visual-label hero__visual-label--bottom">
            <span>INTERACTION</span>

            <span className="hero__visual-cross">+</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM META
          ===================================================== */}

      <div className="hero__footer">
        <div className="hero__footer-block">
          <span className="hero__footer-label">SPECIALIZATION</span>

          <span className="hero__footer-value">FRONT-END / REACT</span>
        </div>

        <div className="hero__footer-center">
          <span className="hero__footer-line" />

          <span>SCROLL TO EXPLORE</span>

          <span className="hero__scroll-arrow">↓</span>
        </div>

        <div className="hero__footer-block hero__footer-block--right">
          <span className="hero__footer-label">BASED IN</span>

          <span className="hero__footer-value">BEED / PUNE — INDIA</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
