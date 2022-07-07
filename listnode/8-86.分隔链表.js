/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallNode = new ListNode(null);
  let largeNode = new ListNode(null);
  let ans = smallNode;
  let curLargeNode = largeNode;

  while (head) {
    if (head.val < x) {
      smallNode.next = new ListNode(head.val);
      smallNode = smallNode.next;
    } else {
      curLargeNode.next = new ListNode(head.val);
      curLargeNode = curLargeNode.next;
    }
    head = head.next;
  }
  smallNode.next = largeNode.next;
  return ans.next;
};
