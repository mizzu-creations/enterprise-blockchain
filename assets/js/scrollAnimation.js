// section intro
const scIntroAni = () => {
  const tlIntro = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-intro",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      onLeave: () => {
        $(".sc-intro .scroll-down").addClass("hide");
      },
      onEnterBack: () => {
        $(".sc-intro .scroll-down").removeClass("hide");
      },
    },
  });

  const fadeInOut = (selector) => {
    tlIntro.to(selector, { opacity: 1 }).to(selector, { opacity: 0 });
  };

  tlIntro.to(".sc-intro .intro-contents", { opacity: 1 }).to(
    ".sc-intro .desc01",
    {
      opacity: 1,
      onUpdate: function () {
        if (this.progress() >= 0.5) {
          gsap.to("#header", { yPercent: 100 });
        } else {
          gsap.to("#header", { yPercent: -100 });
        }
      },
    },
    "<"
  );

  fadeInOut(".sc-intro .desc01");
  fadeInOut(".sc-intro .desc02");
  fadeInOut(".sc-intro .desc03");

  tlIntro.to(".sc-intro .desc04", { opacity: 1 });
};
// section showcase
const scShowcaseAni = () => {
  const tlShowcase = gsap.timeline();
  tlShowcase
    .to(".showcase-contents", { opacity: 1 }, "a")
    .to(".showcase-desc.desc01 span", { opacity: 1 }, "a")
    .to(
      ".showcase-desc.desc01 span",
      {
        xPercent: (i, _, targets) => {
          if (i === 0) return 100;
          if (i === targets.length - 1) return -100;
          return 0;
        },
      },
      "b"
    )
    .to(".showcase-contents", { "background-color": "rgba(0, 0, 0, 0)" }, "b")
    .to(".showcase-desc.desc01 span", {
      opacity: 0,
    })
    .to(".sc-showcase .bg .thumb:nth-child(3)", { height: 0 })
    .to(".sc-showcase .bg .thumb:nth-child(2)", { height: 0 })
    .to(".showcase-contents", { "background-color": "rgba(0, 0, 0, 0.6)" }, "c")
    .to(
      ".showcase-desc.desc02",
      {
        opacity: 1,
        duration: 0.5,
      },
      "c"
    );

  ScrollTrigger.create({
    trigger: ".sc-showcase",
    start: "top top",
    end: "bottom bottom",
    animation: tlShowcase,
    scrub: true,
  });
};
// section proof
const scProofAni = () => {
  const tlWorth = gsap.timeline();
  tlWorth
    .set(".group-worth div", {
      x: (index) => {
        const divWidth = $(".group-worth div").outerWidth();
        return index === 0 ? divWidth : -divWidth;
      },
    })
    .to(".worth-title span", {
      x: (index, elem) => {
        const centerValue =
          $(".worth-title span:nth-child(2)").outerWidth() / 2;
        const currentValue = $(elem).outerWidth() / 2;
        const xValue = centerValue + currentValue;
        if (index === 0) return -xValue;
        if (index === 2) return xValue;
        return 0;
      },
    })
    .to(
      ".group-worth div",
      {
        x: 0,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".group-worth",
    start: "top 80%",
    end: "bottom 90%",
    animation: tlWorth,
    invalidateOnRefresh: true,
    scrub: 0,
  });
};
// section possible
const scPossibleAni = () => {
  const tlPossible = gsap.timeline();
  tlPossible.to(".sc-possible .possible-inner", {
    xPercent: -100,
    x: () => {
      return window.innerWidth;
    },
  });

  ScrollTrigger.create({
    trigger: ".sc-possible",
    start: "top top",
    end: "100% 100%",
    animation: tlPossible,
    invalidateOnRefresh: true,
    scrub: 0,
  });
};
// section gradation
const scGradationAni = () => {
  const tlMoveColorBar = gsap.timeline();
  tlMoveColorBar
    .set(".sc-gradation .blue", {
      xPercent: -50,
    })
    .set(".sc-gradation .green", {
      xPercent: 50,
    })
    .to(".sc-gradation .blue", {
      xPercent: 0,
    })
    .to(
      ".sc-gradation .green",
      {
        xPercent: 0,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-gradation",
    start: "top bottom",
    end: "bottom 80%",
    animation: tlMoveColorBar,
    scrub: true,
  });

  const tlBlurColorBar = gsap.timeline();
  tlBlurColorBar.to(".sc-gradation .desc-area", { opacity: 1 });

  ScrollTrigger.create({
    trigger: ".sc-gradation",
    start: "top 40%",
    end: "bottom 40%",
    animation: tlBlurColorBar,
    scrub: true,
    onEnter: function () {
      gsap.to(".sc-gradation .blur", { opacity: 1, duration: 0.3 });
    },
    onLeaveBack: function () {
      gsap.to(".sc-gradation .blur", { opacity: 0, duration: 0.3 });
    },
  });
};
// section safety
const scSafetyAni = () => {
  const tlSafety = gsap.timeline();

  tlSafety
    .to(
      ".safety-inner",
      {
        x: () => {
          return $(".sc-safety .safety-title").outerWidth() * -1;
        },
      },
      "a"
    )
    .to(
      ".sc-safety .card-item:nth-child(2)",
      { xPercent: -100, x: -40 },
      "a+=0.7"
    )
    .to(
      ".sc-safety .card-item:nth-child(3)",
      { xPercent: -200, x: -40 * 2 },
      "a+=0.7"
    )
    .to(
      ".sc-safety .card-item:nth-child(4)",
      { xPercent: -300, x: -40 * 3 },
      "a+=0.7"
    )
    .to(".sc-safety .unlock", { opacity: 0, duration: 0.5 }, "b-=0.6")
    .to(".sc-safety .lock", { opacity: 1, duration: 0.5 }, "b-=0.2")
    .to(".sc-safety .lock", { opacity: 0, duration: 0.5 }, "c")
    .to(".sc-safety .card-item:not(:last-child)", { autoAlpha: 0 }, "c");

  ScrollTrigger.create({
    trigger: ".sc-safety",
    start: "0% 0%",
    end: "100% 100%",
    animation: tlSafety,
    invalidateOnRefresh: true,
    scrub: 0,
  });
};
// section servic
const scServiceAni = () => {
  gsap.set(".sc-service .service-inner .sticky", {
    autoAlpha: 0,
  });

  gsap.to(".sc-service .flex .gradient-text", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".sc-service .service-inner",
      start: "top top",
      end: "35% bottom",
      scrub: 0,
    },
  });

  ScrollTrigger.create({
    trigger: ".sc-service .service-inner",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: () => {
      gsap.set(".sc-service .service-inner .sticky", {
        autoAlpha: 1,
      });
      gsap.set(".sc-safety", {
        autoAlpha: 0,
      });
    },
    onLeaveBack: () => {
      gsap.set(".sc-service .service-inner .sticky", {
        autoAlpha: 0,
      });
      gsap.set(".sc-safety", {
        autoAlpha: 1,
      });
    },
  });

  const tlServiceDataCard = gsap.timeline();
  tlServiceDataCard
    .to(".sc-service .review-list", {
      x: -20,
      duration: 0.4,
    })
    .to(
      ".sc-service .review-list",
      {
        x: 0,
        duration: 0.4,
      },
      "-=0.2"
    )
    .to(
      ".sc-service .review-item:nth-child(2)",
      { xPercent: -100, x: -40 },
      "<"
    )
    .to(
      ".sc-service .review-item:nth-child(3)",
      { xPercent: -200, x: -40 * 2 },
      "<"
    )
    .to(
      ".sc-service .review-item:nth-child(4)",
      { xPercent: -300, x: -40 * 3 },
      "<"
    )
    .to(".sc-service .review-item:not(:first-child)", { autoAlpha: 0 })
    .to(".sc-service .review-title", { opacity: 1, duration: 0.3 }, "-=0.5")
    .to(
      ".sc-service .review-item:first-child .glow",
      {
        opacity: 1,
        duration: 0.1,
      },
      "-=0.4"
    );

  ScrollTrigger.create({
    trigger: ".sc-service .group-review",
    start: "0% 0%",
    end: "100% 100%",
    animation: tlServiceDataCard,
    invalidateOnRefresh: true,
    scrub: 0,
    onEnter: () => {
      gsap.set(".sc-service .service-inner .sticky", {
        autoAlpha: 0,
      });
      gsap.set(".sc-service .review-item:nth-child(1)", {
        autoAlpha: 1,
      });
    },
    onLeaveBack: () => {
      gsap.set(".sc-service .service-inner .sticky", {
        autoAlpha: 1,
      });
      gsap.set(".sc-service .review-item:nth-child(1)", {
        autoAlpha: 0,
      });
    },
  });
};
// section trend
const scTrendAni = () => {
  const tlGlobal = gsap.timeline();
  tlGlobal
    .set(".group-global div", {
      x: (index) => {
        const divWidth = $(".group-global div").outerWidth();
        return index === 0 ? divWidth : -divWidth;
      },
    })
    .to(".global-title span", {
      x: (index, elem) => {
        const centerValue =
          $(".global-title span:nth-child(2)").outerWidth() / 2;
        const currentValue = $(elem).outerWidth() / 2;
        const xValue = centerValue + currentValue;
        if (index === 0) return -xValue;
        if (index === 2) return xValue;
        return 0;
      },
    })
    .to(
      ".group-global div",
      {
        x: 0,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".group-global",
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
    .to(".future-inner", {
      x: () => {
        return -window.innerWidth / 2;
      },
    })
    .to(
      ".future-bottom",
      {
        opacity: 1,
        duration: 0.1,
      },
      "<"
    )
    .to(".future-bottom", { opacity: 0, duration: 0.1 });

  ScrollTrigger.create({
    trigger: ".sc-future",
    start: "top top",
    end: "bottom bottom",
    animation: tlFuture,
    invalidateOnRefresh: true,
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
    .to(".sc-creator .title-wrap", { opacity: 1 })
    .to(".sc-creator .scroll-down", { opacity: 1 })
    .to(".sc-creator .title-wrap", { opacity: 0 })
    .to(".sc-creator .scroll-down", { opacity: 0 }, "<");

  ScrollTrigger.create({
    trigger: ".sc-creator .group-top",
    start: "top top",
    end: "bottom bottom",
    animation: tlCreatorIntro,
    scrub: true,
  });

  ScrollTrigger.create({
    trigger: ".sc-creator .group-bottom",
    start: "top top",
    end: "bottom bottom",
    animation: gsap.to(".sc-creator .bottom-inner", {
      x: () => {
        return -window.innerWidth + window.innerWidth / 3.3;
      },
    }),
    invalidateOnRefresh: true,
    scrub: true,
  });
};
// section participation
const scParticipationAni = () => {
  const joinMarquee = gsap.to(".join-wrapper", 7, {
    xPercent: -20,
    repeat: -1,
    ease: "none",
    paused: true,
  });

  const tlParti = gsap.timeline();
  tlParti.from(".group-join", {
    yPercent: 100,
  });

  ScrollTrigger.create({
    trigger: "#footer",
    start: "top 100%",
    end: "bottom bottom",
    // animation: tlParti,
    onEnter: () => {
      gsap.to(".group-join", {
        yPercent: 0,
        onComplete: () => {
          joinMarquee.play();
        },
      });
    },
    onLeaveBack: () => {
      gsap.to(".group-join", {
        yPercent: 100,
        onComplete: () => {
          joinMarquee.pause();
        },
      });
    },
  });
};

export const sectionScrollAni = () => {
  scIntroAni();
  scShowcaseAni();
  scProofAni();
  scPossibleAni();
  scGradationAni();
  scSafetyAni();
  scServiceAni();
  scTrendAni();
  scFutureAni();
  scCreatorAni();
  scParticipationAni();
};
