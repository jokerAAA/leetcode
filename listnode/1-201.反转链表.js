/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 翻转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let cur = head;
  let prev = null;
  while (cur) {
    // 翻转链表只要考虑相邻两个结点的next即可
    // 即cur.next = prev 这里是核心,剩下是为了不断平移相邻结点
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

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
const reverse = (head) => {
  if (!head || !head.next) {
    return head;
  }
  // 这里的newHead可以想象成新链表的头指针,会在递归中不停返回,但是一直是同一个头指针
  const newHead = reverse(head.next);
  // 这里用1-2-3-4的例子来说明,通过不停压栈时这里的head是3,newHead是4
  // 所以先将4.next指向3
  head.next.next = head;
  // 由于3.next =4, 4.next = 3,这里出现了环,所以将3.next置空
  head.next = null;
  return newHead;
};

/**
 * 迭代和递归的处理顺序是反的,以[1,2,3,4]为例
 * 1. 迭代处理的顺序是[null,1],[1,2],[2,3],[3,4]不停的交换位置,最后完成翻转
 * 2. 递归的处理是不停的压栈,处理的顺序是[4],[4,3],[4,3,2],[4,3,2,1]
 */
