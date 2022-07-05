/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 中序遍历: 左 - 中 - 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const traverse = (node) => {
    if (node == null) {
      return;
    }
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return res;
};

const traverse = (root) => {
  /**
   * 前序遍历和中序遍历的写法是类似的
   */
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [];
  let curNode = root;
  let temp;
  while (stack.length || curNode) {
    while (curNode) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    temp = stack.pop();
    res.push(temp.val);
    curNode = temp.right;
  }
  return res;
};

/**
 * 说明:
 * 使用递归方式遍历时,可以按照最简单的模型来思考流程
 * 以中序遍历为例：假设只有三个节点:node node.left node.right
 * 顺序：处理node.left -> 处理node -> 处理node.right
 *
 * 前序—中序-后续都是dfs遍历的方式,
 *
 * 中序遍历对有序二叉树，单次遍历完就是有序数组
 */
