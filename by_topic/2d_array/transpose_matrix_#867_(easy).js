// Time: O(m x n) -> O(n x n)
// Space: O(n)

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const width = matrix.length;
  const height = matrix[0].length;

  const resultMatrix = [];
  for (let i = 0; i < height; i++) {
    resultMatrix.push(new Array(width).fill(0));
  }

  console.log("resultMatrix", resultMatrix);

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      resultMatrix[c][r] = matrix[r][c];
    }
  }

  return resultMatrix;
};
