const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  let current = rootNode;
  while (current && current.left) {
    current = current.left;
  }
  return current.val;
}

function findMaxBST(rootNode) {
  let current = rootNode;
  while (current && current.right) {
    current = current.right;
  }
  return current.val;
}

function findMinBT(rootNode) {
  if (!rootNode) {
    return Infinity;
  }
  const left = findMinBT(rootNode.left);
  const right = findMinBT(rootNode.right);
  return Math.min(rootNode.val, left, right);
}

function findMaxBT(rootNode) {
  if (!rootNode) {
    return -Infinity;
  }
  const left = findMaxBT(rootNode.left);
  const right = findMaxBT(rootNode.right);
  return Math.max(rootNode.val, left, right);
}

function getHeight(rootNode) {
  if (!rootNode) {
    return -1;
  }
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function countNodes(rootNode) {
  if (!rootNode) {
    return 0;
  }
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function balancedTree(rootNode) {
  if (!rootNode.left && !rootNode.right) {
    return true;
  } else if (!rootNode.left || !rootNode.right) {
    return false;
  }

  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;

  const queue = [rootNode];

  while (queue.length !== 0) {
    const current = queue.shift();

    if (current.left && current.left.val === target) return current;
    if (current.right && current.right.val === target) return current;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return;
}

function inOrderPredecessor(rootNode, target) {
  let values = [];

  function inOrder(currentNode) {
    if (!currentNode) return;
    inOrder(currentNode.left);
    values.push(currentNode.val);
    inOrder(currentNode.right);
  }

  inOrder(rootNode);

  for (let i = 0; i < values.length - 1; i++) {
    if (values[i + 1] === target) {
      return values[i];
    }
  }
  return null;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
  if (rootNode.val === target) {
    const predecessorValue = inOrderPredecessor(rootNode, rootNode.val);
    deleteNodeBST(rootNode, predecessorValue);
    rootNode.val = predecessorValue;
    return;
  }

  const parent = getParentNode(rootNode, target);
  if (!parent && rootNode.val !== target) return undefined;

  let child;
  let direction;
  if (parent.left && parent.left.val === target) {
    child = parent.left;
    direction = "left";
  } else {
    child = parent.right;
    direction = "right";
  }

  if (!child.left && !child.right) {
    parent[direction] = null;
  } else if (!child.left) {
    parent[direction] = child.right;
  } else if (!child.right) {
    parent[direction] = child.left;
  } else {
    const predecessorValue = inOrderPredecessor(child, child.val);
    deleteNodeBST(child, predecessorValue);
    child.val = predecessorValue;
  }
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
