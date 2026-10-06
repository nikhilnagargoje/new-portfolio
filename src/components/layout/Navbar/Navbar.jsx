import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./Navbar.css";

const navItems = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
  {
    label: "EDUCATION",
    href: "#education",
  },
  {
    label: "SKILLS",
    href: "#skills",
  },
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "CERTIFICATIONS",
    href: "#certifications",
  },
  {
    label: "RESUME",
    href: "#resume",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

function Navbar() {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /*
    ==========================================
    INITIAL NAVBAR ENTRANCE
  ==========================================
  */

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbar,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power4.out",
        }
      );
    }, navbar);

    return () => ctx.revert();
  }, []);

  /*
    ==========================================
    SCROLL DIRECTION + NAVBAR VISIBILITY
  ==========================================
  */

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    lastScrollY.current = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? (currentScrollY / maxScroll) * 100
          : 0;

      setScrollProgress(
        Math.min(100, Math.max(0, progress))
      );

      /*
        Glass navbar state
      */
      setScrolled(currentScrollY > 35);

      /*
        Always visible near top
      */
      if (currentScrollY <= 30) {
        gsap.to(navbar, {
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          overwrite: true,
        });

        lastScrollY.current = currentScrollY;
        ticking.current = false;

        return;
      }

      /*
        Ignore very small movements
      */
      const difference =
        currentScrollY - lastScrollY.current;

      if (Math.abs(difference) < 8) {
        ticking.current = false;
        return;
      }

      /*
        Scroll DOWN → hide navbar
      */
      if (difference > 0) {
        if (!menuOpen) {
          gsap.to(navbar, {
            y: -110,
            duration: 0.42,
            ease: "power3.out",
            overwrite: true,
          });
        }
      }

      /*
        Scroll UP → show navbar
      */
      if (difference < 0) {
        gsap.to(navbar, {
          y: 0,
          duration: 0.42,
          ease: "power3.out",
          overwrite: true,
        });
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateScroll
      );
    };
  }, [menuOpen]);

  /*
    ==========================================
    MOBILE MENU BODY LOCK
    ==========================================

    When menu opens:
    - Save current scroll position
    - Lock the background page
    - Keep menu independently scrollable

    When menu closes:
    - Restore exact previous position
  ==========================================
  */

  useEffect(() => {
    if (!menuOpen) {
      document.body.classList.remove(
        "nav-menu-open"
      );

      document.documentElement.classList.remove(
        "nav-html-lock"
      );

      return;
    }

    const scrollY = window.scrollY;

    document.body.dataset.navScrollY =
      String(scrollY);

    document.body.classList.add(
      "nav-menu-open"
    );

    document.documentElement.classList.add(
      "nav-html-lock"
    );

    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.classList.remove(
        "nav-menu-open"
      );

      document.documentElement.classList.remove(
        "nav-html-lock"
      );

      const savedScrollY = Number(
        document.body.dataset.navScrollY || 0
      );

      document.body.style.top = "";

      delete document.body.dataset.navScrollY;

      window.scrollTo({
        top: savedScrollY,
        behavior: "auto",
      });
    };
  }, [menuOpen]);

  /*
    ==========================================
    SMOOTH SECTION NAVIGATION
  ==========================================
  */

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) {
      setMenuOpen(false);
      return;
    }

    /*
      Close menu first.
      Body scroll lock cleanup will restore
      the page position.
    */
    setMenuOpen(false);

    const navbarHeight =
      navbarRef.current?.offsetHeight || 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      15;

    /*
      Wait one frame so mobile menu closes
      before starting page scroll.
    */
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  };

  /*
    ==========================================
    MOBILE MENU TOGGLE
  ==========================================
  */

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  return (
    <>
      {/* ======================================
          NAVBAR
      ====================================== */}

      <header
        ref={navbarRef}
        className={`navbar ${
          scrolled ? "navbar--scrolled" : ""
        } ${
          menuOpen
            ? "navbar--menu-open"
            : ""
        }`}
      >
        <div className="navbar__inner">
          {/* BRAND */}

          <a
            href="#home"
            className="navbar__brand"
            onClick={(event) =>
              handleNavigation(
                event,
                "#home"
              )
            }
            aria-label="Nikhil Nagargoje — Home"
          >
            <span className="navbar__brand-mark">
              N.
            </span>

            <span className="navbar__brand-line" />
          </a>

          {/* DESKTOP NAV */}

          <nav
            className="navbar__nav"
            aria-label="Primary navigation"
          >
            {navItems.map((item, index) => (
              <a
                href={item.href}
                className="navbar__link"
                key={item.label}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.href
                  )
                }
              >
                <span className="navbar__link-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="navbar__link-label">
                  {item.label}
                </span>

                <span className="navbar__link-arrow">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}

          <a
            href="#contact"
            className="navbar__cta"
            onClick={(event) =>
              handleNavigation(
                event,
                "#contact"
              )
            }
          >
            <span>LET&apos;S TALK</span>
            <b>↗</b>
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className={`navbar__menu-button ${
              menuOpen
                ? "navbar__menu-button--active"
                : ""
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* SCROLL PROGRESS */}

        <div className="navbar__progress">
          <span
            style={{
              transform: `scaleX(${
                scrollProgress / 100
              })`,
            }}
          />
        </div>
      </header>

      {/* ======================================
          MOBILE MENU
      ====================================== */}

      <div
        id="mobile-navigation"
        className={`navbar__mobile-menu ${
          menuOpen
            ? "navbar__mobile-menu--open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-menu-inner">
          <div className="navbar__mobile-menu-top">
            <span>MENU / NAVIGATION</span>
            <span>2026</span>
          </div>

          <nav
            className="navbar__mobile-nav"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={item.label}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.href
                  )
                }
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>
                  {item.label}
                </strong>

                <b>↗</b>
              </a>
            ))}
          </nav>

          <div className="navbar__mobile-footer">
            <span>
              FRONT-END DEVELOPER
            </span>

            <span>×</span>

            <span>
              REACT / JAVASCRIPT
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;