/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sliding window
// Brute force:
// Time: O(n)
// Space: O(1)

var findMaxAverage = function (nums, k) {
  let sum = -Infinity;
  let max = -Infinity;

  let sub = 0;
  for (let i = 0; i < k; i++) {
    sub = nums[i] + sub;
  }
  sum = sub;
  max = sum;

  for (let i = k; i < nums.length; i++) {
    let window = sum + nums[i];
    window = window - nums[i - k];
    sum = window;

    if (sum > max) {
      max = sum;
    }
  }

  return max / k;
};
