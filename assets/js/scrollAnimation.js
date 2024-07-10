// section intro 스크롤 애니메이션
const scIntroAnimation = () => {
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
// section showcase 스크롤 애니메이션
const scShowcaseAnimation = () => {
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
        duration: 0.5,
      },
      "-=0.2"
    )
    .to(".showcase-contents", { opacity: 0, duration: 0.5 }, "-=0.2")
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
      { yPercent: -100, duration: 0.75 },
      "-=0.2"
    )
    .to(".sc-showcase .bg img:nth-child(2)", { yPercent: -100, duration: 0.75 })
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
// section worth 스크롤 애니메이션
const scWorthAnimation = () => {
  const tlWorth = gsap.timeline();
  tlWorth
    .to(
      ".worth-title span",
      {
        xPercent: (i) => {
          if (i === 0) return -170;
          if (i === 2) return 134;
          return 0;
        },
        duration: 0.2,
      },
      "-=0.2"
    )
    .to(
      ".sc-worth div",
      {
        xPercent: (i) => {
          if (i === 0) return -100;
          if (i === 1) return 100;
        },
        duration: 0.2,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-worth",
    start: "top 80%",
    end: "bottom 90%",
    animation: tlWorth,
    scrub: true,
  });
};
// section global 스크롤 애니메이션
const scGlobalAnimation = () => {
  const tlGlobal = gsap.timeline();
  tlGlobal
    .to(
      ".global-title span",
      {
        xPercent: (i) => {
          if (i === 0) return -115;
          if (i === 2) return 125;
          return 0;
        },
        duration: 0.2,
      },
      "-=0.2"
    )
    .to(
      ".sc-global div",
      {
        xPercent: (i) => {
          if (i === 0) return -100;
          if (i === 1) return 100;
        },
        duration: 0.2,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-global",
    start: "top 80%",
    end: "bottom 90%",
    animation: tlGlobal,
    scrub: true,
  });
};
// section talent 스크롤 애니메이션
const scTalentAnimation = () => {
  const tlTalent = gsap.timeline();
  tlTalent.to(".talent-contents", { yPercent: -100, duration: 10 });

  ScrollTrigger.create({
    trigger: ".sc-talent",
    start: "top top",
    end: "bottom+=200 bottom",
    animation: tlTalent,
    pin: true,
    pinSpacing: false,
    scrub: true,
  });
};
// section possible 가로 스크롤 애니메이션
const scPossibleAnimation = () => {
  const tlPossible = gsap.timeline();
  tlPossible.to(".possible-inner", {
    xPercent: -57.5,
    duration: 10,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".sc-possible",
    start: "top top",
    end: "+=2000",
    animation: tlPossible,
    pin: true,
    pinSpacing: false,
    markers: true,
    scrub: true,
  });
};

export const sectionScrollAni = () => {
  scIntroAnimation();
  scShowcaseAnimation();
  scWorthAnimation();
  scGlobalAnimation();
  scTalentAnimation();
  scPossibleAnimation();
};
