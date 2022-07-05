/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 后续遍历 左 -> 右 -> 中
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const traverse = (node) => {
    if (node == null) {
      return;
    }
    traverse(node.left);
    traverse(node.right);
    res.push(node.val);
  };
  traverse(root);
  return res;
};

/**
 *
 * @desc 后序遍历迭代
 * 后续遍历的迭代写法比前序中序复杂,后续遍历需要在节点第三次访问时才记录
 * 记录访问次数比较麻烦，这里可以加一个prev变量记录上一次访问的节点，如果当前访问的节点的右节点是上一次访问的节点
 * 说明这次访问已经是第三次了
 */
var postTraverse = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [];
  let curNode = root;
  let prev; // 记录上次访问
  while (curNode || stack.length) {
    while (curNode) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    if (stack.length) {
      curNode = stack.pop();
      // pop阶段要区分第二次 OR 第三次访问
      // 第二次访问且没有右子树,直接记录即可,如果没有右子树默认为空元素,可以忽略这条
      // 第三次访问: 此时上次访问的元素就是当前节点的右子树
      if (curNode.right === prev || !curNode.right) {
        res.push(curNode.val);
        prev = curNode; // 记录上一次访问的子树
        curNode = null; // 置空避免重复while循环再次访问左节点
      } else {
        // 第二次访问且有右子树,那就压栈并访问右子树
        stack.push(curNode);
        curNode = curNode.right;
      }
    }
  }
  return res;
};

/**
 * 1. 根节点是最后一个
 */
