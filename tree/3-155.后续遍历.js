/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 后续遍历 左 -> 右 -> 中
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const traverse = (node) => {
    if (node == null) {
      return;
    }
    traverse(node.left);
    traverse(node.right);
    res.push(node.val);
  };
  traverse(root);
  return res;
};

/**
 * 1. 根节点是最后一个
 */
