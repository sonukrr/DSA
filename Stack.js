class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//will be using shift/unshift under the hood as pop in SLL has TC - O(n)
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // O(1)
    push(val){
        var node = new Node(val);
        if(!this.first){
            this.first = this.last = node;
        }else{
            node.next = this.first;
            this.first = node;
        }
        
        return ++this.size;
    }

    // O(1)
    pop(){
        if(!this.first) return null;
        var popped = this.first;
        if(this.size === 1) {
            this.first = this.last = null;
        }else{
            this.first = this.first.next;
            popped.next = null;         
        }

        this.size--;

        return popped.val;
    }

    print(){
        const arr = [];
        var node = this.first;
        while(node != null){
            arr.push(node.val);
            node = node.next;
        }

        return arr;
    }
}

var stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
