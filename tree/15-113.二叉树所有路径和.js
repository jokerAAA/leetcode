/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 路径是从root到叶节点,所以考虑用dfs来查询,到达叶节点时判断是否成功,路径考虑用额外参数存储和记录
 * @desc 寻找路径和是target的所有路径
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum ? [[root.val]] : [];
  }
  const res = [];
  const dfs = (node, target, path) => {
    if (!node) {
      return;
    }
    // do something
    const newTarget = target - node.val;
    if (!node.left && !node.right && newTarget === 0) {
      res.push(path.concat(node.val));
      return;
    }
    if (node.left) {
      dfs(node.left, newTarget, path.concat(node.val));
    }
    if (node.right) {
      dfs(node.right, newTarget, path.concat(node.val));
    }
  };
  dfs(root, targetSum, []);
  return res;
};
