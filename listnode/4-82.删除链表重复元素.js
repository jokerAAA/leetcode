/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路: 双指针: 正常场景不停移动双指针,遇到重复元素是快指针持续后移,然后prev.next = cur.next;
 * @desc 给定一个已排序的链表的头 head,删除原始链表中所有重复数字的节点,只留下不同的数字,返回已排序的链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  const ans = new ListNode(null, head);
  // 用slow 和 fast的明明更贴近实际逻辑
  let slow = ans;
  let fast = slow.next;
  while (fast) {
    if (fast.next && fast.val === fast.next.val) {
      while (fast.next && fast.val === fast.next.val) {
        fast = fast.next;
      }
      slow.next = fast.next; // 这里容易写错,上一个循环结束后fast仍然是重复值,所以这里指针的指向和fast都要复制为fast.next
      fast = fast.next;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return ans.next;
};
