const setCSSVariable = (variable, value) => {
  $("body").css(variable, value);
};
const getScrollPercentage = () => {
  const scrollTop = $(window).scrollTop();
  const documentHeight = $(document).height();
  const windowHeight = $(window).height();
  const scrollPercentage = scrollTop / (documentHeight - windowHeight);
  return parseFloat(scrollPercentage.toFixed(4));
};
const getViewportDimensions = () => {
  const vw = $(window).width();
  const vh = $(window).height();
  return { vw, vh };
};

// vw, vh, scrollPercent 초기 설정
export const initializeGlobalValues = () => {
  const { vw, vh } = getViewportDimensions();
  const scrollPercentage = getScrollPercentage();

  setCSSVariable("--vw", `${vw}`);
  setCSSVariable("--vh", `${vh}`);
  setCSSVariable("--scroll-percentage", `${scrollPercentage}`);

  $("html").attr("data-vw", `${vw}`);
  $("html").attr("data-vh", `${vh}`);
  $("html").attr("data-scroll-percentage", `${scrollPercentage}`);
};
// vw, vh 값 리사이즈 업데이트
export const handleResizeGlobalValues = () => {
  const { vw, vh } = getViewportDimensions();
  setCSSVariable("--vw", `${vw}`);
  setCSSVariable("--vh", `${vh}`);

  $("html").attr("data-vw", `${vw}`);
  $("html").attr("data-vh", `${vh}`);
};
// scrollPercentage 스크롤 업데이트
export const handleScrollGlobalValues = () => {
  const scrollPercentage = getScrollPercentage();
  setCSSVariable("--scroll-percentage", `${scrollPercentage}`);
  $("html").attr("data-scroll-percentage", `${scrollPercentage}`);
};
