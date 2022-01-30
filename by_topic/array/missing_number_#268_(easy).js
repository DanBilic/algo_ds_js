// Time: O(n x logn) -> due to sort
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === count) {
      count++;
    } else {
      return count;
    }
  }

  return count;
};

// Time: O(n)
// Space: O(n)
// This solution trades space for a time boost
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const kv = {};
  for (let i = 0; i < nums.length; i++) {
    kv[nums[i]] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!kv[i]) {
      return i;
    }
  }

  // return length if input is [0, 1] -> then missing number is 2 and the 2nd for loops does not retrun
  return nums.length;
};

// Optimal solution
// Time: O(n)
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  gSum = (nums.length * (nums.length + 1)) / 2;
  arraySum = nums.reduce((current, total) => current + total, 0);

  return gSum - arraySum;
};
