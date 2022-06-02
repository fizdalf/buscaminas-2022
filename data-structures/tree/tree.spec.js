import {Node, Tree} from "./tree.js"


describe("pre order", () =>{
    it('should return data of the root', function () {
        const tree = new Tree();
        tree.insert(1)
        expect(tree.preOrder()).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        expect(tree.preOrder()).toStrictEqual([1,2]);
    });
    it('should return the data of the three nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        expect(tree.preOrder()).toStrictEqual([1,2,3]);
    });
    it('should return the data of the four nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        expect(tree.preOrder()).toStrictEqual([1,2,3,4]);
    });
    it('should return the data of the five nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        expect(tree.preOrder()).toStrictEqual([1,2,3,4,5]);
    });
    it('should return the data of the seven nodes', function () {
        const tree = new Tree();
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        tree.insert(7)
        tree.insert(8)
        tree.insert(9)
        tree.insert(10)
        expect(tree.preOrder()).toStrictEqual([4,5,6,7,8,9,10]);
    });
});

describe("in order", () =>{
    it('should return data of the root', function () {
        const tree = new Tree();
        tree.insert(1)
        expect(tree.inOrder()).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        expect(tree.inOrder()).toStrictEqual([1,2]);
    });
    it('should return the data of the three nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        expect(tree.inOrder()).toStrictEqual([1,2,3]);
    });
    it('should return the data of the four nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        expect(tree.inOrder()).toStrictEqual([1,2,3,4]);
    });
    it('should return the data of the five nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        expect(tree.inOrder()).toStrictEqual([1,2,3,4,5]);
    });
    it('should return the data of the six nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        expect(tree.inOrder()).toStrictEqual([1,2,3,4,5,6]);
    });
    it('should return the data of the seven nodes', function () {
        const tree = new Tree();
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        tree.insert(7)
        tree.insert(8)
        tree.insert(9)
        tree.insert(10)
        expect(tree.inOrder()).toStrictEqual([4,5,6,7,8,9,10]);
    });
})
describe("post order", () =>{
    it('should return data of the root', function () {
        const tree = new Tree();
        tree.insert(1)
        expect(tree.postOrder()).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        expect(tree.postOrder()).toStrictEqual([2,1]);
    });
    it('should return the data of the three nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(3)
        tree.insert(2)
        expect(tree.postOrder()).toStrictEqual([2,3,1]);
    });
    it('should return the data of the four nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        expect(tree.postOrder()).toStrictEqual([4,3,2,1]);
    });
    it('should return the data of the five nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        expect(tree.postOrder()).toStrictEqual([5,4,3,2,1]);
    });
    it('should return the data of the six nodes', function () {
        const tree = new Tree();
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        expect(tree.postOrder()).toStrictEqual([6,5,4,3,2,1]);
    });
    it('should return the data of the seven nodes', function () {
        const tree = new Tree();
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        tree.insert(7)
        tree.insert(8)
        tree.insert(9)
        tree.insert(10)
        expect(tree.postOrder()).toStrictEqual([10,9,8,7,6,5,4]);
    });
});

describe("depth", ()=> {
    it("should return 0 when only have root", () => {
        const root = new Node(234);
        expect(root.depth(root, root)).toBe(0);
    });
    it("should return 1 when the root has one node at the left", () => {
        const root = new Node(234);
        root.left = new Node(1)
        expect(root.left.depth(root)).toBe(1);
    });
    it("should return 1 when the root has one node at the right", () => {
        const root = new Node(234);
        root.right = new Node(1);
        expect(root.right.depth(root)).toBe(1);
    });
    it("should return 2 when the node have this deep", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.left.left = new Node(3984);
        expect(root.left.left.depth(root)).toBe(2);
    });
    it("should return 2 when the node right have this deep", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(3984);
        expect(root.right.left.depth(root)).toBe(2);
    });
    it("should return 2 when the node right right have this deep", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(498);
        root.right.right = new Node(3984);
        expect(root.right.right.depth(root)).toBe(2);
    });
    it("should return 3 when the node right have this deep", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(498);
        root.right.left.right = new Node(38274);
        root.right.right = new Node(3984);
        expect(root.right.left.right.depth(root)).toBe(3);
    });
});

