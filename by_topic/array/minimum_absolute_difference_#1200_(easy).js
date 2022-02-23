/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let min = Infinity;
  const result = [];
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    const num1 = sortedArr[i];
    const num2 = sortedArr[i + 1];
    const diff = Math.abs(num2 - num1);

    if (diff < min) {
      min = diff;
    }
  }

  for (let i = 0; i < sortedArr.length; i++) {
    const num1 = sortedArr[i];
    const num2 = sortedArr[i + 1];
    const diff = Math.abs(num2 - num1);

    if (diff === min) {
      result.push([num1, num2]);
    }
  }
  return result;
};
