export const chooseRandomValueFromArray = <T>(values: T[]) => {
  return values[Math.floor(Math.random() * values.length)];
};
