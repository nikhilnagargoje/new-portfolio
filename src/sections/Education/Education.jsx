import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Education.css";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    id: "01",
    type: "UNDERGRADUATE",
    degree: "B.Tech",
    field: "Computer Engineering",
    institution: "Aditya Engineering College",
    location: "Beed, Maharashtra",
    duration: "2021 — 2025",
    resultLabel: "CGPA",
    result: "7.0",
    featured: true,
    icon: "⌘",
  },
  {
    id: "02",
    type: "BACHELOR'S DEGREE",
    degree: "Bachelor of Arts",
    field: "",
    institution: "YCMOU",
    location: "Maharashtra",
    duration: "2021 — 2024",
    resultLabel: "PERCENTAGE",
    result: "65%",
    featured: false,
    icon: "◈",
  },
  {
    id: "03",
    type: "HIGHER SECONDARY",
    degree: "12th",
    field: "Higher Secondary Education",
    institution: "Maharashtra State Board",
    location: "Maharashtra",
    duration: "2020",
    resultLabel: "PERCENTAGE",
    result: "70%",
    featured: false,
    icon: "△",
  },
];

const academicHighlights = [
  {
    number: "01",
    label: "PRIMARY DEGREE",
    value: "COMPUTER ENGINEERING",
  },
  {
    number: "02",
    label: "ACADEMIC RANGE",
    value: "2020 — 2025",
  },
  {
    number: "03",
    label: "CURRENT DIRECTION",
    value: "FRONT-END DEVELOPMENT",
  },
];

