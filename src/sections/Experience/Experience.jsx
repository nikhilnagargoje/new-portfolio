import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);
  const heroCardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heroCard = heroCardRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [
            ".experience__top",
            ".experience__hero-card",
            ".experience__timeline",
            ".experience__detail",
            ".experience__highlight",
            ".experience__documents",
            ".experience__footer",
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const mm = gsap.matchMedia();

      /*
       * -------------------------------------------------------
       * DESKTOP / TABLET MOTION SYSTEM
       * -------------------------------------------------------
       */

      mm.add("(min-width: 701px)", () => {
        const introTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        introTl
          .from(".experience__top", {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".experience__hero-card",
            {
              y: 100,
              opacity: 0,
              scale: 0.96,
              duration: 1.15,
              ease: "power4.out",
            },
            "-=0.42",
          )
          .from(
            ".experience__hero-top > *",
            {
              y: 18,
              opacity: 0,
              duration: 0.55,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.65",
          )
          .from(
            ".experience__eyebrow",
            {
              y: 18,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.38",
          )
          .from(
            ".experience__role-line",
            {
              yPercent: 110,
              opacity: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.35",
          )
          .from(
            ".experience__company",
            {
              x: 35,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.65",
          )
          .from(
            ".experience__hero-bottom span",
            {
              y: 15,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.35",
          );

        /*
         * Scroll-driven timeline.
         */
        gsap.fromTo(
          ".experience__timeline-progress",
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: ".experience__timeline",
              start: "top 68%",
              end: "bottom 65%",
              scrub: 0.8,
            },
          },
        );

        gsap.fromTo(
          ".experience__timeline-node",
          {
            scale: 0.4,
            opacity: 0.25,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: ".experience__timeline",
              start: "top 68%",
              end: "bottom 65%",
              scrub: 0.5,
            },
          },
        );

        /*
         * Hero card subtle scroll depth.
         */
        gsap.to(".experience__hero-card", {
          yPercent: -5,
          rotateX: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: ".experience__hero-card",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        /*
         * Details.
         */
        gsap.from(".experience__detail", {
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__details",
            start: "top 82%",
            once: true,
          },
        });

        /*
         * Highlights.
         */
        gsap.from(".experience__highlight", {
          y: 55,
          opacity: 0,
          rotateX: 8,
          duration: 0.9,
          stagger: 0.14,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__highlights",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".experience__section-heading", {
          x: -35,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__highlights",
            start: "top 80%",
            once: true,
          },
        });

        /*
         * Documentation block.
         */
        gsap.from(".experience__documents-copy", {
          x: -45,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__documents",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".experience__document-button", {
          x: 45,
          opacity: 0,
          duration: 0.75,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__documents",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".experience__footer", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__footer",
            start: "top 92%",
            once: true,
          },
        });
      });

      /*
       * -------------------------------------------------------
       * MOBILE MOTION SYSTEM
       * -------------------------------------------------------
       */

      mm.add("(max-width: 700px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        });

        mobileTl
          .from(".experience__top", {
            y: 22,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          })
          .from(
            ".experience__hero-card",
            {
              y: 65,
              opacity: 0,
              scale: 0.97,
              duration: 0.9,
              ease: "power4.out",
            },
            "-=0.28",
          )
          .from(
            ".experience__role-line",
            {
              yPercent: 100,
              opacity: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.38",
          )
          .from(
            ".experience__company",
            {
              y: 22,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.35",
          );

        gsap.from(".experience__timeline", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience__timeline",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".experience__detail", {
          x: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__details",
            start: "top 86%",
            once: true,
          },
        });

        gsap.from(".experience__highlight", {
          x: 25,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__highlights",
            start: "top 86%",
            once: true,
          },
        });

        gsap.from(".experience__documents-copy", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__documents",
            start: "top 86%",
            once: true,
          },
        });

        gsap.from(".experience__document-button", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience__documents",
            start: "top 86%",
            once: true,
          },
        });
      });

      /*
       * -------------------------------------------------------
       * HERO CARD POINTER DEPTH
       * -------------------------------------------------------
       */

      if (heroCard && !window.matchMedia("(max-width: 700px)").matches) {
        const handlePointerMove = (event) => {
          const rect = heroCard.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const rotateY = (x / rect.width - 0.5) * 4;
          const rotateX = (y / rect.height - 0.5) * -4;

          gsap.to(heroCard, {
            rotateX,
            rotateY,
            transformPerspective: 1200,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handlePointerLeave = () => {
          gsap.to(heroCard, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        };

        heroCard.addEventListener("pointermove", handlePointerMove);
        heroCard.addEventListener("pointerleave", handlePointerLeave);

        return () => {
          heroCard.removeEventListener("pointermove", handlePointerMove);
          heroCard.removeEventListener("pointerleave", handlePointerLeave);
        };
      }

      return () => {
        mm.revert();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience__background" aria-hidden="true">
        <div className="experience__glow experience__glow--one" />
        <div className="experience__glow experience__glow--two" />
        <div className="experience__grid" />
        <div className="experience__scanline" />
      </div>

      <div className="experience__inner">
        <div className="experience__top">
          <span className="experience__label">03 — EXPERIENCE</span>

          <span className="experience__meta">PROFESSIONAL EXPERIENCE / 01</span>
        </div>

        <div ref={heroCardRef} className="experience__hero-card">
          <div className="experience__card-shine" aria-hidden="true" />

          <div className="experience__hero-top">
            <div className="experience__company-mark">CT</div>

            <div className="experience__verified">
              <span />
              VERIFIED EXPERIENCE
            </div>
          </div>

          <div className="experience__main">
            <div className="experience__role">
              <span className="experience__eyebrow">WEB DEVELOPMENT</span>

              <h2 id="experience-title">
                <span className="experience__role-line">WEB DEVELOPER</span>

                <span className="experience__role-line experience__role-line--outline">
                  INTERN
                </span>
              </h2>
            </div>

            <div className="experience__company">
              <span className="experience__company-index">01</span>

              <span className="experience__company-name">
                CODEC TECHNOLOGIES
              </span>

              <span className="experience__company-type">PVT. LTD.</span>
            </div>
          </div>

          <div className="experience__hero-bottom">
            <span>21 AUG 2025 — 21 SEP 2025</span>
            <span>01 MONTH</span>
          </div>

          <div className="experience__card-corner experience__card-corner--tl" />
          <div className="experience__card-corner experience__card-corner--br" />
        </div>

        <div className="experience__timeline" aria-hidden="true">
          <div className="experience__timeline-track" />
          <div className="experience__timeline-progress" />
          <div className="experience__timeline-node">
            <span />
          </div>
          <div className="experience__timeline-label">EXPERIENCE / 01</div>
        </div>

        <div className="experience__details">
          <div className="experience__detail">
            <span className="experience__detail-number">01</span>

            <div>
              <span className="experience__detail-label">ROLE</span>

              <strong>WEB DEVELOPER INTERN</strong>
            </div>
          </div>

          <div className="experience__detail">
            <span className="experience__detail-number">02</span>

            <div>
              <span className="experience__detail-label">ORGANIZATION</span>

              <strong>CODEC TECHNOLOGIES PVT. LTD.</strong>
            </div>
          </div>

          <div className="experience__detail">
            <span className="experience__detail-number">03</span>

            <div>
              <span className="experience__detail-label">DURATION</span>

              <strong>AUG 2025 — SEP 2025</strong>
            </div>
          </div>
        </div>

        <div className="experience__highlights">
          <div className="experience__section-heading">
            <span>INTERNSHIP</span>
            <strong>EXPERIENCE</strong>
          </div>

          <div className="experience__highlight">
            <span>01</span>

            <p>
              Completed a one-month professional
              <strong> Web Developer Internship</strong>
              with Codec Technologies Pvt. Ltd.
            </p>

            <i aria-hidden="true">↗</i>
          </div>

          <div className="experience__highlight">
            <span>02</span>

            <p>
              Gained practical exposure to a professional development
              environment and real-world web development workflow.
            </p>

            <i aria-hidden="true">↗</i>
          </div>

          <div className="experience__highlight">
            <span>03</span>

            <p>
              Demonstrated technical skills, problem-solving ability, initiative
              and dedication during the internship period.
            </p>

            <i aria-hidden="true">↗</i>
          </div>
        </div>

        <div className="experience__documents">
          <div className="experience__documents-copy">
            <span className="experience__documents-label">DOCUMENTATION</span>

            <h3>
              PROOF OF
              <span>EXPERIENCE.</span>
            </h3>

            <p>
              Internship certificate and letter of recommendation are available
              for verification.
            </p>
          </div>

          <div className="experience__document-actions">
            <a
              href="/documents/codec-internship-certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="experience__document-button"
            >
              <span>INTERNSHIP CERTIFICATE</span>
              <b>↗</b>
            </a>

            <a
              href="/documents/codec-letter-of-recommendation.pdf"
              target="_blank"
              rel="noreferrer"
              className="experience__document-button"
            >
              <span>LETTER OF RECOMMENDATION</span>
              <b>↗</b>
            </a>
          </div>
        </div>

        <div className="experience__footer">
          <span>EXPERIENCE / 01</span>
          <span>WEB DEVELOPMENT</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
