export class Node{
    data;
    left;
    right;
    constructor(data) {
        this.data = data
    }
}

export class Tree{
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
    nodes = [];
    explorer(node) {
        this.nodes = this.nodes.concat(node.data);
        return node.left !== undefined || node.right !== undefined;
    }
    breadthSearch(root){
        let toFindOut = this.explorer(root);
        let nodeLeft = root.left;
        let nodeRight = root.right;
        if (toFindOut){
            if (nodeLeft !==undefined){
                this.breadthSearch(nodeLeft)
            }
            if (nodeRight !==undefined){
                this.breadthSearch(nodeRight)
            }
        }
        return this.nodes;
    }
    isFullTree(root){
        let nodes
        nodes = root.left !== undefined && root.right !== undefined || root.left === undefined && root.right === undefined
        if(nodes && root.left !== undefined) {
            nodes = this.isFullTree(root.left)
        }
        if(nodes && root.right !== undefined){
            nodes = this.isFullTree(root.right)
        }
        return nodes;
    }
}
