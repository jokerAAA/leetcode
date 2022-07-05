/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: dfs递归翻转,先翻转,再处理逻辑,后序遍历
 * @desc 翻转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  if (!node.left && node.right) {
    return root;
  }
  const reverse = (node) => {
    if (!node) {
      return;
    }
    reverse(node.left);
    reverse(node.right);

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  reverse(root);
  return root;
};
