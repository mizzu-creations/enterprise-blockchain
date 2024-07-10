export const renderHeader = (currentScroll) => {
  // header 노출
  if (currentScroll > 0.06) {
    gsap.to("#header", { yPercent: 100, duration: 0.4 });
  } else {
    gsap.to("#header", { yPercent: 0, duration: 0.4 });
  }
};
export const changeHeaderTheme = (currentScroll) => {
  // 색상 전환
  $("#header").removeClass("dark");
  if (
    (currentScroll >= 0.564 && currentScroll < 0.7) ||
    currentScroll >= 0.87
  ) {
    $("#header").addClass("dark");
  }
};
