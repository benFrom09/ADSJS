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


module.exports = Node;