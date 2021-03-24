const LinkedList = require('../linkedLists/linkedlist');



const linked = new LinkedList();
const data = [1, 2, 3, 4, 5];

describe('Add to head ', () => {
    test('shoud add node to head of linked list', () => {
        linked.addToHead(data);
        expect(linked.head).toEqual({
            data: data,
            next: null
        });
        linked.addToHead({ "name": "FirstName" });
        expect(linked.head).toEqual({
            data: { "name": "FirstName" },
            next:
            {
                data: data,
                next: null
            }

        });
    });

});

describe('Add to tail ', () => {
    test('shoud add node to tail of linked list', () => {
        linked.addToTail("Hello");
        expect(linked.head).toEqual({
            data: { "name": "FirstName" },
            next:
            {
                data: data,
                next: {
                    data: "Hello",
                    next: null
                }
            }

        });
        linked.addToTail("world");
        expect(linked.head).toEqual(
            {
                data: { "name": "FirstName" },
                next:
                {
                    data: data,
                    next: {
                        data: "Hello",
                        next: {
                            data: "world",
                            next: null
                        }
                    }
                }
            }

        );
    });

});

describe('remove head of linkedList', () => {

    test('should remove head', () => {
        const removed = linked.removeHead();
        expect(removed).toEqual(
            { "name": "FirstName" }
        );

        expect(linked.head).toEqual(
            {
                data: data,
                next: {
                    data: "Hello",
                    next: {
                        data: "world",
                        next: null
                    }
                }
            }

        );
    });
});

