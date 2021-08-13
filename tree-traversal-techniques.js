class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.root = null;
    }

    setRoot(val){
        let node = new Node(val);
        this.root = node;
    }

    insert(val){
        if(!this.root){
            this.setRoot(val);            
        }else{
            var node = new Node(val);
            function insertHelper(parent){
                if(val < parent.val && !parent.left){
                    parent.left = node;
                    return;
                }else if(val > parent.val && !parent.right){
                    parent.right = node;
                    return;
                }

                if(val < parent.val)
                    insertHelper(parent.left);
                else if(val > parent.val)
                    insertHelper(parent.right);
                else return undefined;
            }

            insertHelper(this.root);

        }

        return this;
    }

    // BFS
    // use queue
    traverseBFS(){
        if(!this.root) return [];
        if(!this.root.left && !this.root.right) return [this.root.val];

        var queue = [this.root];
        var resArr = [];
        while(queue.length != 0){
            let deQueuedNode = queue.shift();
            resArr.push(deQueuedNode.val);            
            deQueuedNode.left && queue.push(deQueuedNode.left);
            deQueuedNode.right && queue.push(deQueuedNode.right);            
        }

        return resArr;
    }

    //DFS - PreOrder
    // root -> left -> right 
    // use recursion / call stack
    traverseDFSPreOrder(){
        if(!this.root) return [];
        if(!this.root.left && !this.root.right) return [this.root.val];

        var resArr = [];
        function traverseDFSPreOrderHelper(parent){
            if(!parent.val) return;

            resArr.push(parent.val);                                    //parent        
            parent.left && traverseDFSPreOrderHelper(parent.left);      //left
            parent.right && traverseDFSPreOrderHelper(parent.right);    //right

        }

        traverseDFSPreOrderHelper(this.root);

        return resArr;
    }

    //DFS - InOrder
    // left -> root -> right 
    // use recursion / call stack
    traverseDFSInOrder(){
        if(!this.root) return [];
        if(!this.root.left && !this.root.right) return [this.root.val];

        var resArr = [];
        function traverseDFSInOrderHelper(parent){
             if(!parent.val) return;
            
            parent.left && traverseDFSInOrderHelper(parent.left);      //left
            resArr.push(parent.val);                                    //parent        
            parent.right && traverseDFSInOrderHelper(parent.right);    //right

        }

        traverseDFSInOrderHelper(this.root);

        return resArr;
    }


    //DFS - PostOrder
    // left -> right -> root 
    // use recursion / call stack
    traverseDFSPostOrder(){
        if(!this.root) return [];
        if(!this.root.left && !this.root.right) return [this.root.val];

        var resArr = [];
        function traverseDFSPostOrderHelper(parent){
             if(!parent.val) return;
            
            parent.left && traverseDFSPostOrderHelper(parent.left);      //left
            parent.right && traverseDFSPostOrderHelper(parent.right);    //right
            resArr.push(parent.val);                                    //parent            

        }

        traverseDFSPostOrderHelper(this.root);

        return resArr;
    }

}

var tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(1);
tree.insert(3);
tree.insert(15);
tree.insert(30);
tree.insert(25);
