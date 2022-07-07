/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  const ans = new ListNode(null, head);
  let cur = ans;
  while (cur) {
    if (cur.next && cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      // 只有下一个节点和目标不等时才移动,避免出现[null,7,7]的场景
      cur = cur.next;
    }
  }
  return ans.next;
};
