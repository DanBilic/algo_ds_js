// LEETCODE 104. Maximum Depth of Binary Tree
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
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);

const dfsHelper = (node, currentLevel, result) => {
  if (!node) {
    return;
  }

  if (currentLevel >= result.length) {
    result.push(node.value);
  }

  if (node.right) {
    dfsHelper(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    dfsHelper(node.left, currentLevel + 1, result);
  }
};

const rightSideViewDFS = (root) => {
  const result = [];
  dfsHelper(root, 0, result);
  return result;
};

console.log(
  "binary search tree in JSON format: \n",
  JSON.stringify(traverse(tree.root))
);

console.log("right side view [DFS]: ", rightSideViewDFS(tree.root));
