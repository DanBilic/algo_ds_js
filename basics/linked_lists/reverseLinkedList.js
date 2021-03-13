class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = {
      value: value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;

    // function chaining .append(5).append(8) if return this
    return this;
  }

  insert(index, value) {
    let currentNode = this.head;

    let node = {
      value,
      next: null,
    };

    // find node before insert
    for (let i = 1; i < index - 1; i++) {
      console.log("run");
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;

    return this;
  }

  prepend(value) {
    const node = {
      value: value,
      next: null,
    };

    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  printList() {
    let listArr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listArr;
  }
  reverse() {
    // https://www.youtube.com/watch?v=UCv-EmtvPe4
    let head = this.head;
    let prev = null;
    let next = null;

    while (head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    this.head = prev;
    return this;
  }
}

let myList = new LinkedList(1);

myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

myList.reverse();

console.log("linked_list: ", myList.printList());
