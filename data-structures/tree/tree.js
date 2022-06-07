import {Queue} from "../queue/queue.js"
export class Node{
    data;
    left;
    right;
    height = 1;
    constructor(data) {
        this.data = data
    }
    calculateHeight(){
        if (this.left === undefined && this.right === undefined){
            return 1;
        }
        let heightLeft = -1;
        let heightRight = -1;
        if (this.left !== undefined){
            heightLeft = this.left.calculateHeight()
        }
        if (this.right !== undefined){
            heightRight = this.right.calculateHeight()
        }
        if(heightLeft > heightRight){
            return heightLeft +1
        }
        return heightRight +1
    }
    count = 0
    depth(root){
        let aux;
        if(root !== this){
            this.count++;
        }if (root.left !== undefined){
            aux = this.count
            this.depth(root.left)
        }
        if (root.right !== undefined){
            if (aux !== undefined){
                this.count = aux;
            }this.depth(root.right);
        }
        return this.count;
    }
}

export class Tree{
    root;
    preOrder(){
        return this.#preOrder(this.root)
    }
    #preOrder(root){
        let nodes = [root.data];
        if(root.left !== undefined){
            nodes = nodes.concat(this.#preOrder(root.left));
        }
        if(root.right !== undefined){
            nodes = nodes.concat(this.#preOrder(root.right));
        }
        return nodes;
    }
    inOrder(){
        return this.#inOrder(this.root)
    }
    #inOrder(root){
        let nodes = [];
        if(root.left !== undefined){
            nodes = nodes.concat(this.#inOrder(root.left));
        }
        nodes = nodes.concat(root.data);
        if(root.right !== undefined){
            nodes = nodes.concat(this.#inOrder(root.right));
        }
        return nodes;
    }
    postOrder(){
        return this.#postOrder(this.root)
    }
    #postOrder(root){
        let nodes = [];
        if(root.left !== undefined){
            nodes = nodes.concat(this.#postOrder(root.left));
        }
        if(root.right !== undefined){
            nodes = nodes.concat(this.#postOrder(root.right));
        }
        nodes = nodes.concat(root.data);
        return nodes;
    }
    breadthSearch(){
        const toExplorer = new Queue();
        let nodes = [];
        toExplorer.enqueue(this.root)
        while(true){
            let actualNode = toExplorer.dequeue()
            if (actualNode.left !== undefined){
                toExplorer.enqueue(actualNode.left)
            }
            if (actualNode.right !== undefined){
                toExplorer.enqueue(actualNode.right)
            }
            nodes = nodes.concat(actualNode.data)
            if(toExplorer.size() === 0){
                break;
            }
        }
        return nodes
    }

    isFullTree(){
        return this.#isFullTree(this.root)
    }
    #isFullTree(root){
        const doesNotHaveChildren = root.left === undefined && root.right === undefined;
        if (doesNotHaveChildren) {
            return true;
        }
        const doesNotHaveBoth = root.left === undefined || root.right === undefined;
        if (doesNotHaveBoth) {
            return false;
        }
        return this.#isFullTree(root.left) && this.#isFullTree(root.right);
    }
    isPerfectTree() {
            return this.#checkPerfect(this.root,this.root.depth(this.root),0);
    }
    #checkPerfect(root, depth, level){
        if(!root){
            return true;
        }
        if(!root.left && !root.right){
            return depth === level;
        }
        if(!root.left || !root.right){
            return false;
        }
        return this.#checkPerfect(root.left,depth, level +1) && this.#checkPerfect(root.right, depth, level +1)
    }
    rotateLeft(root){
        let x = root;
        let b = x.right.left;
        root = root.right;
        root.left = x;
        root.left.right = b;
        return root;
    }
    rotateRight(root){
        let y = root;
        let b = y.left.right;
        root = root.left;
        root.right = y;
        root.right.left = b
        return root;
    }
    insert(data){
        try {
            this.root = this.#insert(this.root, new Node(data));
            return true;
        } catch (error) {
            return false;
        }

    }
    #insert(root, node){
        if (!root){
            return node;
        }
        if (node.data === root.data){
            throw new Error("Este dato ya existe");
        }
        if(node.data < root.data){
            root.left = this.#insert(root.left, node);
            root = this.swing(root, node.data);
        }
        if(node.data > root.data){
            root.right = this.#insert(root.right, node);
            root = this.swing(root, node.data);
        }
        return root;
    }
    exists(data){
        return this.#exists(this.root, data);
    }

    #exists(root, data) {
        if(root.data === data){
            return true;
        }
        if(root.left !== undefined && data < root.data){
            return this.#exists(root.left, data);
        }
        if (root.right !== undefined && data > root.data){
            return this.#exists(root.right, data);
        }
        return false;
    }
    swing(node, lastData) {
        node.height = 1 +  Math.max(node.left?.height || 0, node.right?.height || 0)
        let balanceFactor = (node.left ? node.left.height : 0 ) - (node.right ? node.right.height : 0)
        if (balanceFactor > 1){
            if(node.left.data < lastData){
                node.left = this.rotateLeft(node.left);
            }
            node = this.rotateRight(node);
        }
        if (balanceFactor  < -1){
            if(node.right.data > lastData){
                node.right = this.rotateRight(node.right);
            }
            node = this.rotateLeft(node);
        }
        return node;
    }
}
