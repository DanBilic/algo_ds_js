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

function removeDuplicates(head) {
  let cache = {};
  cache[head.data] = true;

  let current = head;
  let next = null;

  if (head === null || head.next === null) {
    return head;
  }

  while (current.next !== null) {
    if (cache[current.next.data]) {
      next = current.next.next;
      current.next = next;
    } else {
      cache[current.next.data] = true;
      current = current.next;
    }
  }
  return head;
}

let llist = new SinglyLinkedList();

for (let i = 0; i < llistCount; i++) {
  llist.insertNode(llistItem);
}
