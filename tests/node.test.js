const Node = require('../node/node');


const node1 = new Node('dogs');
const node2 = new Node('cats');


describe('set correct next node', () => {
    test('should return correct data structure', () => {

        node1.setNextNode(node2);

        expect(node1.next).toEqual({
            'data': 'cats',
            'next': null
        });
    });

    test('should return Error', () => {
        expect(() => {
            node1.setNextNode([])
        }).toThrowError(new Error("next node must be an instace of Node class"));
    });

});

describe('Get correct node', () => {
    
    node1.setNextNode(node2);
    expect(node1.getNextNode()).toEqual(node2);
})







