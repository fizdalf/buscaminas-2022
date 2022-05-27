import {Node} from "./tree.js"
import {Tree} from "./tree.js"



describe("pre order", () =>{
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

describe("in order", () =>{
    it('should return data of the root', function () {
        const root = new Node(1);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([2,1]);
    });
    it('should return the data of the three nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([2,1,3]);
    });
    it('should return the data of the four nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.right = new Node(4);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([3,2,1,4]);
    });
    it('should return the data of the five nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([3,2,4,1,5]);
    });
    it('should return the data of the six nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        root.right.left = new Node(6);
        const tree = new Tree();
        expect(tree.inOrder(root)).toStrictEqual([3,2,4,1,6,5]);
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
        expect(tree.inOrder(root)).toStrictEqual([6,5,7,4,9,8,10]);
    });
})
describe("post order", () =>{
    it('should return data of the root', function () {
        const root = new Node(1);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([1]);
    });
    it('should return the data of the two nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([2,1]);
    });
    it('should return the data of the three nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([2,3,1]);
    });
    it('should return the data of the four nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.right = new Node(4);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([3,2,4,1]);
    });
    it('should return the data of the five nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([3,4,2,5,1]);
    });
    it('should return the data of the six nodes', function () {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.right = new Node(4);
        root.right = new Node(5);
        root.right.left = new Node(6);
        const tree = new Tree();
        expect(tree.postOrder(root)).toStrictEqual([3,4,2,6,5,1]);
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
        expect(tree.postOrder(root)).toStrictEqual([6,7,5,9,10,8,4]);
    });
});

describe("has deep", ()=> {
    it("should return 0 when only have root", () => {
        const root = new Node(234);
        const tree = new Tree();
        expect(tree.hasDeep(root, root)).toBe(0);
    });
    it("should return 1 when the root has one node at the left", () => {
        const root = new Node(234);
        root.left = new Node(1)
        const tree = new Tree();
        expect(tree.hasDeep(root, root.left)).toBe(1);
    });
    it("should return 1 when the root has one node at the right", () => {
        const root = new Node(234);
        root.right = new Node(1);
        const tree = new Tree();
        expect(tree.hasDeep(root, root.right)).toBe(1);
    });
    it("should return 2 when the node have this deep", () => {
        const root = new Node(234);
        root.left = new Node(183);
        root.right = new Node(1);
        root.left.left = new Node(3984);
        const tree = new Tree();
        expect(tree.hasDeep(root, root.left.left)).toBe(2);
    });
});



describe("Breadth search",  () => {
    it('should travel the levels of tree', function (){
        const root = new Node(1);
        const tree = new Tree();
        expect(tree.breadthSearch(root)).toStrictEqual([1])
    });
    it('should travel the two levels of tree', function (){
        const root = new Node(1);
        root.left = new Node(2)
        root.right = new Node(3)
        const tree = new Tree();
        expect(tree.breadthSearch(root)).toStrictEqual([1,2,3])
    });
    it('should return the nodes data with breadth search', function (){
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7)
        const tree = new Tree();
        expect(tree.breadthSearch(root)).toStrictEqual([1,2,3,4,5,6,7])
    });

});



describe("is full tree" , () =>{
   it("should return true when the tree only have root", () => {
       const root = new Node(1);
       const tree = new Tree();
       expect(tree.isFullTree(root)).toBe(true);
   });
    it("should return false when the tree have a node in the left", () => {
        const root = new Node(1);
        root.left = new Node(123)
        const tree = new Tree();
        expect(tree.isFullTree(root)).toBe(false);
    });
    it("should return false when the tree have a node in the right", () => {
        const root = new Node(1);
        root.right = new Node(123)
        const tree = new Tree();
        expect(tree.isFullTree(root)).toBe(false);
    });
    it("should return true when the tree have two child nodes", () => {
        const root = new Node(1);
        root.left = new Node(123);
        root.right = new Node(123);
        const tree = new Tree();
        expect(tree.isFullTree(root)).toBe(true);
    });
    it("should return false when the tree have two child nodes and one sub node", () => {
        const root = new Node(1);
        root.left = new Node(123);
        root.right = new Node(847584);
        root.left.left = new Node(93894);
        const tree = new Tree();
        expect(tree.isFullTree(root)).toBe(false);
    });
});
describe("is perfect tree", () => {
   it("this tree should be perfect", () => {
       const root = new Node(1);
       const tree = new Tree();
       expect(tree.isPerfectTree(root)).toBe(true);
   });
   it("this tree should be not perfect", () => {
       const root = new Node(1);
       root.left = new Node(2)
       const tree = new Tree();
       expect(tree.isPerfectTree(root)).toBe(false);
   });
    it("should return true when the tree have two child nodes", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(45)
        root.right = new Node(3);
        root.right.right = new Node(78)
        const tree = new Tree();
        expect(tree.isPerfectTree(root)).toBe(false);
    });
    it("this tree is full but is not perfect", () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.right = new  Node(5);
        root.left.left = new Node(4);
        root.right = new Node(3);
        const tree = new Tree();
        expect(tree.isPerfectTree(root)).toBe(false);
    });
});