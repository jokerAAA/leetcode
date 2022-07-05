/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: bfs遍历，通过order来控制同层元素入队顺序：push OR unshift
 * @desc 上层从左向右,下层从右向左
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let res = [];
  let q = [root];
  let order = true; // 每层反转
  while (q.length) {
    const currentLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (node == null) {
        continue;
      }
      if (order) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(currentLevel);
    order = !order;
  }
  return res;
};

/**
 * 102题目变种
 * 在当前层挨个加入队列的过程中,根据order来变换顺序,上级从后面添加,下级就从前面添加,保证顺序是相反的即可,剩下逻辑是相同的
 */
