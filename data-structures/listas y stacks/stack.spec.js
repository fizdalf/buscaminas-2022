class Node{
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}

class Stack {
    head;
    push(data) {
        if (this.head === undefined){
            this.head = new Node(data);
            return;
        }
        let previusNode = this.head;
        this.head = new Node(data);
        this.head.next = previusNode;
    }

    pop() {
        let lastData = this.head.data;
        this.head = this.head.next;
        return lastData;
    }
}



describe("stack list", () => {
    it.each([
            [1],
            ["a"],
            [{}],
            [() => {
            }]
        ]
    )('should return the only element in the stack', (expected) => {
        const stack = new Stack();
        stack.push(expected);
        const result = stack.pop();
        expect(result).toBe(expected);
    });

    it('should return the last item inserted', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
    });
    it('should return the penultimate item inserted', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        expect(stack.pop()).toBe(1);
    });
});