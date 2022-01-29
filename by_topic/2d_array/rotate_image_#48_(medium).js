// Time: O(n)
// Space: O(1) -> no additional data structure created

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  transpose(matrix);
  reflect(matrix);
};

const transpose = (matrix) => {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
};

const reflect = (matrix) => {
  for (const row of matrix) {
    row.reverse();
  }
};
