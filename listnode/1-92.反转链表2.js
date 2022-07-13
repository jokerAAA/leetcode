/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * @param {ListNode} listnode
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (listnode, left, right) {
  if (!head) {
    return;
  }
  if (!head.next || left === right) {
    return head;
  }
  /**
   * 思路: 这个题的思路可以分成3个步骤:
   * 1. 找位置:遍历后找到4个位置: [first, head, tail, last];
   * 2. 反转链表: 断开first和head,断开tail和last,然后将head链表反转
   * 3. 接链表:first.next = tail, head.next = last;
   */
  const ans = new ListNode(null, listnode);
  let first = ans;
  for (let i = 1; i < left; i++) {
    first = first.next;
  }
  // 切断第一个位置
  let head = first.next;
  first.next = null;
  let tail = head;
  for (let j = left; j < right; j++) {
    tail = tail.next;
  }
  // 切断第二个位置
  let last = tail.next;
  tail.next = null;

  // 先反转链表
  reverse(head);

  // 再穿针引线
  first.next = tail;
  head.next = last;

  return ans.next;
};

var reverse = (head) => {
  if (!head) {
    return null;
  }
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
