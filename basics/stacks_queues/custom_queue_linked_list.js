class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length == 0) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.first === null) {
      return null;
    }
    if (this.first === this.last) {
      this.last === null;
    }
    const newFirst = this.first.next;
    this.first.next = null;
    this.first = newFirst;
    this.length--;
    return this;
  }
}

const printList = (head) => {
  const resultArr = [];

  let curr = head;
  while (curr !== null) {
    resultArr.push(curr.value);
    curr = curr.next;
  }
  return resultArr;
};

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.enqueue(1);

console.log(myQueue.peek());

console.log("Queue: ", printList(myQueue.first));
