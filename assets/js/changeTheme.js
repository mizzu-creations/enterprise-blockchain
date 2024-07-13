// header color 전환
const changeHeaderTheme = () => {
  const sections = $('[data-header-dark="true"]');
  sections.each((_, element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "0% 0%",
      end: "100% 50%",
      toggleClass: { targets: "#header", className: "dark" },
    });
  });
};
// background color 전환
const changeBgTheme = () => {
  ScrollTrigger.create({
    trigger: `[data-bg-dark="true"]`,
    start: "0% 50%",
    end: "100% 50%",
    toggleClass: {
      targets: "body",
      className: "dark",
    },
  });
};

export const changeTheme = () => {
  changeHeaderTheme();
  changeBgTheme();
};
