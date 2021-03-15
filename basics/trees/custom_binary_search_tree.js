class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.root;

    if (this.root === null) {
      this.root = node;
      return this;
    }

    while (current !== null) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  lookup() {}
  remove() {}
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(2);

console.log(tree);
console.log("left", tree.root.right.left);
