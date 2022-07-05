/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: bfs遍历后取每层最大值 OR 遍历过程中每一层只存最大值
 * @desc 求树每一层的最大值
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val];
  }
  const q = [root];
  const res = [];
  while (q.length) {
    let curLevelMax = Number.MIN_SAFE_INTEGER;
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        continue;
      }
      curLevelMax = Math.max(curLevelMax, node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(curLevelMax);
  }
  return res;
};

/**
 * 还是bfs的模板
 * 特殊场景判断容易出错
 */
