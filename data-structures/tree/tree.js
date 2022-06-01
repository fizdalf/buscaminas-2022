import {Queue} from "../queue/queue.js"
export class Node{
    data;
    left;
    right;
    constructor(data) {
        this.data = data
    }
    height(node = this){
        if (node.left === undefined && node.right === undefined){
            return 0;
        }
        let heightLeft = -1;
        let heightRight = -1;
        if (node.left !== undefined){
            heightLeft = this.height(node.left)
        }
        if (node.right !== undefined){
            heightRight = this.height(node.right)
        }
        if(heightLeft > heightRight){
            return heightLeft +1
        }
        return heightRight +1
    }
    count = 0
    depth(root, node = this){
        let aux;
        if(root !== node){
            this.count++;
        }if (root.left !== undefined){
            aux = this.count
            this.depth(root.left, node);
        }
        if (root.right !== undefined){
            if (aux !== undefined){
                this.count = aux;
            }this.depth(root.right, node);
        }
        return this.count;
    }
}

export class Tree{
    root;
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
        nodes = nodes.concat(root.data);
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
            return this.checkPerfect(root,root.depth(),0);
    }
    checkPerfect(root, depth, level){
        if(!root){
            return true;
        }
        if(!root.left && !root.right){
            return depth === level + 1;
        }
        if(!root.left || !root.right){
            return false;
        }
        return this.checkPerfect(root.left,depth, level +1) && this.checkPerfect(root.right, depth, level +1)
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

    insertln(data){
        if (!this.root){
            this.root = new Node(data);
            return
        }
        this.insert(this.root, data)
    }
    insert(root, data){
        if(root.left !== undefined && data < root.data){
            this.insertln(root.left, data);
            return;
        }
        if(root.right !== undefined && data > root.data){
            this.insertln(root.right, data);
            return;
        }
        if(root.left === undefined && root.data > data){
            root.left = new Node(data);
            return;
        }
        root.right = new Node(data);
    }
}
