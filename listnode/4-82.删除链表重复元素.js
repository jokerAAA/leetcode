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
  let prev = ans;
  let cur = prev.next;
  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      prev.next = cur.next;
      // 由于数组是有序的,所以遇到cur != cur.next时,此时的元素和之前的不会重复
      cur = cur.next;
    } else {
      prev = prev.next;
      cur = cur.next;
    }
  }
  return ans.next;
};
