/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: bfs遍历即可,每层结束深度+1
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const q = [root];
  let res = 0;
  while (q.length) {
    let length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res++;
  }
  return res;
};
