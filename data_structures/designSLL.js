/**
Design your implementation of the linked list.You can choose to use a singly or doubly linked list. A node in a singly linked list should have two attributes: val and next.val is the value of the current node, and next is a pointer / reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0 - indexed.
*/


var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index === 0) {
        if (!this.head) {
            return -1;
        } else {
            return this.head.val;
        }
    } else if (index >= this.length) {
        console.log(`Invalid index, list only ${this.length} indicies long.`);
        return -1;
    } else {
        let curNode = this.head;
        let iCount = 0;

        while (iCount < index) {
            curNode = curNode.next;
            iCount++;
        }
        return curNode.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let cur = this.head;
    let node = {
        "val": val,
        "next": cur,
    }
    this.head = node;
    this.length++;
    console.log(this.length);
    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = {
        "val": val,
        "next": null
    }

    if (!this.head) {
        this.head = node;
    } else {
        let curNode = this.head;
        while (curNode.next != null) {
            curNode = curNode.next;
        }
        curNode.next = node;
    }
    this.length++;
    // console.log(this.length);
    return this;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let node = {
        "val": val,
        "next": null
    };

    if (index === 0) {
        this.addAtHead(val);
        if (index === this.length - 1) {
            this.addAtTail(val);
        }
    } else if (index > this.length) {
        console.log(`Invalid index, list only ${this.length} indicies long.`);
        return -1;
    } else {
        let prevNode;
        let curNode = this.head;
        let iCount = 0;

        while (iCount < index) {
            prevNode = curNode;
            curNode = prevNode.next;
            iCount++;
        }
        prevNode.next = node;
        if (curNode) {
            node.next = curNode;
        } else {
            node.next = null;
        }
    }
    this.length++;
    // console.log(this.length);
    return this;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) {
        console.log(`Invalid index, list only ${this.length} indicies long.`);
        return -1;
    }
    if (!this.head) {
        console.log('Nothing here')
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let prevNode;
        let curNode = this.head;
        let iCount = 0;

        while (iCount < index) {
            prevNode = curNode;
            curNode = prevNode.next;
            iCount++;
        }
        if (curNode == null) {
            prevNode.next = null;
        } else {
            prevNode.next = curNode.next;
        }
    }
    this.length--;
    // console.log(this.length);
    return this;

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */