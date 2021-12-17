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

  depthFirstSearchPreorder = () => {
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

  DFSinorder = (node, list) => {
    if (node.left) {
      this.DFSinorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.DFSinorder(node.right, list);
    }

    return list;
  };

  DFSpreorder = (node, list) => {
    list.push(node.value);
    if (node.left) {
      this.DFSpreorder(node.left, list);
    }
    if (node.right) {
      this.DFSpreorder(node.right, list);
    }

    return list;
  };

  DFSpostorder = (node, list) => {
    if (node.left) {
      this.DFSpostorder(node.left, list);
    }
    if (node.right) {
      this.DFSpostorder(node.right, list);
    }
    list.push(node.value);

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

console.log(
  "DFS iterative [PREORDER]: ",
  tree.depthFirstSearchPreorder([tree.root], [])
);
console.log("DFS recursive [INORDER]: ", tree.DFSinorder(tree.root, []));
console.log("DFS recursive [PREORDER]: ", tree.DFSpreorder(tree.root, []));
console.log("DFS recursive [POSTORDER]: ", tree.DFSpostorder(tree.root, []));
