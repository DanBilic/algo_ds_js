class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      // 1st solution
      //   const prevTop = this.top;
      //   this.top = node;
      //   this.top.next = prevTop;

      // 2nd solution
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    return this;
  }
  pop() {
    let nextTop = this.top.next;
    this.top.next = undefined;
    this.top = nextTop;
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

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
// myStack.pop();

console.log(myStack.peek());

console.log("Stack: ", printList(myStack.top));
