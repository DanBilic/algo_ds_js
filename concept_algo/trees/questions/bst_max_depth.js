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

const maxDepthDfs = (node, count) => {
  if (node === null) {
    return count;
  }

  const newCount = count + 1;
  if (node.left) {
    const leftCount = maxDepthDfs(node.left, newCount);

    if (leftCount > count) {
      count = leftCount;
    }
  }
  if (node.right) {
    const rightCount = maxDepthDfs(node.right, newCount);

    if (rightCount > count) {
      count = rightCount;
    }
  }
  return count;
};

const cleanerMaxDepthDfs = (node, count) => {
  if (!node) {
    return count;
  }
  count++;
  return Math.max(
    cleanerMaxDepthDfs(node.left, count),
    cleanerMaxDepthDfs(node.right, count)
  );
};

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);

console.log(
  "binary search tree in JSON format: \n",
  JSON.stringify(traverse(tree.root))
);
console.log("max depth", maxDepthDfs(tree.root, 1));
console.log("cleaner max depth", cleanerMaxDepthDfs(tree.root, 0));
