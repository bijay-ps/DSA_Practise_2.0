// Approach 1: Iterative

const treeMinValue = (root) => {
  if (root.left === null && root.right === null) return root.val;

  let queue = [ root ];
  let min = Infinity;
  
  while (queue.length > 0) {
    let current = queue.shift();

    if(current.val < min) {
      min = current.val
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;

};

// Approach 2: Recursive

const treeMinValueRec = (root) => {
    if (root === null) return Infinity;
    const leftMin = treeMinValueRec(root.left);
    const rightMin = treeMinValueRec(root.right);
    return Math.min(root.val, leftMin, rightMin);
}