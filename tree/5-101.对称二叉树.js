/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) {
    return true;
  }
  const check = (p, q) => {
    if (p == null && q == null) {
      return true;
    } else if (p == null || q == null) {
      return false;
    }
    // 对称的条件是当前节点值相等 且左节点和对称树的右节点相等 右节点和对称树的左节点相等
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  };
  // NOTE: 这里用相同树做对称判断
  return check(root, root);
};
