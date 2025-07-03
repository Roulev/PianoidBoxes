// src/utils/pack.js
export function packIntoBoxes(matrices) {
  // each matrixs is separated into its own box
  return matrices.map(matrix => [matrix]);
}
