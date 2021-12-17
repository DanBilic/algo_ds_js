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

  insert = (value) => {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  };

  depthFirstSearch = () => {
    const stack = [];
    const list = [];

    stack.push(this.root);

    while (stack.length > 0) {
      let currentNode = stack.pop();
      list.push(currentNode.value);

      if (currentNode.right) {
        stack.push(currentNode.right);
      }

      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }

    return list;
  };
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(9);
tree.insert(1);
tree.insert(3);

console.log("DFS iterative: ", tree.depthFirstSearch());
