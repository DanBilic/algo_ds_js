// Time: O(n)
// Space: O(1) -> array modified in-place

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastZeroIndex] = nums[i];
      lastZeroIndex++;
    }
  }

  for (let i = lastZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
