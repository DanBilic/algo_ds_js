// Time: O(n x log n)
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }

  nums.sort((a, b) => a - b);

  return nums;
};

// optimized version
// Time: O(n)
// Space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const resultArr = new Array(nums.length).fill(0);

  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    const leftVal = Math.pow(nums[left], 2);
    const rightVal = Math.pow(nums[right], 2);

    if (rightVal >= leftVal) {
      resultArr[resultIdx] = rightVal;
      right--;
    } else {
      resultArr[resultIdx] = leftVal;
      left++;
    }

    resultIdx--;
  }

  return resultArr;
};
