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
        let lastNode = this.head;
        while(lastNode.next !== undefined){
            lastNode = lastNode.next;
        }
        lastNode.next = new Node(data)
    }

    pop() {
        let lastNode = this.head;
        let penultimateNode;
        while(lastNode.next !== undefined){
            penultimateNode = lastNode;
            lastNode = lastNode.next;
        }
        if(penultimateNode !== undefined){
            penultimateNode.next = undefined;
        }
        return lastNode.data;
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