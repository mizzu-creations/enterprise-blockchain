export const scIntroAnimation = () => {
  const tlIntro = gsap.timeline();

  const fadeInOut = (selector, duration = 0.5) => {
    tlIntro
      .to(selector, { opacity: 1, duration })
      .to(selector, { opacity: 0, duration });
  };

  tlIntro
    .to(".sc-intro .intro-contents", { opacity: 1, duration: 0.5 })
    .to(".sc-intro .desc01", { opacity: 1, duration: 0.5 }, "<");

  fadeInOut(".sc-intro .desc01");
  fadeInOut(".sc-intro .desc02");
  fadeInOut(".sc-intro .desc03");

  tlIntro
    .to(".sc-intro .desc04", { opacity: 1, duration: 0.5 })
    .to(".sc-intro .intro-contents", { position: "sticky", duration: 1 })
    .to(".sc-intro .scroll-down", { opacity: 0, duration: 0.2 }, "-=0.8");

  ScrollTrigger.create({
    trigger: ".sc-intro",
    start: "7% center",
    end: "bottom center",
    animation: tlIntro,
    scrub: true,
  });
};
export const scShowcaseAnimation = () => {
  const tlShowcase = gsap.timeline();
  tlShowcase
    .to(".showcase-contents", { opacity: 1, duration: 0.5 })
    .to(".showcase-desc.desc01 span", { opacity: 1, duration: 0.5 }, "<")
    .to(
      ".showcase-desc.desc01 span",
      {
        xPercent: (i, _, targets) => {
          if (i === 0) return 100;
          if (i === targets.length - 1) return -100;
          return 0;
        },
        duration: 0.2,
      },
      "-=0.2"
    )
    .to(".showcase-contents", { opacity: 0, duration: 0.5 }, "<")
    .to(
      ".showcase-desc.desc01 span",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2"
    )
    .to(
      ".sc-showcase .bg img:nth-child(3)",
      { yPercent: -100, duration: 1 },
      "<"
    )
    .to(".sc-showcase .bg img:nth-child(2)", { yPercent: -100, duration: 1 })
    .to(".showcase-contents", { opacity: 1, duration: 0.5 })
    .to(
      ".showcase-desc.desc02",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-showcase",
    start: "top top",
    end: "bottom bottom",
    animation: tlShowcase,
    pin: true,
    pinSpacing: false,
    scrub: true,
  });
};
