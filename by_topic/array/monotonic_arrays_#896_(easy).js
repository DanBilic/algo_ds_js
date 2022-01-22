/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increasing = undefined;

  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    const n2 = nums[i + 1];

    if (increasing === undefined) {
      if (n2 > n1) {
        increasing = true;
      } else if (n2 === n1) {
        continue;
      } else {
        increasing = false;
      }
    }

    if ((n2 > n1 && !increasing) || (n2 < n1 && increasing)) {
      return false;
    } else if (n2 === n1) {
      continue;
    }
  }

  return true;
};
