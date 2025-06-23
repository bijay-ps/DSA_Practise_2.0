// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// Apporach 1. Recursive 
/*const getNodeValue = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;

    return getNodeValue(head.next, index - 1);
}*/
  
// Apporach 2. Iterative
const getNodeValue = (head, index) => {
    if (head === null) return null;
    let current = head;
    let current_index = 0;
    while (current) {
        if(current_index === index) return current.val;
        current_index++;
        current = current.next
    }
    return null;
};