describe("height", ()=> {
    it("should return 0 when only have root", () => {
        const root = new Node(234);
        expect(root.height()).toBe(0);
    });
    it("should return 1 when the root has one node at the left", () => {
        const root = new Node(234);
        root.left = new Node(1)
        expect(root.height()).toBe(1);
    });
    it("should return 1 when the root has one node at the right", () => {
        const root = new Node(234);
        root.right = new Node(1);
        expect(root.height()).toBe(1);
    });
    it("should return 2 when the node have this height", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.left.left = new Node(3984);
        expect(root.height()).toBe(2);
    });
    it("should return 2 when the node right have this height", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(3984);
        expect(root.height()).toBe(2);
    });
    it("should return 2 when the node right right have this height", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(498);
        root.right.right = new Node(3984);
        expect(root.height()).toBe(2);
    });
    it("should return 3 when the node right have this height", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.right.left = new Node(498);
        root.right.left.right = new Node(38274);
        root.right.right = new Node(3984);
        expect(root.height()).toBe(3);
    });
});

describe("Breadth search",  () => {
    it('should travel the levels of tree', function (){
        const tree = new Tree();
        tree.insert(1)
        expect(tree.breadthSearch()).toStrictEqual([1])
    });
    it('should travel the two levels of tree', function (){
        const tree = new Tree();
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        expect(tree.breadthSearch()).toStrictEqual([2,1,3])
    });
    it('should return the nodes data with breadth search', function (){
        const tree = new Tree();
        tree.insert(4)
        tree.insert(1)
        tree.insert(2)
        tree.insert(5)
        tree.insert(3)
        tree.insert(6)
        tree.insert(7)
        expect(tree.breadthSearch()).toStrictEqual([4,1,5,2,6,3,7])
    });

});

