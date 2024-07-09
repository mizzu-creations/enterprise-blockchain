export const getCustomComputedStyle = (property) => {
  return getComputedStyle(document.body).getPropertyValue(property);
};
