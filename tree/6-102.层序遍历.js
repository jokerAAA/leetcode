/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 需要用二元数组存储
 * @desc 层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */

const levelOrder = (root) => {
  if (root == null) {
    return [];
  }
  const res = [];
  const q = [root];
  while (q.length) {
    const currentLevel = [];
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (node == null) {
        continue;
      }
      currentLevel.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(currentLevel);
  }
  return res;
};

/**
 * 1. bfs一般用队列来处理,队列中加入root,处理完毕后加入下一层,然后循环: 先处理再加入队列
 * 2. 由于有了层的概念,所以每一层处理开始先声明数组存储,处理完毕后加入res
 */
