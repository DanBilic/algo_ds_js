const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function getNode(head, positionFromTail) {
  console.log("position from", positionFromTail);
  let current = head;
  let arr = [];
  let result = 0;

  while (current != null) {
    arr.push(current.data);
    current = current.next;
  }
  console.log("arr", arr);

  for (let i = 0; i <= positionFromTail; i++) {
    result = arr.pop();
  }
  return result;
}

// O(1) space solution
// RUNNING pointer technique
function getNodeRunningPointer(head, positionFromTail) {
  // O(n) time, O(1) space complexity

  let runner = head;
  let result = head;

  //move runner positionFromTail into the list
  for (let i = 0; i <= positionFromTail; i++) {
    runner = runner.next;
  }

  while (runner !== null) {
    runner = runner.next;
    result = result.next;
  }

  return result.data;
}

let llist = new SinglyLinkedList();

for (let i = 0; i < llistCount; i++) {
  llist.insertNode(llistItem);
}
