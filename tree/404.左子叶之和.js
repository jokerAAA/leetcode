/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 层序遍历,只取第一个判断是否为叶节点,是则累加,否则继续
 * @desc 求树的左子叶之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  let res = 0;
  const q = [root];
  const isLeaf = (node) => {
    return !node.left && !node.right;
  };
  while (q.length) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      // 左侧节点如果是叶节点就累加
      if (node.left) {
        if (isLeaf(node.left)) {
          res += node.left.val;
        } else {
          q.push(node.left);
        }
      }
      // 有节点必须是非叶节点才能入队
      if (node.right) {
        if (!isLeaf(node.right)) {
          q.push(node.right);
        }
      }
    }
  }
  return res;
};
