/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 给你两棵二叉树： root1 和 root2
 * 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二 * 叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新* 二叉树的节点。
 * 返回合并后的二叉树。
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 如果两个子树有一个为空,返回另一个即可
  if (!root1 || !root2) {
    return root1 || root2;
  }
  /**
   * 思路: 创造新节点,递归合并
   */
  const newTree = new TreeNode(root1.val + root2.val);
  newTree.left = mergeTrees(root1.left, root2.left);
  newTree.right = mergeTrees(root1.right, root2.right);
  return newTree;
};
