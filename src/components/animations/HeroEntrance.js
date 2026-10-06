import gsap from "gsap";

export function runHeroEntrance(root) {
  if (!root) return () => {};

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const ctx = gsap.context(() => {
    const isMobile = window.matchMedia("(max-width: 760px)").matches;

    /*
     * Reduced motion:
     * Everything remains visible without entrance animation.
     */
    if (reduceMotion) {
      gsap.set(
        [
          ".hero__status",
          ".hero__eyebrow",
          ".hero__title-line",
          ".hero__description",
          ".hero__actions",
          ".hero__tech-strip",
          ".hero__visual",
          ".hero__floating-card",
          ".hero__footer",
        ],
        {
          clearProps: "all",
        },
      );

      return;
    }

    /*
     * Initial states
     */
    gsap.set(
      [
        ".hero__status",
        ".hero__eyebrow",
        ".hero__description",
        ".hero__actions",
        ".hero__tech-strip",
        ".hero__footer",
      ],
      {
        opacity: 0,
      },
    );

    gsap.set(".hero__title-line", {
      opacity: 0,
      yPercent: isMobile ? 120 : 110,
    });

    gsap.set(".hero__visual", {
      opacity: 0,
      scale: isMobile ? 0.88 : 0.9,
      y: isMobile ? 45 : 0,
    });

    gsap.set(".hero__floating-card", {
      opacity: 0,
      scale: 0.82,
      y: 20,
    });

    /*
     * Main entrance timeline
     */
    const timeline = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    /*
     * MOBILE
     */
    if (isMobile) {
      timeline
        .to(".hero__status", {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })

        .to(
          ".hero__eyebrow",
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          "-=0.42",
        )

        .to(
          ".hero__title-line",
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.95,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.3",
        )

        .to(
          ".hero__description",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.42",
        )

        .to(
          ".hero__actions",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.38",
        )

        .to(
          ".hero__tech-strip",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.32",
        )

        .to(
          ".hero__visual",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 1.15,
            ease: "power3.out",
          },
          "-=0.2",
        )

        .to(
          ".hero__floating-card",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.14,
            ease: "back.out(1.4)",
          },
          "-=0.65",
        )

        .to(
          ".hero__footer",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.25",
        );
    } else {

    /*
     * DESKTOP
     */
      timeline
        .to(".hero__status", {
          opacity: 1,
          y: 0,
          duration: 0.7,
        })

        .to(
          ".hero__eyebrow",
          {
            opacity: 1,
            y: 0,
            duration: 0.68,
          },
          "-=0.38",
        )

        .to(
          ".hero__title-line",
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.3",
        )

        .to(
          ".hero__description",
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
          },
          "-=0.42",
        )

        .to(
          ".hero__actions",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.42",
        )

        .to(
          ".hero__tech-strip",
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
          },
          "-=0.32",
        )

        .to(
          ".hero__visual",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.75",
        )

        .to(
          ".hero__floating-card",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.35)",
          },
          "-=0.65",
        )

        .to(
          ".hero__footer",
          {
            opacity: 1,
            y: 0,
            duration: 0.58,
          },
          "-=0.42",
        );
    }
  }, root);

  /*
   * Cleanup
   */
  return () => {
    ctx.revert();
  };
}
