/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  const ans = new ListNode(null);
  let pos = 0;
  let cur = ans;
  /**
   * 思路: 这个题难处理的是进位机制,进位可能有以下几种情况:
   * 1. 正常前一位累加产生的进位: 单独维持进位变量,每次累加都要带上进位;每次累加时有就赋值,没有就清零
   * 2. l1 || l2 累加完毕后产生的进位: 可以与第一种情况合并处理,正常情况下l1 && l2都存在才能累加,考虑进位只要有l1 || l2都需要累加
   * 3. l1 && l2 累加完毕后产生的进位: 最后单独处理
   */
  while (l1 || l2) {
    const leftVal = l1 ? l1.val : 0;
    const rightVal = l2 ? l2.val : 0;
    let sum = leftVal + rightVal + pos;
    if (sum >= 10) {
      pos = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      pos = 0;
    }
    cur.next = new ListNode(sum);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (pos > 0) {
    cur.next = new ListNode(pos);
  }
  return ans.next;
};
