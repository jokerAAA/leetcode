/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 前序遍历: 中 左 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  const traverse = (node) => {
    if (node == null) {
      return;
    }
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return res;
};

/**
 * 1. 根节点是第一个
 */