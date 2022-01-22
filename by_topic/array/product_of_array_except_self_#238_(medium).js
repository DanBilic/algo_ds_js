/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const nullCount = nums.filter((num) => num === 0);
  console.log("nullCount", nullCount);
  if (nullCount.length >= 2) return new Array(nums.length).fill(0);
  if (nullCount.length === 1) {
    const numsWithOutNull = nums.filter((num) => num !== 0);
    const product = numsWithOutNull.reduce(
      (total, current) => total * current,
      1
    );
    console.log("product", product);
    console.log("nums.indexOf(0)", nums.indexOf(0));
    const arr = new Array(nums.length).fill(0);
    arr[nums.indexOf(0)] = product;
    return arr;
  }

  const product = nums.reduce((total, current) => total * current, 1);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(product / nums[i]);
  }

  return result;
};
