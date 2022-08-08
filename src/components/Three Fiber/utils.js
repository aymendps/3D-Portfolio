export const deg2rad = (degrees) => degrees * (Math.PI / 180);

export function getRandomFloat(min, max, decimals = 5) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}
