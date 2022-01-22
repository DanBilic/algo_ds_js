// Runtime O(n)
// Space O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    const n2 = nums[i + 1];
    const n3 = nums[i + 2];

    if (n2 > n3 && n2 > n1) {
      return i + 1;
    }
  }
};

// optimized solution:
// Runtime O(log n)
// Space O(1)

// binary search -> only works beacuse: nums[i] != nums[i + 1] for all valid i.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let leftP = 0;
  let rightP = nums.length - 1;

  while (leftP < rightP) {
    const mid = Math.floor((leftP + rightP) / 2);

    if (nums[mid] > nums[mid + 1]) {
      rightP = mid;
    } else {
      leftP = mid + 1;
    }
  }

  return leftP;
};
