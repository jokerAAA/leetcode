/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @desc 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  /**
   * 这个题的思路比较巧妙,记录下可以参考下
   * 1. 构造一组val相同的链表,顺序保持在原地链表之后[1,2,3] => [1,1',2,2',3,3']
   * 2. 迭代新链表,修改random指针
   * 3. 断开为两个链表: [1,2,3][1',2',3'],最终得到结果链表
   *
   */

  if (!head) {
    return head;
  }
  // 第一次迭代时要复制节点,所以node = node.next.next
  for (let node = head; node != null; node = node.next.next) {
    const newNode = new Node(node.val, node.next, null);
    node.next = newNode;
  }
  // 第二次迭代时修改random指针
  for (let node = head; node != null; node = node.next.next) {
    node.next.random = node.random ? node.random.next : null; //NOTE: 要取node.random.next 才是复制后的节点位置,比如1.random是3,3.next才是复制后的3'
  }
  const ans = new Node(null);
  cur = ans;
  // node对应是原始链表的修改过程123,cur对应新链表的拼接过程,所以循环结束后都要向前移动
  for (let node = head; node != null; node = node.next, cur = cur.next) {
    const newNode = node.next;
    node.next = node.next.next;
    cur.next = newNode;
  }
  return ans.next;
};
