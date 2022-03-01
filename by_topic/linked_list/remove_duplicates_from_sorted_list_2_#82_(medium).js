// Optimised solution:
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let dummy = new ListNode(-Infinity, head);
  let prev = dummy;
  let cur = prev.next;
  let next = cur.next;

  while (next) {
    if (cur && cur.val === next.val) {
      while (next && cur.val === next.val) {
        next = next.next;
      }

      prev.next = next;
      cur = next;
      next = next ? next.next : null;
    } else {
      prev = prev.next;
      cur = cur.next;
      next = next.next;
    }
  }

  return dummy.next;
};
