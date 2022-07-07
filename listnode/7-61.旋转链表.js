/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 给你一个链表的头节点head,旋转链表,将链表每个节点向右移动k个位置。
 * @input head = [1,2,3,4,5], k = 2
 * @output [4,5,1,2,3]
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let cur = head;
  // 因为存在k > 长度的场景,可以构造环来移动。构造环以后对k做取余操作,就是最终要移动的步骤
  let length = 1;
  while (cur.next) {
    cur = cur.next;
    length++;
  }
  cur.next = head;
  // step就是向右平移的步数
  const step = k % length;
  // 链表向右移动step步数,相当于头指针移动 length - step步数,
  const nodeStep = length - step;
  // NOTE: 这里要少移动一步,移动到当前节点时无法断开环,在prev节点就可以终止了
  for (let i = 1; i < nodeStep; i++) {
    head = head.next;
  }
  const temp = head.next;
  head.next = null;
  return temp;
};
