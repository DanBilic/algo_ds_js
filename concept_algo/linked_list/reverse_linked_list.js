//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let next = null;

  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const printList = (head) => {
  const listArray = [];
  while (head) {
    listArray.push(head.val);
    head = head.next;
  }
  return listArray;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Reverse LinkedList:...");
console.log("input: ", printList(head));
console.log("result: ", printList(reverseList(head)));
