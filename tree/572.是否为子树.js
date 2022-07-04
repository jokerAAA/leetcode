/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameNode = (p, q) => {
    if (!p && !q) {
      return true;
    } else if (!p || !q) {
      return false;
    }
    return (
      p.val === q.val &&
      isSameNode(p.left, q.left) &&
      isSameNode(p.right, q.right)
    );
  };
  const findNode = (container, target) => {
    if (!container) {
      return null;
    }
    if (container.val === target) {
      return container;
    }
    return (
      findNode(container.left, target) || findNode(container.right, target)
    );
  };
  const node = findNode(root, subRoot);
  if (!node) {
    return false;
  }
  return isSameNode(node, subRoot);
};
