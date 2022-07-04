/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @ 求二叉树每一层的平均值: 和/个数
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val];
  }
  const res = [];
  const q = [root];
  while (q.length) {
    const currentLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      currentLevel.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(currentLevel);
  }
  return res.map((curLevel) => {
    const length = curLevel.length;
    const sum = curLevel.reduce((prev, next) => prev + next, 0);
    return sum / length;
  });
};
