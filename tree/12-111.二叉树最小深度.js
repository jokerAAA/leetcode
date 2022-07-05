/**
 * Definition for a binary tree node
 * function TreeNode(val, left, right) {
 *      this.val = val === undefined ? 0 : val;
 *      this.left = val === undefined ? null : left;
 *      this.right = val === undefined ? null : right;
 * }
 */
/**
 * 思路: bfs遍历,找到第一个叶节点返回即可
 * @decs 给定二叉树求最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  const q = [root];
  while (q.length) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      if (!node.left && !node.right) {
        return res + 1;
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res += 1;
  }
  return res;
};
