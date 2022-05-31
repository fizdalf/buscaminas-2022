export class Queue {
    queue = [];

    enqueue(item1) {
        this.queue.push(item1);
    }

    dequeue() {
        return this.queue.shift();
    }
    size(){
        return this.queue.length;
    }
}