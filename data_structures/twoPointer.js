// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Definition for singly-linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
    }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const head = {val: 4, next: {val:0, next:{ val: 3, next: {val: 9, next:{}}}}};

var hasCycle = function (head) {
    let pRun1 = head, pRun2 = head;

    while (pRun1 !== null && pRun2 !== null && pRun1.next !== null && pRun2.next !== null) {
        console.log(`1: ${pRun1.val} 2: ${pRun2.val}`)
        // Runner 1
        pRun1 = pRun1.next;
        // Runner 2
        pRun2 = pRun2.next.next;
        if (pRun1 === pRun2) {
            return true;
        }
    }
    return false;
};


console.log(hasCycle(head));