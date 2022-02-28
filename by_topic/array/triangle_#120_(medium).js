/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const table = [];
  for (r of triangle) table.push(new Array(r.length).fill(0));

  table[0] = triangle[0];

  for (let row = 1; row < triangle.length; row++) {
    for (let column = 0; column < triangle[row].length; column++) {
      if (column === 0) {
        table[row][column] = table[row - 1][column] + triangle[row][column];
      } else if (column === table[row].length - 1) {
        table[row][column] =
          table[row - 1][table[row - 1].length - 1] + triangle[row][column];
      } else {
        table[row][column] =
          Math.min(table[row - 1][column], table[row - 1][column - 1]) +
          triangle[row][column];
      }
    }
  }

  return Math.min(...table[table.length - 1]);
};
