// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;

  let curr1 = head1;
  let curr2 = head2;
  let dummyHead = new Node(null);
  let tail = dummyHead;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }

  tail.next = curr1 || curr2;

  return dummyHead.next;
};

module.exports = {
  mergeLists,
};
