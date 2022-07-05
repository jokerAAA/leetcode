/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 求二叉树所有路径之和,每条路径视为一个数字:如1 -> 2 -> 视为123
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  const res = [];
  const dfs = (node, path) => {
    if (!node) {
      return;
    }
    const newPath = path.concat(node.val);
    if (!node.left && !node.right) {
      res.push(newPath.reduce((prev, next) => prev + next, ''));
      return;
    }
    if (node.left) {
      dfs(node.left, newPath);
    }
    if (node.right) {
      dfs(node.right, newPath);
    }
  };
  dfs(root, []);
  return res.reduce((prev, next) => +prev + +next, 0);
};
