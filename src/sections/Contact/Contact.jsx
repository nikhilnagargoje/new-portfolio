import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    number: "01",
    label: "PHONE",
    value: "+91 70202 40144",
    href: "tel:+917020240144",
    accent: "#25d366",
    icon: "☎",
  },
  {
    number: "02",
    label: "WHATSAPP",
    value: "Chat on WhatsApp",
    href: "https://wa.me/917020240144",
    accent: "#25d366",
    icon: "WA",
  },
  {
    number: "03",
    label: "EMAIL",
    value: "nikhilnagargoje8502@gmail.com",
    href: "mailto:nikhilnagargoje8502@gmail.com",
    accent: "#ff6b9d",
    icon: "@",
  },
  {
    number: "04",
    label: "LINKEDIN",
    value: "Professional Profile",
    href: "https://linkedin.com/in/nikhil-nagargoje",
    accent: "#0a66c2",
    icon: "in",
  },
  {
    number: "05",
    label: "GITHUB",
    value: "Projects & Code",
    href: "https://github.com/nikhilnagargoje",
    accent: "#ffffff",
    icon: "⌘",
  },
  {
    number: "06",
    label: "INSTAGRAM",
    value: "@_the_nikhil_nagargoje_1331_",
    href: "https://www.instagram.com/_the_nikhil_nagargoje_1331_/",
    accent: "#e1306c",
    icon: "IG",
  },
  {
    number: "07",
    label: "HASHNODE",
    value: "Technical Blog & Articles",
    href: "https://hashnode.com/@nikhilnagargoje",
    accent: "#2962ff",
    icon: "H",
  },
];

const focusAreas = [
  "FRONT-END DEVELOPMENT",
  "REACT / JAVASCRIPT",
  "RESPONSIVE WEB",
  "REAL-WORLD PROJECTS",
];

const footerNavigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#work" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

const footerSocials = [
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/nikhil-nagargoje",
  },
  {
    label: "GITHUB",
    href: "https://github.com/nikhilnagargoje",
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/_the_nikhil_nagargoje_1331_/",
  },
  {
    label: "WHATSAPP",
    href: "https://wa.me/917020240144",
  },
  {
    label: "HASHNODE",
    href: "https://hashnode.com/@nikhilnagargoje",
  },
];

