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

const levelOrder = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentLevelValues);
  }

  return result;
};

console.log(
  "binary search tree in JSON format: \n",
  JSON.stringify(traverse(tree.root))
);

console.log("levelOrder", levelOrder(tree.root));
