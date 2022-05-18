// LIFO (Last In First Out)
// FIFO (First In First Out)

class Queue {
    queue = [];
    push(item1) {
        this.queue.push(item1);
    }

    get() {
        return this.queue.shift();
    }
}
describe('Queue', () => {
    it.each([
        [1]
        [2]
    ])("should return the only item", (item) => {
        const queue = new Queue();
        queue.push(item);
        expect(queue.get()).toBe(item)
    });

    it("should return only the first item", () => {
        const queue = new Queue();
        queue.push(7);
        queue.push(2);
        expect(queue.get()).toBe(7)
    });

    it("should return the second item after return the first item", () => {
        const queue = new Queue();
        queue.push(7);
        queue.push(2);
        queue.get();
        expect(queue.get()).toBe(2)
    });
});