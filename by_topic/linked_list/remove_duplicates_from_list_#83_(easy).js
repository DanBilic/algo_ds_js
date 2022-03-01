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
  let current = head;

  while (current) {
    if (current.next && current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// wenn liste nicht sortiert ist braucht man eine hashmap
var deleteDuplicates = function (head) {
  const hmap = {};

  let current = head;

  while (current) {
    hmap[current.val] = true;
    if (current.next && hmap[current.next.val]) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
