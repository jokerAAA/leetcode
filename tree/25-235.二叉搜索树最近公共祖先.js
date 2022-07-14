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
 * 说明: 所有节点的值都是唯一的。p、q 为不同节点且均存在于给定的二叉搜索树中。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 因为是二叉搜索树,所以直接根据值遍历即可
  if (!root) {
    return false;
  }
  let ans = root;
  while (true) {
    // 由于pq一定存在于二叉树中,所以不用考虑找不到的场景
    const value = ans.val;
    if (p.val > value && q.val > value) {
      ans = ans.right;
    } else if (p.val < value && q.val < value) {
      ans = ans.left;
    } else {
      break;
    }
  }
  return ans;
};
