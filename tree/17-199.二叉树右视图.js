/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 返回二叉树右视图,即每层最右侧node的集合
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val];
  }
  const res = [];
  const q = [root];
  while (q.length) {
    const currentLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      currentLevel.unshift(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(currentLevel);
  }
  console.log(res);
  return res.map((level) => level[0]);
};
