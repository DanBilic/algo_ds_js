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

// Optimised solution:
// Time: O(n)
// Space: O(1)

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  let curr = dummy.next;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }

  return dummy.next;
};
