// leetcode reverse linked list 2 - #92

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverse = (head, count, right) => {
  let next = null;
  let prev = null;
  let counter = count;
  let tail = head;

  if (right === 1 || count === right) {
    return head;
  }

  while (head) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
    counter++;
    if (counter === right) {
      tail.next = head.next;
      head.next = prev;
      prev = head;
      return prev;
    }
  }

  //return prev
};

var reverseBetween = function (head, left, right) {
  let count = 0;
  let current = head;
  let next = null;
  let prev = null;

  while (current) {
    count++;
    if (left === 1) {
      return reverse(current, count, right);
    } else if (count === left - 1) {
      current.next = reverse(current.next, count + 1, right);
    }

    current = current.next;
  }

  return head;
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
head.next.next.next.next = new ListNode(5);

console.log("Reverse MxN LinkedList:...");
console.log("input: ", printList(head));
console.log("result: ", printList(reverseBetween(head, 2, 4)));
