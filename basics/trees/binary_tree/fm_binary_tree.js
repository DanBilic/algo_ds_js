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
