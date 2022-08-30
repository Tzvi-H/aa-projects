// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
      return;
    }

    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return true;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root];
    while (queue.length > 0) {
      const front = queue.shift();
      console.log(front.val);
      if (front.left !== null) {
        queue.push(front.left);
      }
      if (front.right !== null) {
        queue.push(front.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const queue = [this.root];
    while (queue.length > 0) {
      const front = queue.pop();
      console.log(front.val);
      if (front.left !== null) {
        queue.push(front.left);
      }
      if (front.right !== null) {
        queue.push(front.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
