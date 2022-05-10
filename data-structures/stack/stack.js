export class Stack {
    stack = [];

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}