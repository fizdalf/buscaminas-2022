import {Queue} from "../queue/queue.js"
export class Node{
    data;
    left;
    right;
    deep = 0
    constructor(data) {
        this.data = data
    }
}

export class Tree{
    count = 0
    hasDeep(root, node){

    }
    preOrder(root){
        let nodes = [root.data];
        if(root.left !== undefined){
            nodes = nodes.concat(this.preOrder(root.left));
        }
        if(root.right !== undefined){
            nodes = nodes.concat(this.preOrder(root.right));
        }
        return nodes;
    }
    inOrder(root){
        let nodes = [];
        if(root.left !== undefined){
            nodes = nodes.concat(this.inOrder(root.left));
        }
        nodes = nodes.concat(root.left.right);
        if(root.right !== undefined){
            nodes = nodes.concat(this.inOrder(root.right));
        }
        return nodes;
    }
    postOrder(root){
        let nodes = [];
        if(root.left !== undefined){
            nodes = nodes.concat(this.postOrder(root.left));
        }
        if(root.right !== undefined){
            nodes = nodes.concat(this.postOrder(root.right));
        }
        nodes = nodes.concat(root.data);
        return nodes;
    }
    breadthSearch(root){
        const toExplorer = new Queue();
        let nodes = [];
        toExplorer.enqueue(root)

        while(true){
            let actualNode = toExplorer.dequeue()
            if(actualNode === undefined){
                break;
            }
            if (actualNode.left !== undefined){
                toExplorer.enqueue(actualNode.left)
            }
            if (actualNode.right !== undefined){
                toExplorer.enqueue(actualNode.right)
            }
            nodes = nodes.concat(actualNode.data)
        }
        return nodes
    }
    isFullTree(root){
        const doesNotHaveChildren = root.left === undefined && root.right === undefined;
        if (doesNotHaveChildren) {
            return true;
        }
        const doesNotHaveBoth = root.left === undefined || root.right === undefined;
        if (doesNotHaveBoth) {
            return false;
        }
        return this.isFullTree(root.left) && this.isFullTree(root.right);
    }
    isPerfectTree(root) {
        const nodes = this.preOrder(root);
        return nodes.length === 1 || Math.sqrt(nodes.length +1) === Math.floor(Math.sqrt(nodes.length +1))
    }
}
