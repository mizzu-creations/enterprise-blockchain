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
// scrollPercent 초기 설정
export const initializeGlobalValues = () => {
  const scrollPercentage = getScrollPercentage();
  setCSSVariable("--scroll-percentage", scrollPercentage);
  $("html").attr("data-scroll-percentage", scrollPercentage);
};
