/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 二叉搜索树中序遍历后就是有序的
 * @desc 返回二叉搜索树第K小的元素
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const orderArr = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    orderArr.push(node.val);
    if (orderArr.length > k) {
      return;
    }
    dfs(node.right);
  };
  dfs(root);
  return orderArr[k - 1];
};
