/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const ans = new ListNode(null, head);
  let cur = ans;
  while (cur.next && cur.next.next) {
    const node1 = cur.next;
    const node2 = cur.next.next;
    cur.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    cur = node1;
  }
  return ans.next;
};

const swip = (head) => {
  if (!head || !head.next) {
    return head;
  }
  if (!head.next) {
    return head;
  }
  const ans = new ListNode(null, head);
  let cur = ans;
  while (cur.next && cur.next.next) {
    const node1 = cur.next;
    const node2 = cur.next.next;
    // 依次翻转链表 node1 -> node2.next, node2.next -> node1, cur.next -> node2, cur = node1;
    node1.next = node2.next;
    node2.next = node1;
    cur.next = node2;
    cur = node1;
  }
  return ans.next;
};
