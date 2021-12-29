// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const l1 = { val: 9, next: { val: 9, next: { val: 9, next: {val: 9, next: { val: 9, next: null }}}}};
const l2 = { val: 9, next: { val: 9, next: null } };

var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode(0);
    let a = l1, b = l2;
    let k = 0, sum, x, y;
    let result = l3;
    while (a != null || b != null ) {
        console.log(k);
        if(a != null){
            x = a.val;
            a = a.next;
            console.log(a);
        } else {
            x = 0;
        }
        if(b !=null){
            y = b.val;
            b = b.next;
            console.log(b);
        }  else {
            y = 0;
        }

        sum = x + y + k;

        l3.next = new ListNode(sum % 10);
        l3 = l3.next;
        
        if(sum > 9){
            k = 1;
        } else {
            k = 0;
        }

        if(k) {
            l3.next = new ListNode(k);
        }
    console.log(l3);
    }
    return result.next;
};

console.log(addTwoNumbers(l1,l2));
