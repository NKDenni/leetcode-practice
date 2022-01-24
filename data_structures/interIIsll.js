// Given the heads of two singly linked - lists headA and headB, return the node at which the two lists intersect.If the two linked lists have no intersection at all, return null.

// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;

    if (p1 == null || p2 == null) {
        return null;
    }

    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;

        if (p1 == p2) {
            return p1;
        }
        if (p1 == null) {
            p1 = headB;
        }
        if (p2 == null) {
            p2 = headA;
        }
    }
    return p1;
};