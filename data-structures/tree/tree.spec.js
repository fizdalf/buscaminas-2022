class Node{
    data;
    left;
    right;
    constructor(data) {
        this.data = data
    }
}

class Tree{
    allNodesTree = [];
    preOrder(root){
        this.allNodesTree.push(root.data);
        if(root.left !== undefined){
            this.preOrder(root.left);
        }
        if(root.right !== undefined){
            this.preOrder(root.right);
        }
        return this.allNodesTree;
    }
}

describe("tree", () =>{
    it('should return data of the root', function () {
        const root = new Node(1);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1,2]);
    });
    it('should return the data of the three nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1,2,3]);
    });
    it('should return the data of the four nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.right = new Node(4);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1,2,3,4]);
    });
    it('should return the data of the five nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1,2,3,4,5]);
    });
    it('should return the data of the six nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        root.right.left = new Node(6);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([1,2,3,4,5,6]);
    });
    it('should return the data of the seven nodes', function () {
        const root = new Node(4);
        root.left = new Node(5);
        root.left.left = new Node(6);
        root.left.right = new Node(7);
        root.right = new Node(8);
        root.right.left = new Node(9);
        root.right.right = new Node(10);
        const tree = new Tree();
        expect(tree.preOrder(root)).toStrictEqual([4,5,6,7,8,9,10]);
    });
});