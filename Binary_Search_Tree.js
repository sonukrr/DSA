class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// BST - 
//     1. has atmax 2 child nodes.
//     2. all child nodes to left of parent node are lesser that parent itself.
//     3. all child nodes to right of parent node are greater than parent itself.

// 1. search - BC - O(log n), AC - O(log n), WC - O(n) [completely one sided BST]
// 2. insert - BC - O(log n), AC - O(log n), WC - O(n) [completely one sided BST]
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    setRoot(val){
        var root = new Node(val);
        this.root = root;
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

    contains(val){
        if(!this.root) return false;
        if(this.root.val === val) return true;

        var found = false;

        function searchHelper(parent){
            if(val == parent.val){
                found = true;
                return;
            }
            else if(val < parent.val && parent.left){
                searchHelper(parent.left);
            }else if(val > parent.val && parent.right)
                searchHelper(parent.right);
        }

        searchHelper(this.root);

        return found;
    }
}

var bst = new BinarySearchTree();
bst.insert(50);
bst.insert(10);
bst.insert(20);
bst.insert(40);
bst.insert(100);
bst.insert(14);
bst.insert(2000);
bst.insert(1000);


