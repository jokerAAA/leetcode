/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路: 这个题和110平衡二叉树判断是类似的,都是后续遍历,比较左右节点的值,将子节点的判断返回给父节点用
 * @desc 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 条件: 所有 Node.val 互不相同 && p != q && p 和 q 均存在于给定的二叉树中。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res;
  const isFound = (node, p, q) => {
    if (node === null) {
      return false;
    }
    const findLeft = isFound(node.left, p, q);
    const findRight = isFound(node.right, p, q);
    /**
     * 祖先节点有2中情况:
     * 1. 左侧和右侧都找到了目标
     * 2. 左侧OR右侧找到了 且当前节点是目标节点
     * 这里需要比较左侧和右侧都找到的场景,所以要用到后续遍历
     */
    if (
      (findLeft && findRight) ||
      ((node.val === p.val || node.val === q.val) && (findLeft || findRight))
    ) {
      res = node;
    }
    // 是否找到tareget存在2种场景:
    // 1. 当前自己点中命中目标
    // 2. 当前节点本身命中目标
    return findLeft || findRight || node.val === p.val || node.val === q.val;
  };
  isFound(root, p, q);
  return res;
};

const findAns = (root, p, q) => {
  let res = null;
  // isFound表示当前节点是否有目标值
  const isFound = (node, node1, node2) => {
    if (!node) {
      return false;
    }
    const findLeft = isFound(node.left, node1, node2);
    const findRight = isFound(node.right, node1, node2);
    // 因为root内值是唯一的且pq不等,所以findLeft && findRight同时为真，表示已经找到了
    if (findLeft && findRight) {
      res = node;
      return true;
    }
    // 子节点有且当前节点也有,也是符合的
    if (
      (findLeft || findRight) &&
      (node.val === node1.val || node.val === node2.val)
    ) {
      res = node;
      return true;
    }
    // 当前节点找到可能是子节点包含pq,也可能是当前节点包含pq
    return (
      findLeft || findRight || node.val === node1.val || node.val === node2.val
    );
  };
  isFound(root, p, q);
  return res;
};
