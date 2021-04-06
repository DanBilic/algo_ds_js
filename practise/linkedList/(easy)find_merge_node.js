/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let headAcurrent = headA,
    headBcurrent = headB;

  while (headAcurrent !== headBcurrent) {
    if (headAcurrent === null) {
      headAcurrent = headB;
    } else {
      headAcurrent = headAcurrent.next;
    }
    if (headBcurrent === null) {
      headBcurrent = headA;
    } else {
      headBcurrent = headBcurrent.next;
    }
  }

  return headAcurrent.data;
}
