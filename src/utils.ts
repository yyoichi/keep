export const generateId = () =>
  Math.random()
    .toString(36)
    .substring(2, 12) +
  Math.random()
    .toString(36)
    .substring(2, 12);
