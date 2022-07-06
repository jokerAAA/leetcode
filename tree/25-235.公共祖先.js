/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 思路: 由于是从根节点开始遍历的二叉搜索树,如果两个都小在左边找,两个都大则向右找;
 * 如果不是最近的的祖先,会出现pq都在一边的场景
 * @desc 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = root;
  while (true) {
    if (p.val < ans.val && q.val < ans.val) {
      ans = ans.left;
    } else if (q.val > ans.val && p.val > ans.val) {
      ans = ans.right;
    } else {
      break;
    }
  }
  return ans;
};
