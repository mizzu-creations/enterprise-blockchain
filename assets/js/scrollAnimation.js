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
