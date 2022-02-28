// Brute force:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let x = 0;
  let y = 0;
  let sum = 0;
  let carry = 0;
  let dummyHead = new ListNode(0);
  let node = dummyHead;

  while (l1 || l2) {
    x = l1 ? l1.val : 0;
    y = l2 ? l2.val : 0;

    sum = carry + x + y;

    carry = parseInt(sum / 10);

    node.next = new ListNode(sum % 10);
    node = node.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry > 0) {
    node.next = new ListNode(carry);
  }

  return dummyHead.next;
};
