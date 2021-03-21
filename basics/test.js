const reverseArray = (nums) => {
  let tmp;
  let len = nums.length - 1;
  for (let i = 0; i <= len / 2; i++) {
    tmp = nums[len - i];
    nums[len - i] = nums[i];
    nums[i] = tmp;
  }
  return nums;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
