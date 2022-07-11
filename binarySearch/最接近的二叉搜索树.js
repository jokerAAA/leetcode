/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  if (!root) {
    return null;
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  let min = Number.MAX_SAFE_INTEGER;
  let res;
  while (root) {
    // 要比较绝对值最小的元素
    const temp = Math.abs(root.val - target);
    if (temp < min) {
      min = temp;
      res = root.val;
    }
    if (root.val > target) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return res;
};
