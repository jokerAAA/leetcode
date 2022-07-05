/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 判断当前树是否存在一条路径和是target，路径和: 从根节点到叶节点
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 失败和成功判断
  if (root === null) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  // 分别寻找子节点,这是target是targetSum - root.val
  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
};
