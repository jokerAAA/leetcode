/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @ 最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  const q = [root];
  while (q.length) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.pop();
      if (node == null) {
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
