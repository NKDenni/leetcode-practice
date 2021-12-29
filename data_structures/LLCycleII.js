// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


//hash table
// Use when space is available and a non issue

var detectCycle = function (head) {
// javascript set does not allow for duplicate entries
    let index = new Set();
    let runner = head;
    // if the head is null or head.next is null return null
    if (!head || !head.next) {
        return null;
    }
    // as long as runner doesnt equal null check to see if it already exists in our index set.
    while (runner) {
        if(index.has(runner)){
        return runner;
        }
        index.add(runner);
        runner = runner.next;
    }
    return null;
};


// two pointers attempt
// Good if space is an issue and better to work in place
var detectCycle = function (head) {
    let pRun1 = head, pRun2 = head;
    //Refactored to start the while loop as long as pRun2 and pRun2.next are true instead of checking if null
    while (pRun2 && pRun2.next) {
        pRun1 = pRun1.next;
        pRun2 = pRun2.next.next;
        if (pRun1 === pRun2) {
            pRun1 = head;
            while (pRun1 != pRun2) {
                pRun1 = pRun1.next;
                pRun2 = pRun2.next;
            }
            return pRun1;
        }
    }
    return null;
};