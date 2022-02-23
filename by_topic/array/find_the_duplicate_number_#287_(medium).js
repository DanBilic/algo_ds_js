// Brute force:
// using dictionary
// Time O(n)
// Space O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      return nums[i];
    } else {
      dict[nums[i]] = 1;
    }
  }
};

// Improved version:
// using rabbit and tortoise
// Hint: See the array as a graph
// -> works cuz: Given an array of integers nums containing n + 1
// integers where each integer is in the range [1, n] inclusive
// Time O(n)
// Space O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }
      return pointer;
    }
  }
};
