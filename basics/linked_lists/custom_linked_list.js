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
  reverse() {
    // https://www.youtube.com/watch?v=UCv-EmtvPe4
    let head = this.head;

    // current head will be new tail after reverse
    this.tail = head;

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

  printList() {
    let listArr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listArr;
  }
}

let myList = new LinkedList(1);

myList.append(2);
myList.append(2);
myList.append(2);
myList.append(2);
myList.append(6);

// myList.insert(3, 300);

// console.log("linked_list: ", myList.printList());

const removeDuplicates = (list) => {
  const cache = {};
  cache[list.head.value] = list.head.value;

  let currentNode = list.head;
  let result = new LinkedList(list.head.value);
  let headResult = result.head;
  let tail = headResult;

  while (currentNode !== null) {
    if (cache[currentNode.value] === undefined) {
      cache[currentNode.value] = currentNode.value;
      let node = {
        value: currentNode.value,
        next: null,
      };
      tail.next = node;
      tail = node;
    }
    currentNode = currentNode.next;
  }

  console.log("cache", cache);
  console.log("head", result.printList());
  console.log("see", list.printList());
  return null;
};

removeDuplicates(myList);

module.exports = LinkedList;
