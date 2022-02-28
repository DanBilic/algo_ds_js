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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  let current = head;

  while (current) {
    if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
