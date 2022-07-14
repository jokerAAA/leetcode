/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const length = postorder.length;
  const root = postorder[length - 1]; // 根节点
  const mid = inorder.indexOf(root); // 中序根节点左侧是左节点,右侧是右节点
  const node = new TreeNode(root);
  node.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  node.right = buildTree(
    inorder.slice(mid + 1, length),
    postorder.slice(mid, length - 1),
  );
  return node;
};
