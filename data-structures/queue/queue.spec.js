// LIFO (Last In First Out)
// FIFO (First In First Out)

class Queue {
    queue;
    push(item1) {
        this.queue = item1
    }

    get() {
        return this.queue;
    }

}

describe('Queue', () => {
    it("should return one when one is the first item", () => {
        const queue = new Queue();
        queue.push(1);
        expect(queue.get()).toBe(1)
    });
    it("should return two when two is the first item", () => {
        const queue = new Queue();
        queue.push(2);
        expect(queue.get()).toBe(2)
    });
});