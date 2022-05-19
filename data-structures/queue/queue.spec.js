class Queue {
    queue = [];
    enqueue(item1) {
        this.queue.push(item1);
    }

    dequeue() {
        return this.queue.shift();
    }
}
describe('Queue', () => {
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