class BinaryTree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  traverse(func) {
    func(this.question);
    if (this.yes) this.yes.traverse(func);
    if (this.no) this.no.traverse(func);
  }

  contains(question) {
    if (this.question === question) {
      return true;
    }

    return (
      (this.yes && this.yes.contains(question) ? true : false) ||
      (this.no && this.no.contains(question) ? true : false)
    );
  }
}

const countLeafNodes = (node) => {
  if (node === null) return 0;
  if (!node.yes && !node.no) {
    return 1;
  }
  return countLeafNodes(node.yes) + countLeafNodes(node.no);
};

// left, root, right
const inOrder = (node, func = console.log) => {
  if (node.left) {
    node.left.inOrder(func);
  }

  func(node);

  if (node.right) {
    node.right.inOrder(func);
  }
};

// root, left, right
const preOrder = (node, func = console.log) => {
  func(node);

  if (node.left) {
    node.left.preOrder(func);
  }

  if (node.right) {
    node.right.preOrder(func);
  }
};

// left,  right, root
const postOrder = (node, func = console.log) => {
  if (node.left) {
    node.left.postOrder(func);
  }

  if (node.right) {
    node.right.postOrder(func);
  }
  func(node);
};
