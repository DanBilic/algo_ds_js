// Time: O(n)
// Space: O(1)

// Given an integer array nums of length n
// where all the integers of nums are in the range [1, n] and
// each integer appears once or twice, return an array of all the integers that appears twice.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    const val = nums[idx];

    if (val < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[idx] = -nums[idx];
    }
  }

  return result;
};
