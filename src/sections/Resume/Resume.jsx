import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Resume.css";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".resume__top", {
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

      gsap.from(".resume__heading", {
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

      gsap.from(".resume__panel", {
        y: 55,
        opacity: 0,
        scale: 0.98,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".resume__panel",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".resume__note", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".resume__note",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".resume__bottom", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".resume__bottom",
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
      className="resume"
      id="resume"
    >
      <div className="resume__ambient">
        <span className="resume__orb resume__orb--one" />
        <span className="resume__orb resume__orb--two" />
      </div>

      <div className="resume__grid-bg" />

      <div className="resume__inner">
        <div className="resume__top">
          <span className="resume__label">
            08 — RESUME
          </span>

          <span className="resume__meta">
            PROFILE / EXPERIENCE / SKILLS
          </span>
        </div>

        <div className="resume__heading">
          <div>
            <p className="resume__kicker">
              PROFESSIONAL PROFILE
            </p>

            <h2>
              ONE FILE.
              <span>THE FULL PICTURE.</span>
            </h2>
          </div>

          <p>
            A concise overview of my professional profile,
            experience, education, technical skills and
            front-end development background.
          </p>
        </div>

        <div className="resume__panel">
          <div className="resume__panel-glow" />

          <div className="resume__panel-left">
            <div className="resume__document-icon">
              <span>PDF</span>
              <b>↗</b>
            </div>

            <div className="resume__document-info">
              <span>DOCUMENT</span>

              <h3>
                NIKHIL
                <strong>NAGARGOJE</strong>
              </h3>

              <p>
                FRONT-END DEVELOPER
              </p>
            </div>
          </div>

          <div className="resume__panel-middle">
            <div className="resume__line">
              <span>PRIMARY FOCUS</span>
              <strong>FRONT-END DEVELOPMENT</strong>
            </div>

            <div className="resume__line">
              <span>CORE STACK</span>
              <strong>HTML / CSS / JAVASCRIPT / REACT</strong>
            </div>

            <div className="resume__line">
              <span>FORMAT</span>
              <strong>PDF DOCUMENT</strong>
            </div>
          </div>

          <div className="resume__panel-actions">
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume__button resume__button--primary"
            >
              VIEW RESUME
              <span>↗</span>
            </a>

            <a
              href="/documents/resume.pdf"
              download="Nikhil-Nagargoje-Resume.pdf"
              className="resume__button resume__button--secondary"
            >
              DOWNLOAD PDF
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="resume__note">
          <span className="resume__note-dot" />

          <p>
            FINAL RESUME DOCUMENT WILL BE AVAILABLE HERE.
          </p>

          <span className="resume__note-path">
            /documents/resume.pdf
          </span>
        </div>

        <div className="resume__bottom">
          <span>FRONT-END DEVELOPMENT</span>
          <b>+</b>
          <span>REACT / JAVASCRIPT</span>
          <b>+</b>
          <strong>REAL-WORLD PROJECTS</strong>
        </div>
      </div>
    </section>
  );
}

export default Resume;