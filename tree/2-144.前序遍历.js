/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 前序遍历: 中 左 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  const traverse = (node) => {
    if (node == null) {
      return;
    }
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return res;
};

var preTraverse = (root) => {
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [];
  let curNode = root;
  let temp;
  while (stack.length || curNode) {
    while (curNode) {
      res.push(curNode.val);
      stack.push(curNode);
      curNode = curNode.left;
    }
    let temp = stack.pop();
    curNode = temp.right;
  }
  return res;
};

/**
 * 前序、中序、后续的遍历方式是一样的，不同是记录访问的timing不一样
 * 对单个节点来说,dfs会有三次访问到的timing：
 * 1. 初次进入节点
 * 2. 从左子树返回
 * 3. 从右子树返回
 * 按照timing不同分成前序、中序和后序
 *
 * 在迭代法遍历时候,前序、中序是类似的，但是后序要复杂一点
 */
