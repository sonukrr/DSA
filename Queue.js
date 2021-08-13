class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push O(1)
    enqueue(val){
        var node = new Node(val);

        if(!this.first){
            this.first = this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    //shift O(1)
    dequeue(){
        if(!this.first) return null;

        var removed = this.first;
        if(this.first === this.last){
            this.first = this.last = null;
        }else{
            this.first = this.first.next;
        }
        removed.next = null;

        this.size--;
        return removed.val;
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

var queue = new Queue();

queue.enqueue("First");
queue.enqueue("second");
queue.enqueue("third");
queue.enqueue("fourth");
queue.enqueue("fifth");