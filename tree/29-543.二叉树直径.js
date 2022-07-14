/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  let ans = 0;
  const depth = (node) => {
    if (!node) {
      return 0;
    }
    const left = depth(node.left);
    const right = depth(node.right);
    // 在递归计算深度的基础上,不断取最大的深度和
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
  };
  depth(root);
  return ans - 1;
};
