/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const previousArr = result[i - 1];
    const nextArr = [];
    for (let j = 0; j < previousArr.length; j++) {
      if (j === 0) {
        nextArr.push(previousArr[j]);
      } else {
        const nextEle = previousArr[j - 1] + previousArr[j];
        nextArr.push(nextEle);
        if (j === previousArr.length - 1) {
          nextArr.push(previousArr[j]);
        }
      }
    }
    result.push(nextArr);
  }

  return result;
};

// Optimized version:
// dynamic programming concept: tabulation

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const currRow = [];
    const prevRow = triangle[i - 1];

    currRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      const nextVal = prevRow[j] + prevRow[j - 1];
      currRow.push(nextVal);
    }
    currRow.push(1);

    triangle.push(currRow);
  }

  return triangle;
};
