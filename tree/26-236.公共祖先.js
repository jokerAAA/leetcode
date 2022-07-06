/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路: 这个题和110平衡二叉树判断是类似的,都是后续遍历,比较左右节点的值,将子节点的判断返回给父节点用
 * @desc 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res;
  const isFound = (node, p, q) => {
    if (node === null) {
      return false;
    }
    const findLeft = isFound(node.left, p, q);
    const findRight = isFound(node.right, p, q);
    /**
     * 祖先节点有2中情况:
     * 1. 左侧和右侧都找到了目标
     * 2. 左侧OR右侧找到了 且当前节点是目标节点
     * 这里需要比较左侧和右侧都找到的场景,所以要用到后续遍历
     */
    if (
      (findLeft && findRight) ||
      ((node.val === p.val || node.val === q.val) && (findLeft || findRight))
    ) {
      res = node;
    }
    // 是否找到tareget存在2种场景:
    // 1. 当前自己点中命中目标
    // 2. 当前节点本身命中目标
    return findLeft || findRight || node.val === p.val || node.val === q.val;
  };
  isFound(root, p, q);
  return res;
};
