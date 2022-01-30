// Version with build in functions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// Optimized version without build in functions
// Time: O(n)
// Space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverseSubArray = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  const kSteps = k % nums.length;

  nums.reverse();

  reverseSubArray(nums, kSteps, nums.length - 1);
  reverseSubArray(nums, 0, kSteps - 1);
};
