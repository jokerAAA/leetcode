/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: bfs遍历时，然后取最后一层第一个值即可
 * @desc 求出给定树左下角的值: 最深层最左侧值
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root.left && !root.right) {
    return root.val;
  }
  let res = [];
  let q = [root];
  while (q.length) {
    const currentLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!root) {
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
    res.unshift(currentLevel);
  }
  return res[0][0];
};
