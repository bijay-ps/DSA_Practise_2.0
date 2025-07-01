// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. 
// The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChildPathSum
};