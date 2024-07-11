export const renderHeader = (currentScroll) => {
  // header 노출
  if (currentScroll > 0.024) {
    gsap.to("#header", { yPercent: 100, duration: 0.4 });
  } else {
    gsap.to("#header", { yPercent: 0, duration: 0.4 });
  }
};
export const changeHeaderTheme = (currentScroll) => {
  // 색상 전환
  $("#header").removeClass("dark");
  if (
    (currentScroll >= 0.378 && currentScroll < 0.4938) ||
    currentScroll >= 0.7785
  ) {
    $("#header").addClass("dark");
  }
};
