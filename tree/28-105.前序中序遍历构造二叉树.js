/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  /**
   * 思路: 前序+中序 OR 后序+中序的思路都是类似的,在前序/后续中找到根节点,然后在中序找到根节点位置,继而找到左节点和右节点的中序遍历,然后通过根节点的位置可以推断出前序/后续中左节点和右节点的分界线
   * 整体思路就是不停的找位置,划分数组作为递归子数组的参数
   *
   */
  const root = preorder[0];
  const node = new TreeNode(root);
  const mid = inorder.indexOf(root);
  const length = preorder.length;
  node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  node.right = buildTree(
    preorder.slice(mid + 1, length),
    inorder.slice(mid + 1, length),
  );
  return node;
};
