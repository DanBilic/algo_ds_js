const LinkedList = require("./custom_linked_list");

const reverseLinkedList = (head) => {
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

const myList = new LinkedList(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

console.log(reverseLinkedList(myList.head));