function Education() {
  const sectionRef = useRef(null);
  const featuredCardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const featuredCard = featuredCardRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [
            ".education__top",
            ".education__heading-line",
            ".education__intro",
            ".education__featured",
            ".education__timeline-heading",
            ".education__timeline-item",
            ".education__highlight",
            ".education__foundation",
            ".education__bottom",
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const mm = gsap.matchMedia();

      /*
       * ======================================================
       * DESKTOP / TABLET
       * ======================================================
       */

      mm.add("(min-width: 701px)", () => {
        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        introTimeline
          .from(".education__top", {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
          })
          .from(
            ".education__heading-line",
            {
              yPercent: 110,
              opacity: 0,
              duration: 0.9,
              stagger: 0.11,
              ease: "power4.out",
            },
            "-=0.3",
          )
          .from(
            ".education__kicker",
            {
              x: -25,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.55",
          )
          .from(
            ".education__intro",
            {
              x: 35,
              opacity: 0,
              duration: 0.75,
              ease: "power4.out",
            },
            "-=0.55",
          );

        /*
         * Background parallax.
         */
        gsap.to(".education__orb--one", {
          yPercent: 25,
          xPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".education__orb--two", {
          yPercent: -20,
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        /*
         * Featured degree card.
         */
        gsap.from(".education__featured", {
          y: 90,
          opacity: 0,
          scale: 0.965,
          rotateX: 5,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".education__featured-index, .education__featured-status", {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".education__degree-mark", {
          scale: 0.5,
          opacity: 0,
          rotate: -25,
          duration: 0.85,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".education__degree-content > *", {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.11,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 76%",
            once: true,
          },
        });

        gsap.from(".education__result", {
          x: 30,
          opacity: 0,
          duration: 0.75,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 76%",
            once: true,
          },
        });

        gsap.from(".education__featured-bottom > div", {
          y: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 70%",
            once: true,
          },
        });

        /*
         * Timeline heading.
         */
        gsap.from(".education__timeline-heading", {
          y: 35,
          opacity: 0,
          duration: 0.75,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__timeline-heading",
            start: "top 85%",
            once: true,
          },
        });

        /*
         * Timeline progress.
         */
        gsap.fromTo(
          ".education__timeline-track span",
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".education__timeline",
              start: "top 75%",
              end: "bottom 70%",
              scrub: 1,
            },
          },
        );

        /*
         * Timeline nodes activate progressively.
         */
        gsap.from(".education__timeline-marker", {
          scale: 0.4,
          opacity: 0,
          duration: 0.65,
          stagger: 0.18,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".education__timeline",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".education__timeline-card", {
          x: 65,
          opacity: 0,
          rotateY: -5,
          duration: 0.8,
          stagger: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__timeline",
            start: "top 78%",
            once: true,
          },
        });

        /*
         * Highlights.
         */
        gsap.from(".education__highlight", {
          y: 45,
          opacity: 0,
          scale: 0.96,
          duration: 0.75,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__highlights",
            start: "top 82%",
            once: true,
          },
        });

        /*
         * Foundation.
         */
        gsap.from(".education__foundation-label", {
          x: -40,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__foundation",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".education__foundation-copy", {
          x: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__foundation",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".education__foundation-flow span", {
          y: 15,
          opacity: 0,
          duration: 0.45,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__foundation-flow",
            start: "top 88%",
            once: true,
          },
        });

        gsap.from(".education__foundation-flow i", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.45,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__foundation-flow",
            start: "top 88%",
            once: true,
          },
        });

        gsap.from(".education__bottom", {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__bottom",
            start: "top 92%",
            once: true,
          },
        });
      });

      /*
       * ======================================================
       * MOBILE
       * ======================================================
       */

      mm.add("(max-width: 700px)", () => {
        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        });

        mobileTimeline
          .from(".education__top", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .from(
            ".education__heading-line",
            {
              yPercent: 100,
              opacity: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.25",
          )
          .from(
            ".education__intro",
            {
              y: 25,
              opacity: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.3",
          );

        gsap.from(".education__featured", {
          y: 60,
          opacity: 0,
          scale: 0.97,
          duration: 0.85,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 87%",
            once: true,
          },
        });

        gsap.from(".education__degree-mark", {
          scale: 0.6,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: ".education__featured",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".education__timeline-item", {
          x: 35,
          opacity: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__timeline",
            start: "top 84%",
            once: true,
          },
        });

        gsap.from(".education__timeline-marker", {
          scale: 0.5,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: ".education__timeline",
            start: "top 84%",
            once: true,
          },
        });

        gsap.from(".education__highlight", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__highlights",
            start: "top 87%",
            once: true,
          },
        });

        gsap.from(".education__foundation", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education__foundation",
            start: "top 87%",
            once: true,
          },
        });
      });

      /*
       * ======================================================
       * FEATURED CARD POINTER INTERACTION
       * ======================================================
       */

      if (featuredCard && window.matchMedia("(min-width: 901px)").matches) {
        const handlePointerMove = (event) => {
          const rect = featuredCard.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const percentX = x / rect.width;
          const percentY = y / rect.height;

          const rotateY = (percentX - 0.5) * 5;
          const rotateX = (percentY - 0.5) * -5;

          featuredCard.style.setProperty("--mouse-x", `${x}px`);

          featuredCard.style.setProperty("--mouse-y", `${y}px`);

          gsap.to(featuredCard, {
            rotateX,
            rotateY,
            y: -5,
            transformPerspective: 1400,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handlePointerLeave = () => {
          gsap.to(featuredCard, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.65,
            ease: "power4.out",
          });
        };

        featuredCard.addEventListener("pointermove", handlePointerMove);

        featuredCard.addEventListener("pointerleave", handlePointerLeave);

        return () => {
          featuredCard.removeEventListener("pointermove", handlePointerMove);

          featuredCard.removeEventListener("pointerleave", handlePointerLeave);
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
      className="education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="education__background" aria-hidden="true">
        <div className="education__grid" />

        <div className="education__orb education__orb--one" />
        <div className="education__orb education__orb--two" />

        <div className="education__vertical-line education__vertical-line--left" />
        <div className="education__vertical-line education__vertical-line--right" />

        <div className="education__glow" />
      </div>

      <div className="education__inner">
        <div className="education__top">
          <span className="education__label">04 — EDUCATION</span>

          <span className="education__meta">
            ACADEMIC JOURNEY / COMPUTER ENGINEERING
          </span>
        </div>

        <div className="education__header">
          <div className="education__heading-wrap">
            <p className="education__kicker">ACADEMIC FOUNDATION</p>

            <h2 id="education-title" className="education__heading">
              <span className="education__heading-line">BUILT ON</span>

              <span className="education__heading-line">KNOWLEDGE.</span>

              <strong className="education__heading-line">
                DRIVEN BY CURIOSITY.
              </strong>
            </h2>
          </div>

          <div className="education__intro">
            <span className="education__intro-line" />

            <p>
              A multidisciplinary academic journey combining computer
              engineering with a broader academic foundation — shaping the way I
              approach technology, problem-solving and digital products.
            </p>

            <div className="education__intro-meta">
              <span>03 QUALIFICATIONS</span>
              <span>2020 — 2025</span>
            </div>
          </div>
        </div>

        {/* PRIMARY DEGREE */}

        <article ref={featuredCardRef} className="education__featured">
          <div className="education__cursor-light" aria-hidden="true" />

          <div className="education__featured-top">
            <div className="education__featured-index">
              <span>01</span>
              <small>PRIMARY DEGREE</small>
            </div>

            <div className="education__featured-status">
              <span />
              COMPLETED
            </div>
          </div>

          <div className="education__featured-main">
            <div className="education__degree-mark">
              <span className="education__degree-ring" />
              <span className="education__degree-symbol">⌘</span>
            </div>

            <div className="education__degree-content">
              <span className="education__eyebrow">BACHELOR OF TECHNOLOGY</span>

              <h3>
                B.Tech
                <span>Computer Engineering</span>
              </h3>

              <div className="education__institution">
                <strong>Aditya Engineering College</strong>

                <span>Beed, Maharashtra</span>
              </div>
            </div>

            <div className="education__result">
              <span>CGPA</span>
              <strong>7.0</strong>
              <small>OUT OF 10</small>
            </div>
          </div>

          <div className="education__featured-bottom">
            <div>
              <span>PERIOD</span>
              <strong>2021 — 2025</strong>
            </div>

            <div>
              <span>DISCIPLINE</span>
              <strong>COMPUTER ENGINEERING</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>GRADUATED</strong>
            </div>
          </div>

          <div className="education__featured-line" aria-hidden="true">
            <span />
          </div>
        </article>

        {/* TIMELINE */}

        <div className="education__timeline-heading">
          <div>
            <span className="education__eyebrow">EDUCATIONAL TIMELINE</span>

            <strong>ACADEMIC JOURNEY</strong>
          </div>

          <span className="education__timeline-count">03</span>
        </div>

        <div className="education__timeline">
          <div className="education__timeline-track">
            <span />
          </div>

          {education.map((item) => (
            <article
              className={`education__timeline-item ${
                item.featured ? "education__timeline-item--featured" : ""
              }`}
              key={item.id}
            >
              <div className="education__timeline-marker">
                <span>{item.id}</span>
              </div>

              <div className="education__timeline-card">
                <div className="education__timeline-top">
                  <span>{item.type}</span>
                  <span>{item.duration}</span>
                </div>

                <div className="education__timeline-body">
                  <div className="education__timeline-icon">{item.icon}</div>

                  <div className="education__timeline-info">
                    <h3>{item.degree}</h3>

                    {item.field && <strong>{item.field}</strong>}

                    <p>{item.institution}</p>

                    <small>{item.location}</small>
                  </div>

                  <div className="education__timeline-result">
                    <span>{item.resultLabel}</span>
                    <strong>{item.result}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* HIGHLIGHTS */}

        <div className="education__highlights">
          {academicHighlights.map((item) => (
            <div className="education__highlight" key={item.number}>
              <span className="education__highlight-number">{item.number}</span>

              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>

              <span className="education__highlight-arrow">↗</span>
            </div>
          ))}
        </div>

        {/* FOUNDATION */}

        <div className="education__foundation">
          <div className="education__foundation-label">
            <span className="education__eyebrow">ACADEMIC FOUNDATION</span>

            <strong>
              FROM ENGINEERING
              <span>TO DIGITAL PRODUCTS.</span>
            </strong>
          </div>

          <div className="education__foundation-copy">
            <p>
              Computer Engineering provides the technical foundation behind my
              approach to software, interfaces and digital products.
            </p>

            <div className="education__foundation-flow">
              <span>ENGINEERING</span>
              <i />
              <span>TECHNOLOGY</span>
              <i />
              <span>INTERFACE</span>
              <i />
              <span>PRODUCT</span>
            </div>
          </div>
        </div>

        <div className="education__bottom">
          <span>LEARN</span>
          <i />
          <span>BUILD</span>
          <i />
          <span>IMPROVE</span>
          <i />
          <span>GROW</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
