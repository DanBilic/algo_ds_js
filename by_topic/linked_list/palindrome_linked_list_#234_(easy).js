// Brute force

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const nums = [];
  let cur = head;

  while (cur) {
    nums.push(cur.val);
    cur = cur.next;
  }
  console.log(nums);

  // copy nums cuz reverse() works in place and returns the same array
  const reversed = [...nums].reverse().join("");
  const joined = nums.join("");

  if (joined === reversed) {
    return true;
  } else {
    return false;
  }
};
