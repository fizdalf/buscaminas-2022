import {Queue} from "../queue/queue.js"
export class Node{
    data;
    left;
    right;
    constructor(data) {
        this.data = data
    }
}

export class Tree{
    root;
    constructor(root) {
        this.root = root
    }
    count = 0
    hasDeep(root, node){
        let aux;
        if(root !== node){
            this.count++;
        }if (root.left !== undefined){
            aux = this.count
            this.hasDeep(root.left, node);
        }
        if (root.right !== undefined){
            if (aux !== undefined){
                this.count = aux;
            }this.hasDeep(root.right, node);
        }return this.count;
    }
    hasHeight(node){
        if (node.left === undefined && node.right === undefined){
            return 0;
        }
        let heightLeft = -1;
        let heightRight = -1;
        if (node.left !== undefined){
            heightLeft = this.hasHeight(node.left)
        }
        if (node.right !== undefined){
            heightRight = this.hasHeight(node.right)
        }
        if(heightLeft > heightRight){
            return heightLeft +1
        }return heightRight +1
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
            if(toExplorer.size() === 0){
                break;
            }
            if (actualNode.left !== undefined){
                toExplorer.enqueue(actualNode.left)
            }
            if (actualNode.right !== undefined){
                toExplorer.enqueue(actualNode.right)
            }
            nodes = nodes.push(actualNode.data)
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
        const heightTree = this.hasHeight(this.root);
        let deep = this.hasDeep(this.root, root);
        const doesNotHaveChildren = root.left === undefined && root.right === undefined && deep === heightTree;
        if (doesNotHaveChildren) {
            return true;
        }
        const doesNotHaveBoth = root.left === undefined || root.right === undefined;
        if (doesNotHaveBoth) {
            return false;
        }
        return this.isPerfectTree(root.left) && this.isPerfectTree(root.right);
    }
}
