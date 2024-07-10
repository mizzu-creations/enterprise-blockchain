export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
export const getCustomComputedStyle = (property) => {
  return getComputedStyle(document.body).getPropertyValue(property);
};
export const updateBodyBackgroundColor = (currentScroll) => {
  if (currentScroll >= 0.7 && currentScroll < 0.82) {
    $("body").css("background-color", "#000");
  } else {
    $("body").css("background-color", "#fff");
  }
};
