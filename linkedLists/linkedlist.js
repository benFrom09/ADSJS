const Node = require('../node/node');

class LinkedList
{
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        console.log(this.head);

        if(currentHead) {
            this.head.setNextNode(currentHead);
        }
    }
    addToTail(data) {
        let tail = this.head;
        if(!tail) {
            this.head = new Node(data);
        } else {
            while(tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if(!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<Head> ';
        while(currentNode) {
            output += currentNode.data.toString() + '';
            currentNode = currentNode.getNextNode();
        }
        output += '<Tail>';
        console.log(output);
    }
}

module.exports = LinkedList;