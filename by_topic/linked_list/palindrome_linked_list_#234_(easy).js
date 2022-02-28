// Brute force
// Time: O(n)
// Space: O(n)

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

// Optimised version:
// reverse the second half of the linked list
// Time: O(n)
// Space: O(1)

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

const reverseList = (head) => {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // fast.next cuz we use fast.next.next and that would return an error if fast.next is null
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let mid = reverseList(slow);
  let pointer = head;
  while (mid) {
    if (mid.val !== pointer.val) {
      return false;
    }
    mid = mid.next;
    pointer = pointer.next;
  }

  return true;
};
