/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head && head.next === null) {
    return null;
  }

  let fast = head;
  let slow = head;
  let pointer = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast !== slow) return null;

  while (pointer !== slow) {
    slow = slow.next;
    pointer = pointer.next;
  }

  return slow;
};
