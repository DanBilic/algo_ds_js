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

const dfs = (node, count) => {
  if (node === null) {
    return count;
  }

  const newCount = count + 1;
  if (node.left) {
    const leftCount = dfs(node.left, newCount);

    if (leftCount > count) {
      count = leftCount;
    }
  }
  if (node.right) {
    const rightCount = dfs(node.right, newCount);

    if (rightCount > count) {
      count = rightCount;
    }
  }
  return count;
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

console.log("tree", dfs(tree.root, 0));
