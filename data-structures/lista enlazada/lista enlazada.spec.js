class Node{
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}

describe("Nodes", () => {
    it('should return the first data node', function () {
        const node = new Node(1)
        expect(node.data).toBe(1)
    });

    it("should return the second data node", function () {
        const node = new Node(17)
        node.next = new Node(37)
        expect(node.next.data).toBe(37)
    });
})

