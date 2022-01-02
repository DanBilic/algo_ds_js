// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

const numsArr = [1, 2, 3];

const permutation = (inputArr) => {
  const result = [];

  const dfs = (i, nums) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    // recursive case
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, inputArr);
  return result;
};

console.log("LEETCODE: #46 - Permutation");
console.log("input: ", numsArr);
console.log("permutations of input: ", permutation(numsArr));
