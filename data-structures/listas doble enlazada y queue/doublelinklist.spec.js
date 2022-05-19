class Node{
    data;
    next;
    previous;
    constructor(data, previus = undefined) {
        this.data = data;
        this.previous = previus;
    }
}


class Queue {
    head;
    tail;
    enqueue(data) {
        if(this.head === undefined){
            this.head = new Node(data);
            return;
        }
        if(this.tail === undefined){
            this.tail = new Node(data, this.head);
            this.head.next = this.tail;
            return;
        }
        this.tail = new Node(data, this.tail)
    }

    dequeue() {
        let node = this.head.data;
        this.head = this.head.next;
        if(this.head !== undefined){
            this.head.previus = undefined;
        }
        return node;
    }
}


describe('double link list', () => {
    it.each([
        [1]
            [2]
    ])("should return the only item", (item) => {
        const queue = new Queue();
        queue.enqueue(item);
        expect(queue.dequeue()).toBe(item)
    });

    it("should return only the first item", () => {
        const queue = new Queue();
        queue.enqueue(7);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(7)
    });

    it("should return the second item after return the first item", () => {
        const queue = new Queue();
        queue.enqueue(7);
        queue.enqueue(2);
        queue.dequeue();
        queue.enqueue("hola")
        expect(queue.dequeue()).toBe(2)

    });
});