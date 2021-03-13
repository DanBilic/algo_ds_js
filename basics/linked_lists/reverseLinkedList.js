const LinkedList = require("./custom_linked_list");

const reverseLinkedList = (head) => {
  let prev = null;
  let next = null;

  while (head !== null) {
    // save next node
    next = head.next;

    // set head.next to prev node -> removes connection to next node
    head.next = prev;

    // prev node pointer is set to current node
    prev = head;

    // current node is set to next
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
