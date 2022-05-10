import {Stack} from "./stack.js";

describe("stack", () => {


    it.each([
            [1],
            ["a"],
            [{}],
            [() => {
            }]
        ]
    )

    ('should return the only element in the stack', (expected) => {
        const stack = new Stack();

        stack.push(expected);
        const result = stack.pop();
        expect(result).toBe(expected);
    });

    it('should return the last item inserted', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        const result = stack.pop();
        expect(result).toBe(2);
    });

    it('should tell the stack is empty when there are no elements in the stack', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
    it('should tell the stack is not empty when there are elements in the stack', () => {
        const stack = new Stack();
        stack.push("test");
        expect(stack.isEmpty()).toBe(false);
    });

})