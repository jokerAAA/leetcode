/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @desc 给你一个链表的头节点 head ，判断链表中是否有环。
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  if (!head.next) {
    return false;
  }
  /**
   * 链表存在环时快慢指针一定会相遇
   */
  let slow = head;
  let fast = slow.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// 用指针相遇的方案判断位置比较麻烦,不如用哈希表/集合
const isCycle = (head) => {
  if (!head) {
    return false;
  }
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
};
