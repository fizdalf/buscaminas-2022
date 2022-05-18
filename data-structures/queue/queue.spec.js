// LIFO (Last In First Out)
// FIFO (First In First Out)

class Queue {

    push(item1) {

    }

    get() {
        return 1;
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
    })
})