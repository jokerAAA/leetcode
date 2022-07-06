/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 思路: NOTE: WHY?
 * @desc 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  const q = [root];
  while (q.length) {
    const length = q.length;
    const levelArr = [];
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      if (!node) {
        return;
      }
      levelArr.push(node);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    levelArr.forEach((value, index, arr) => {
      value.next = arr[index + 1] || null;
    });
  }
  return root;
};
