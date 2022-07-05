/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 基础题: dfs遍历路径
 * @desc 返回二叉树所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  const dfs = (node, path) => {
    if (!node) {
      return;
    }
    const newPath = path.concat(node.val);
    if (!node.left && !node.right) {
      res.push(newPath);
    }
    dfs(node.left, newPath);
    dfs(node.right, newPath);
  };
  dfs(root, []);
  return res.map((path) => path.join('->'));
};
