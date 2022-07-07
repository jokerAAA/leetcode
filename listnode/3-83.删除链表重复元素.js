/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给定一个已排序的链表的头head,删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  const ans = new ListNode(null, head);
  const cur = ans;
  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      // 和203同理,需要考虑[null,2,2,2]的场景
      cur = cur.next;
    }
  }
  return ans.next;
};
