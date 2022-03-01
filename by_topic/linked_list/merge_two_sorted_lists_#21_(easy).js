/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  let resultList = new ListNode();
  let head = resultList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      resultList.next = l1;
      l1 = l1.next;
    } else {
      resultList.next = l2;
      l2 = l2.next;
    }

    resultList = resultList.next;
  }

  resultList.next = l1 ? l1 : l2;

  return head.next;
};
