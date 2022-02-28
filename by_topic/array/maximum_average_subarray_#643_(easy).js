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

// clean version with same complexity:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let soFar = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    soFar += nums[windowEnd];

    if (windowEnd - windowStart === k - 1) {
      let avg = soFar / k;
      max = Math.max(avg, max);
      soFar -= nums[windowStart];
      windowStart++;
    }
  }

  return max;
};
