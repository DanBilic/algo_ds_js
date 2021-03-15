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

  lookup(value) {
    let current = this.root;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }

      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }
  remove(value) {
    let current = this.root;
    let prev = null;
    let dir = null;

    while (current !== null) {
      if (value > current.value) {
        prev = current;
        dir = "right";
        current = current.right;
      } else if (value < current.value) {
        prev = current;
        dir = "left";
        current = current.left;
      } else if ((value = current.value)) {
        // console.log("prev", prev);
        // console.log("current", current);

        if (current.right === null) {
          prev[dir] = current.left;
        } else {
          prev[dir] = current.right;
        }
        return this;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(2);
tree.remove(2);
tree.remove(5);

console.log(tree);
// console.log("left", tree.root.right.left);

// console.log("lookup", tree.lookup(2));
