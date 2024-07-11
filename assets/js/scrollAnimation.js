// section intro
const scIntroAni = () => {
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
// section showcase
const scShowcaseAni = () => {
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
// section worth
const scWorthAni = () => {
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
// section talent
const scTalentAni = () => {
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
// section possible
const scPossibleAni = () => {
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
    scrub: true,
  });
};
// section gradation
const scGradationAni = () => {
  const tlGradation = gsap.timeline();
  tlGradation
    .set(".sc-gradation .blue", {
      xPercent: -50,
    })
    .set(".sc-gradation .green", {
      xPercent: 50,
    })
    .to(".sc-gradation .blue", {
      xPercent: 0,
      duration: 0.5,
    })
    .to(
      ".sc-gradation .green",
      {
        xPercent: 0,
        duration: 0.5,
      },
      "<"
    )
    .to(".sc-gradation .desc-area", {
      opacity: 1,
      duration: 1,
    })
    .to(
      ".sc-gradation .blur",
      {
        opacity: 1,
        duration: 1,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-gradation",
    start: "top bottom",
    end: "+=1400",
    animation: tlGradation,
    scrub: true,
  });
};
// section safety
const scSafetyAni = () => {
  const tlSafety = gsap.timeline();

  tlSafety
    .to(".safety-inner", {
      x: -757,
      duration: 1,
    })
    .to(".sc-safety .card-item:nth-child(1)", {
      x: 200,
      duration: 1,
    })
    .to(
      ".sc-safety .card-item:nth-child(2)",
      {
        x: -240,
        duration: 1,
      },
      "<"
    )
    .to(
      ".sc-safety .card-item:nth-child(3)",
      {
        x: -680,
        duration: 1,
      },
      "<"
    )
    .to(
      ".sc-safety .card-item:nth-child(4)",
      {
        x: -1120,
        duration: 1,
      },
      "<"
    )
    .to(
      ".sc-safety .unlock",
      {
        opacity: 0,
        duration: 1,
      },
      "-=2"
    )
    .to(
      ".sc-safety .lock",
      {
        opacity: 1,
        duration: 1,
      },
      "-=1"
    )
    .to(".sc-safety .card-list", {
      opacity: 0,
      duration: 0.5,
    });

  ScrollTrigger.create({
    trigger: ".sc-safety",
    start: "top top",
    end: "+=2000",
    animation: tlSafety,
    pin: true,
    pinSpacing: true,
    scrub: true,
  });
};
// section servic
const scServiceAni = () => {
  const tlServiceDataCard = gsap.timeline();

  tlServiceDataCard
    .to(".sc-service .flex .card-lock", {
      opacity: 1,
      duration: 0.5,
    })
    .to(
      ".sc-service .flex .gradient-text",
      {
        opacity: 1,
        duration: 0.2,
      },
      "-=0.2"
    );

  ScrollTrigger.create({
    trigger: ".sc-service .flex",
    start: "-=1800",
    end: "5% bottom",
    animation: tlServiceDataCard,
    pin: false,
    pinSpacing: true,
    scrub: true,
  });

  const tlServiceScrollReview = gsap.timeline();
  tlServiceScrollReview
    .to(".sc-service .group-review", {
      x: -120,
      duration: 1,
    })
    .to(
      ".group-review .review-item:nth-child(1)",
      {
        visibility: "visible",
        duration: 0.5,
      },
      "<"
    )
    .to(
      ".sc-service .flex .card-lock",
      { visibility: "hidden", duration: 0.5 },
      "<"
    )
    .to(".group-review .review-item:nth-child(1)", {
      x: 120,
      duration: 1,
    })
    .to(
      ".group-review .review-item:nth-child(2)",
      {
        x: -320,
        duration: 1,
      },
      "<"
    )
    .to(
      ".group-review .review-item:nth-child(3)",
      {
        x: -760,
        duration: 1,
      },
      "<"
    )
    .to(
      ".group-review .review-item:nth-child(4)",
      {
        x: -1200,
        duration: 1,
      },
      "<"
    )
    .to(".group-review .review-item:nth-child(1) .glow", {
      opacity: 1,
      duration: 1,
    })
    .to(
      ".group-review .review-title",
      {
        opacity: 1,
        duration: 1,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-service .group-review",
    start: "top top",
    end: "+=2000",
    animation: tlServiceScrollReview,
    pin: true,
    pinSpacing: true,
    scrub: true,
  });
};
// section global
const scGlobalAni = () => {
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
// section future
const scFutureAni = () => {
  const tlFuture = gsap.timeline();
  tlFuture
    .to(".future-inner", { xPercent: -30, duration: 1 })
    .to(
      ".future-bottom",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    )
    .to(".future-bottom", { opacity: 0, duration: 1 });

  ScrollTrigger.create({
    trigger: ".sc-future .future-inner",
    start: "top top",
    end: "+=1500",
    animation: tlFuture,
    pin: true,
    pinSpacing: true,
    scrub: true,
    onUpdate: (self) => {
      if (self.progress > 0.5) {
        $(".arrow-title").text("미래금융");
      } else {
        $(".arrow-title").text("전통금융");
      }
    },
  });
};
// section creator
const scCreatorAni = () => {
  const tlCreatorIntro = gsap.timeline();
  tlCreatorIntro
    .to(".sc-creator .title-wrap", { opacity: 1, duration: 1 })
    .to(".sc-creator .scroll-down", { opacity: 1, duration: 1 })
    .to(".sc-creator .title-wrap", { opacity: 0, duration: 1 })
    .to(".sc-creator .scroll-down", { opacity: 0, duration: 1 }, "<");

  ScrollTrigger.create({
    trigger: ".sc-creator .group-top",
    start: "top top",
    end: "+=2000",
    animation: tlCreatorIntro,
    pin: true,
    pinSpacing: true,
    scrub: true,
  });

  const tlCreatorCardScroll = gsap.timeline();
  tlCreatorCardScroll.to(".sc-creator .bottom-inner", {
    xPercent: -30,
    duration: 1,
  });

  ScrollTrigger.create({
    trigger: ".sc-creator .bottom-inner",
    start: "top top",
    end: "+=1000",
    animation: tlCreatorCardScroll,
    pin: true,
    pinSpacing: true,
    scrub: true,
  });
};
// section participation > 클래스 전환으로 변경하기
const scParticipationAni = () => {
  const tlParti = gsap.timeline();
  tlParti.to(".group-join", {
    yPercent: -100,
    duration: 1,
  });

  ScrollTrigger.create({
    trigger: ".sc-participation .group-join",
    start: "top 90%",
    end: "bottom bottom",
    animation: tlParti,
    scrub: true,
  });
};

export const sectionScrollAni = () => {
  scIntroAni();
  scShowcaseAni();
  scWorthAni();
  scTalentAni();
  scPossibleAni();
  scGradationAni();
  scSafetyAni();
  scServiceAni();
  scGlobalAni();
  scFutureAni();
  scCreatorAni();
  scParticipationAni();
};
