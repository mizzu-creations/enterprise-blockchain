export const renderHeader = (currentScroll) => {
  // header 노출
  if (currentScroll > 0.018) {
    gsap.to("#header", { yPercent: 100, duration: 0.4 });
  } else {
    gsap.to("#header", { yPercent: 0, duration: 0.4 });
  }
};
export const changeHeaderTheme = (currentScroll) => {
  // 색상 전환
  $("#header").removeClass("dark");
  if (
    (currentScroll >= 0.255 && currentScroll < 0.41) ||
    currentScroll >= 0.76
  ) {
    $("#header").addClass("dark");
  }
};
