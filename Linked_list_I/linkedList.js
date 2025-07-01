class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Linkedlist {
    constructor(value) {
    // Creates a new NODE
    const newNode = new Node(value);
    this.head = newNode;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}