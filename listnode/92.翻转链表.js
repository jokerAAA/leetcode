/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路: 穿针引线
 * @desc 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) {
    return head;
  }

  // 可以分成三个部分来处理:其中23的顺序是可变的
  // 1. 找位置: 穿针引线的四个节点
  // 2. 断开,然后翻转链表
  // 3. 翻转后的链表接入原来的位置
  // 难点: 指针太多,容易混乱。技巧: 先找2个位置,再根据2个位置找剩下两个位置,不要一开始命名太多变量
  const ans = new ListNode(null, head);
  let pos = 1;
  let slow = ans;
  // [slow][h,t][fast]
  while (pos < left) {
    slow = slow.next;
    pos++;
  }
  // 这里迭代的是t,因为要取到下一个元素,所以上一个循环移动slow,slow.next = h;下个循环移动t,最后t.next = fast;
  let t = slow.next;
  while (pos < right) {
    t = t.next;
    pos++;
  }
  const h = slow.next;
  const fast = t.next;

  // 先断开tail,然后再翻转
  t.next = null;
  reverse(h);

  // 穿针引线
  slow.next = t;
  h.next = fast;
  return ans.next;
};

const reverse = (node) => {
  if (!node || !node.next) {
    return node;
  }
  let prev = new ListNode(null);
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev.next;
};


