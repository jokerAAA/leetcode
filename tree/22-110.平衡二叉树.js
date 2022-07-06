/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 左子树右子树高差不超过1，考虑用后续遍历,递归求完左右高度后判断即可。如果左右子树有高差超过1的直接判断即可
 * @desc 给定一个二叉树，判断它是否是高度平衡的二叉树： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const height = (node) => {
    if (!node) {
      return 0;
    }
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1 || leftHeight === -1 || rightHeight === -1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };
  return height(root) >= 0;
};
