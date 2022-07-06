/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树:每个子树都符合左子树小于当前节点,右子树大于当前节点
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) {
    return false;
  }
  // 思路: 递归判断即可
  const isValid = (node, start, end) => {
    if (!node) {
      return true;
    }
    // NOTE: 注意 == 判断
    if (node.val <= start || node.val >= end) {
      return false;
    }
    return isValid(node.left, start, node.val) && isValid(node.right, node.val, end);
  };
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const isValidTree = (root) => {
  // 思路2: 二叉搜索树的中序遍历是有序数组,所以中序遍历后判断是否是有序数组即可
  const res = [];
  const stack = [];
  let curNode = root;
  let temp;
  while (stack.length || curNode) {
    while (curNode) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    temp = stack.shift();
    res.push(temp.val);
    curNode = temp.right;
  }
  console.log(res);
  return res.every((value, index, arr) => {
    if (index === 0) {
      return true;
    } else {
      return value > arr[index - 1];
    }
  });
};
