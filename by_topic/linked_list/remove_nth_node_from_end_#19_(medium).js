// Optimised version:
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  let tail = head;
  let rn = head;
  let count = 0;

  while (count < n) {
    count++;
    tail = tail.next;
  }

  while (tail) {
    tail = tail.next;
    prev = prev.next;
    rn = rn.next;
  }

  prev.next = rn.next;
  return dummy.next;
};
