/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  let current = head,
    next = null,
    prev = null;

  while (current !== null) {
    next = current.next;

    current.next = prev;
    current.prev = next;
    prev = current;
    current = next;
  }

  return prev;
}
