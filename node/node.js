 class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node = Node) {

        if(node instanceof Node || node === null ) {
            this.next = node;
            return;
        }

        throw new Error("next node must be an instace of Node class");
    }

    getNextNode() {
        return this.next;
    }
}

//HOW TO USE 
/*
const node1 = new Node('dogs');
const node2 = new Node('cats');
const node3 = new Node('fishes');
const node4 = new Node('frogs');

node1.setNextNode(node2);
node2.setNextNode(node3);
node3.setNextNode(node4);


let current = node1;

while(current) {
    console.log(current.data);
    current = current.getNextNode() ;

}
*/

module.exports = Node;