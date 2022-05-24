class Tree{
    data;
    left;
    right;
    allDataTree = [];
    constructor(data) {
        this.data = data
    }
    preOrder(root){
        if (this === root){
            this.allDataTree.push(this.data)
            if(this.left !== undefined){
                this.left.preOrder(this)
            }
            if(this.right !== undefined){
                this.right.preOrder(this)
            }
            return this.allDataTree
        }
        root.allDataTree.push(this.data)
        if(this.left !== undefined){
            this.left.preOrder(root)
        }
        if(this.right !== undefined){
            this.right.preOrder(root)
        }
    }
}


describe("tree", () =>{
    it("should be the data root equal an one", () => {
        const tree = new Tree(1);
        expect(tree.data).toBe(1);
    });
    it("should be the data root equal a two", () => {
        const tree = new Tree(2);
        expect(tree.data).toBe(2);
    });
    it("should be the data of the left at the root equal a seven", () => {
        const tree = new Tree(2);
        tree.left = new Tree(7);
        expect(tree.left.data).toBe(7);
    });
    it("should be the data of the right at the root equal an eight", () => {
        const tree = new Tree(2);
        tree.right = new Tree(8);
        expect(tree.right.data).toBe(8);
    });
    it("should return an array with all data of the tree in preOrder", () => {
        const tree = new Tree(2);
        tree.left =  new Tree(7);
        tree.right = new Tree(8);
        tree.left.left =  new Tree(6);
        tree.left.right =  new Tree(9);
        expect(tree.preOrder(tree)).toStrictEqual([2,7,6,9,8]);
    });
    it.only("should return an array with all data of the tree in preOrder", () => {
        const tree = new Tree(2);
        tree.left =  new Tree(7);
        tree.right = new Tree(8);
        tree.left.left =  new Tree(6);
        tree.left.right =  new Tree(9);
        tree.left.right.right =  new Tree(17);
        tree.left.left.left =  new Tree(29);
        tree.left.left.right =  new Tree(99);
        tree.right.right =  new Tree(90);
        tree.right.left =  new Tree(74);
        tree.left.right.left =  new Tree(55);
        expect(tree.preOrder(tree)).toStrictEqual([2,7,6,29,99,9,55,17,8,74,90]);
    });
});