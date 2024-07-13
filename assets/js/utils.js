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
