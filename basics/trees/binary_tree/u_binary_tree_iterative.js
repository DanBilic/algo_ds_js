class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  inOrder(func = console.log) {
    if (this.root === null) {
      return;
    }

    let stack = [];
    let current = this.root;

    while (current !== null || stack.length > 0) {
      // reach most left node of curr node
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      // current must be null at this point
      current = stack.pop();

      func(current);

      // left subtree is visited now visit right subtree
      current = current.right;
    }
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) {
          console.log("Value already exists");
          return this;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }

        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(5).insert(10).insert(6).insert(20).insert(8);

tree.inOrder();
// console.log(tree);
