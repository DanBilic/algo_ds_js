// O(n x n) -> optimal solution

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    const num = sortedNums[i];
    if (num === sortedNums[i - 1]) continue;
    const target = num * -1;
    console.log("target", target);
    result.push(...twoSum(i + 1, target, sortedNums));
    console.log("result", result);
  }

  return result;
};

const twoSum = (j, target, numsArr) => {
  let k = numsArr.length - 1;
  const result = [];

  while (j < k) {
    const leftVal = numsArr[j];
    const rightVal = numsArr[k];

    if (leftVal + rightVal > target) {
      k--;
    } else if (leftVal + rightVal < target) {
      j++;
    } else {
      result.push([target * -1, rightVal, leftVal]);
      while (j < k && numsArr[j] === numsArr[j + 1]) j++;
      while (j < k && numsArr[k] === numsArr[k - 1]) k++;
      j++;
      k--;
    }
  }

  return result;
};
