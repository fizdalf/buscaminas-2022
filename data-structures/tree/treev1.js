import {Queue} from "../queue/queue.js"
export class Node{
    data;
    left;
    right;
    constructor(data) {
        this.data = data
    }
    height(){
        if (this.left === undefined && this.right === undefined){
            return 0;
        }
        let heightLeft = -1;
        let heightRight = -1;
        if (this.left !== undefined){
            heightLeft = this.left.height()
        }
        if (this.right !== undefined){
            heightRight = this.right.height()
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
        toExplorer.enqueue(root)
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
    isPerfectTree(root) {
            return this.#checkPerfect(root,root.depth(root),0);
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
        if (!this.root){
            this.root = new Node(data);
            return true;
        }
        return this.#insert(this.root, data)
    }
    #insert(root, data){
        if(root.data === data){
            return false;
        }
        if(root.left !== undefined && data < root.data){
            if (root.left.data === data){
                return false;
            }
            return this.#insert(root.left, data)

        }
        if(root.right !== undefined && data > root.data){
            if (root.right.data === data){
                return false;
            }
            return this.#insert(root.right, data)
        }
        if(root.left === undefined && root.data > data){
            root.left = new Node(data);
            return true;
        }
        if(root.right === undefined && root.data < data){
            root.right = new Node(data);
            return true;
        }
    }
    exists(data){
        return this.#exists(this.root, data)
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
}
