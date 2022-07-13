/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给定一个单链表 L 的头节点 head ，单链表 L 表示为：l0 -> l1 -> ...ln-1 -> ln,重排后变为l0 -> ln -> l1 -> ln-1...
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }
  /**
   *  思路1: 由于链表只有next,没有pre指针,所以直接按题目意思来需要转成数组 OR 双链表来实现
   *  思路2: 翻转链表后拼接:
   * 1. 找到链表重点
   * 2. 翻转链表后半段
   * 3. 链表拼接
   */
  let length = 0;
  const curNode = head;
  while (curNode) {
    length++;
  }
  const ans = new ListNode(head);
  let tail = ans;
  const center = Math.floor(length / 2);
  for (let i = 0; i < center; i++) {
    tail = tail.next;
  }
  // 切断链表,翻转第二段
  let last = tail.next;
  tail.next = null;
  last = reverse(last);

  // 拼接数组
  while (head && last) {
    const remainLast = last.next || null;
    const remainHead = head.next || null;
    head.next = last;
    head.next.next = remainHead;
    last = remainLast;
    head = remainHead;
  }
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
    head.next = next;
  }
  return prev;
};