describe("is full tree" , () =>{
   it("should return true when the tree only have root", () => {
       const tree = new Tree();
       tree.insert(1243)
       expect(tree.isFullTree()).toBe(true);
   });
    it("should return false when the tree have a node in the left", () => {
        const tree = new Tree();
        tree.insert(1243)
        tree.insert(23)
        expect(tree.isFullTree()).toBe(false);
    });
    it("should return false when the tree have a node in the right", () => {
        const tree = new Tree();
        tree.insert(1243)
        tree.insert(12433)
        expect(tree.isFullTree()).toBe(false);
    });
    it("should return true when the tree have two child nodes", () => {
        const tree = new Tree();
        tree.insert(1243)
        tree.insert(12)
        tree.insert(12433)
        expect(tree.isFullTree()).toBe(true);
    });
    it("should return false when the tree have two child nodes and one sub node", () => {
        const tree = new Tree();
        tree.insert(12)
        tree.insert(11)
        tree.insert(124)
        tree.insert(10)
        expect(tree.isFullTree()).toBe(false);
    });
});
describe("is perfect tree", () => {
   it("this tree should be perfect", () => {
       const root = new Node(1);
       const tree = new Tree(root);
       expect(tree.isPerfectTree(root)).toBe(true);
   });
   it("this tree should be not perfect", () => {
       const root = new Node(1);
       root.left = new Node(2)
       const tree = new Tree(root);
       expect(tree.isPerfectTree(root)).toBe(false);
   });
    it("should return true when the tree have two child nodes", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(45)
        root.right = new Node(3);
        root.right.right = new Node(78)
        const tree = new Tree(root);
        expect(tree.isPerfectTree(root)).toBe(false);
    });
    it("this tree is full but is not perfect", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.right = new  Node(5);
        root.left.left = new Node(4);
        root.right = new Node(3);
        const tree = new Tree(root);
        expect(tree.isPerfectTree(root)).toBe(false);
    });
    it("this tree is full but is not perfect", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.right = new  Node(5);
        root.left.left = new Node(4);
        root.right = new Node(3);
        root.right.right = new Node(6)
        root.right.left = new Node(7)
        const tree = new Tree(root);
        expect(tree.isPerfectTree(root)).toBe(true);
    });
});
describe("rotation", () => {
    it('should rotate to left side', () => {
        let X = new Node("X");
        let Y = new Node("Y");
        let A = new Node("A");
        let B = new Node("B");
        let C = new Node("C");
        X.left = A;
        X.right = Y;
        Y.left = B;
        Y.right = C;
        const tree = new Tree();
        const newRoot = tree.rotateLeft(X);
        expect(newRoot).toBe(Y);
        expect(newRoot.left).toBe(X);
        expect(newRoot.right).toBe(C);
        expect(newRoot.left.left).toBe(A);
        expect(newRoot.left.right).toBe(B);
    });
    it('should rotate to right side', () => {
        let X = new Node("X");
        let Y = new Node("Y");
        let A = new Node("A");
        let B = new Node("B");
        let C = new Node("C");
        Y.left = X;
        Y.right = C;
        X.left = A;
        X.right = B;
        const tree = new Tree();
        const newRoot = tree.rotateRight(Y);
        expect(newRoot).toBe(X);
        expect(newRoot.left).toBe(A);
        expect(newRoot.right).toBe(Y);
        expect(newRoot.right.left).toBe(B);
        expect(newRoot.right.right).toBe(C);
    });
});
describe("insert", () => {
    it('should insert a element less then right node', function () {
        const tree = new Tree()
        tree.insert(10)
        tree.insert(7)
        tree.insert(11)
        tree.insert(1)
        expect(tree.inOrder()).toStrictEqual([1,7,10,11])
    });
    it('should insert a element more high then left node', function(){
        const tree = new Tree();
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        tree.insert(21);
        expect(tree.inOrder()).toStrictEqual([5,7,20,21])
    });
    it('should insert two elements less than right node', function () {
        const tree = new Tree();
        tree.insert(30);
        tree.insert(23);
        tree.insert(17);
        tree.insert(45);
        tree.insert(49);
        tree.insert(5);
        expect(tree.inOrder()).toStrictEqual([5,17,23,30,45,49])
    });
    it('should return true when the first number is insert', function () {
        const tree = new Tree();
        expect(tree.insert(30)).toBe(true);
    });
    it('should return true when a number is insert', function () {
        const tree = new Tree();
        tree.insert(30)
        expect(tree.insert(35)).toBe(true);
    });
    it('should return false when try insert a number who exists', function () {
        const tree = new Tree();
        tree.insert(30)
        expect(tree.insert(30)).toBe(false);
    });
    it('should return false when a element is repeated', function () {
        const tree = new Tree();
        tree.insert(91);
        tree.insert(34);
        tree.insert(82);
        tree.insert(72);
        tree.insert(902);
        tree.insert(3);
        expect(tree.insert(902)).toBe(false);
    });
    it('should return true when a element is not repeated', function () {
        const tree = new Tree();
        tree.insert(91);
        tree.insert(34);
        tree.insert(82);
        tree.insert(72);
        tree.insert(902);
        tree.insert(3);
        expect(tree.insert(90)).toBe(true);
    });
    it('should return false when a element at the left is repeat', function () {
        const tree = new Tree();
        tree.insert(91);
        tree.insert(34);
        expect(tree.insert(34)).toBe(false);
    });
});
describe("exists", () => {
    it("should return true when the data exists", () => {
        const tree = new Tree();
        tree.insert(1);
        expect(tree.exists(1)).toBe(true);
    });
    it("should return false when the data not exists", () => {
        const tree = new Tree()
        tree.insert(99)
        expect(tree.exists(88)).toBe(false);
    });
    it("should return true when the second data exists", () => {
        const tree = new Tree()
        tree.insert(1)
        tree.insert(2)
        expect(tree.exists(2)).toBe(true);
    });
    it("should return false when the third data not exists", () => {
        const tree = new Tree()
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        expect(tree.exists(4)).toBe(false);
    });
    it("should return false when the fourth data not exists", () => {
        const tree = new Tree()
        tree.insert(5)
        tree.insert(4)
        tree.insert(3)
        expect(tree.exists(2)).toBe(false);
    });
});