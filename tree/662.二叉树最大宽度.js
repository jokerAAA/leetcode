/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 求给定二叉树最大宽度
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let res = [];
  const q = [root];
  while (q.length) {
    const curLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      curLevel.push(node.val || null);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(curLevel);
  }
  res = res.map((level) => {
    const first = level.findIndex((v) => v != null);
    if (first === -1) {
      return 0;
    }
    const last = level.findLastIndex((v) => v != null);
    return last - first + 1;
  });
  return Math.max(...res);
};
