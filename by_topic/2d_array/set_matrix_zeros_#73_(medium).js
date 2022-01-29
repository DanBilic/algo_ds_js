// Time: O(n x n)
// Space: O(n)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeros = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zeros.push([r, c]);
      }
    }
  }

  for (let zero of zeros) {
    for (let r = 0; r < matrix.length; r++) {
      const c = zero[1];
      matrix[r][c] = 0;
    }
    for (let c = 0; c < matrix[0].length; c++) {
      const r = zero[0];
      matrix[r][c] = 0;
    }
  }
};