function Contact() {
  const sectionRef = useRef(null);

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
            ".contact__top",
            ".contact__heading",
            ".contact__signal",
            ".contact__panel",
            ".contact__link",
            ".contact__focus-item",
            ".contact__closing",
            ".contact__footer-main",
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      gsap.from(".contact__top", {
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

      gsap.from(".contact__heading", {
        y: 65,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact__heading",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".contact__signal", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__signal",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".contact__panel", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact__panel",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".contact__focus-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__focus",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".contact__link", {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__links",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".contact__closing", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__closing",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".contact__footer-main", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__footer-main",
          start: "top 90%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleBackToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="contact" id="contact">
      <div className="contact__ambient">
        <span className="contact__orb contact__orb--one" />
        <span className="contact__orb contact__orb--two" />
        <span className="contact__orb contact__orb--three" />
      </div>

      <div className="contact__grid-bg" />

      <div className="contact__inner">
        {/* TOP */}
        <div className="contact__top">
          <span className="contact__label">09 — CONTACT</span>

          <span className="contact__meta">CONNECT / COLLABORATE / CREATE</span>
        </div>

        {/* HEADING */}
        <div className="contact__heading">
          <div>
            <p className="contact__kicker">LET&apos;S CONNECT</p>

            <h2>
              HAVE A<span>FRONT-END IDEA?</span>
            </h2>
          </div>

          <p>
            Looking for a Front-End Developer for a project, collaboration or
            opportunity? I&apos;m open to meaningful conversations and building
            useful digital experiences.
          </p>
        </div>

        {/* AVAILABILITY */}
        <div className="contact__signal">
          <div>
            <span className="contact__signal-dot" />
            AVAILABLE FOR FRONT-END OPPORTUNITIES
          </div>

          <span className="contact__signal-line" />

          <span>BASED IN BEED / PUNE</span>

          <span className="contact__signal-line" />

          <span>OPEN TO PUNE / HYDERABAD</span>
        </div>

        {/* MAIN CONTACT PANEL */}
        <div className="contact__panel">
          <div className="contact__panel-glow" />

          {/* LEFT */}
          <div className="contact__panel-copy">
            <span className="contact__mini-label">
              FRONT-END DEVELOPER × REACT
            </span>

            <h3>
              LET&apos;S TURN
              <strong>IDEAS INTO EXPERIENCES.</strong>
            </h3>

            <p>
              I build responsive, practical and polished web experiences using
              JavaScript, React and modern frontend workflows, with attention to
              usability, performance and interaction quality.
            </p>

            <div className="contact__focus">
              {focusAreas.map((item, index) => (
                <div className="contact__focus-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            {/* BLOG CALLOUT */}
            <a
              href="https://hashnode.com/@nikhilnagargoje"
              target="_blank"
              rel="noreferrer"
              className="contact__blog"
            >
              <div className="contact__blog-icon">H</div>

              <div className="contact__blog-copy">
                <span>TECHNICAL WRITING</span>
                <strong>Read my articles on Hashnode</strong>
              </div>

              <span className="contact__blog-arrow">↗</span>
            </a>
          </div>

          {/* CONTACT CARDS */}
          <div className="contact__links">
            {contactLinks.map((link) => {
              const isPhone = link.href.startsWith("tel:");

              const isEmail = link.href.startsWith("mailto:");

              return (
                <a
                  className="contact__link"
                  href={link.href}
                  target={isPhone || isEmail ? undefined : "_blank"}
                  rel={isPhone || isEmail ? undefined : "noreferrer"}
                  key={link.number}
                  style={{
                    "--contact-accent": link.accent,
                  }}
                >
                  <div className="contact__link-top">
                    <span>{link.number}</span>

                    <b>↗</b>
                  </div>

                  <div className="contact__link-icon">{link.icon}</div>

                  <div className="contact__link-copy">
                    <span>{link.label}</span>

                    <strong>{link.value}</strong>
                  </div>

                  <div className="contact__link-line">
                    <span />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CLOSING */}
        <div className="contact__closing">
          <div className="contact__closing-left">
            <span>THANK YOU FOR VISITING.</span>

            <strong>NIKHIL NAGARGOJE</strong>
          </div>

          <div className="contact__closing-center">
            BUILD
            <span>→</span>
            LEARN
            <span>→</span>
            SHARE
          </div>

          <div className="contact__closing-right">
            <span>FRONT-END DEVELOPER</span>
            <span>2026</span>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="contact__footer-main">
          <div className="contact__footer-grid">
            {/* BRAND */}
            <div className="contact__footer-brand">
              <a
                href="#home"
                className="contact__footer-logo"
                onClick={handleBackToTop}
              >
                <span>N</span>
              </a>

              <div>
                <h4>NIKHIL NAGARGOJE</h4>

                <p>
                  FRONT-END DEVELOPER
                  <span> × </span>
                  REACT
                </p>
              </div>

              <p className="contact__footer-description">
                Building responsive digital experiences with React, JavaScript
                and a strong focus on clean UI, usability and real-world
                products.
              </p>

              <div className="contact__footer-status">
                <span />
                AVAILABLE FOR FRONT-END OPPORTUNITIES
              </div>
            </div>

            {/* EXPLORE */}
            <div className="contact__footer-column">
              <span className="contact__footer-heading">EXPLORE</span>

              <div className="contact__footer-nav">
                {footerNavigation.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CONNECT */}
            <div className="contact__footer-column">
              <span className="contact__footer-heading">CONNECT</span>

              <div className="contact__footer-socials">
                {footerSocials.map((item, index) => (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={item.label}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <strong>{item.label}</strong>

                    <b>↗</b>
                  </a>
                ))}
              </div>

              <a
                className="contact__footer-email"
                href="mailto:nikhilnagargoje8502@gmail.com"
              >
                <span>EMAIL</span>

                <strong>nikhilnagargoje8502@gmail.com</strong>
              </a>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="contact__footer-bottom">
            <div>
              <span>© 2026 NIKHIL NAGARGOJE</span>

              <span className="contact__footer-divider">/</span>

              <span>ALL RIGHTS RESERVED</span>
            </div>

            <div className="contact__footer-center">
              <span>CODE</span>
              <i />
              <span>INTERFACE</span>
              <i />
              <span>EXPERIENCE</span>
            </div>

            <a
              href="#home"
              className="contact__back-top"
              onClick={handleBackToTop}
            >
              BACK TO TOP
              <span>↑</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
