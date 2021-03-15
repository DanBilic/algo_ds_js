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

// ------------------------------------------------------------

// class Node {
//     constructor(value){
//       this.left = null;
//       this.right = null;
//       this.value = value;
//     }
//   }

//   class BinarySearchTree {
//     constructor(){
//       this.root = null;
//     }
//     insert(value){
//       const newNode = new Node(value);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         let currentNode = this.root;
//         while(true){
//           if(value < currentNode.value){
//             //Left
//             if(!currentNode.left){
//               currentNode.left = newNode;
//               return this;
//             }
//             currentNode = currentNode.left;
//           } else {
//             //Right
//             if(!currentNode.right){
//               currentNode.right = newNode;
//               return this;
//             }
//             currentNode = currentNode.right;
//           }
//         }
//       }
//     }
//     lookup(value){
//       if (!this.root) {
//         return false;
//       }
//       let currentNode = this.root;
//       while(currentNode){
//         if(value < currentNode.value){
//           currentNode = currentNode.left;
//         } else if(value > currentNode.value){
//           currentNode = currentNode.right;
//         } else if (currentNode.value === value) {
//           return currentNode;
//         }
//       }
//       return null
//     }
//     remove(value) {
//       if (!this.root) {
//         return false;
//       }
//       let currentNode = this.root;
//       let parentNode = null;
//       while(currentNode){
//         if(value < currentNode.value){
//           parentNode = currentNode;
//           currentNode = currentNode.left;
//         } else if(value > currentNode.value){
//           parentNode = currentNode;
//           currentNode = currentNode.right;
//         } else if (currentNode.value === value) {
//           //We have a match, get to work!

//           //Option 1: No right child:
//           if (currentNode.right === null) {
//             if (parentNode === null) {
//               this.root = currentNode.left;
//             } else {

//               //if parent > current value, make current left child a child of parent
//               if(currentNode.value < parentNode.value) {
//                 parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//               } else if(currentNode.value > parentNode.value) {
//                 parentNode.right = currentNode.left;
//               }
//             }

//           //Option 2: Right child which doesnt have a left child
//           } else if (currentNode.right.left === null) {
//             currentNode.right.left = currentNode.left;
//             if(parentNode === null) {
//               this.root = currentNode.right;
//             } else {

//               //if parent > current, make right child of the left the parent
//               if(currentNode.value < parentNode.value) {
//                 parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//               } else if (currentNode.value > parentNode.value) {
//                 parentNode.right = currentNode.right;
//               }
//             }

//           //Option 3: Right child that has a left child
//           } else {

//             //find the Right child's left most child
//             let leftmost = currentNode.right.left;
//             let leftmostParent = currentNode.right;
//             while(leftmost.left !== null) {
//               leftmostParent = leftmost;
//               leftmost = leftmost.left;
//             }

//             //Parent's left subtree is now leftmost's right subtree
//             leftmostParent.left = leftmost.right;
//             leftmost.left = currentNode.left;
//             leftmost.right = currentNode.right;

//             if(parentNode === null) {
//               this.root = leftmost;
//             } else {
//               if(currentNode.value < parentNode.value) {
//                 parentNode.left = leftmost;
//               } else if(currentNode.value > parentNode.value) {
//                 parentNode.right = leftmost;
//               }
//             }
//           }
//         return true;
//         }
//       }
//     }
//   }

//   const tree = new BinarySearchTree();
//   tree.insert(9)
//   tree.insert(4)
//   tree.insert(6)
//   tree.insert(20)
//   tree.insert(170)
//   tree.insert(15)
//   tree.insert(1)
//   tree.remove(170)
//   JSON.stringify(traverse(tree.root))

//   //     9
//   //  4     20
//   //1  6  15  170

//   function traverse(node) {
//     const tree = { value: node.value };
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
//   }
