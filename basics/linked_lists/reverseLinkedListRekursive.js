const LinkedList = require("./custom_linked_list");

const reverseLinkedListRecursive = (curr, prev = null) => {
  // https://www.youtube.com/watch?v=nCwjmaZ_6Kk

  // base case
  if (curr === null) {
    return prev;
  }

  const next = curr.next;
  curr.next = prev;

  return reverseLinkedListRecursive(next, curr);
};

const myList = new LinkedList(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

const printList = (head) => {
  const resultArr = [];

  let curr = head;
  while (curr !== null) {
    resultArr.push(curr.value);
    curr = curr.next;
  }
  return resultArr;
};

console.log("before list: ", printList(myList.head));

const reversedResult = printList(reverseLinkedListRecursive(myList.head));
console.log("reversed list: ", reversedResult);
