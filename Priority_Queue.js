class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

/**
 * The node with highest priority is always at the first so it gets removed first and the remaining nodes gets adjusted
 * themselves into a max heap/min heap placing next highest priority node in the beginning.  
 */

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    /**
     * 1. push the node at end
     * 2. bubble up the node to its correct position as per its priority
     */
    enQueue(val, priority){
        var node = new Node(val, priority);
        this.values.push(node);
        if(this.values.length > 1)
            this.bubbleUp();
        
        return this;
    }

    /**
     * 1. start from end / new node that is pushed
     * 2. if current node priority > parent node priority --> swap else break
     * 3. break means current node is now at correct position
     */
    bubbleUp(){
        var currentNode, parentNode;
        var idx = this.values.length - 1;
        while(idx > 0){
            /**
             * 2n+1 = idx (left child). Therefore, parentIdx = idx-1 / 2
             */
            currentNode = this.values[idx];
            let parentIdx = Math.floor((idx-1) / 2);
            parentNode = this.values[parentIdx];

            if(currentNode.priority < parentNode.priority) break;

            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            idx = parentIdx;
        }
    }


    /**
     * 1. store the first node as it has the highest priority. Return this at the end
     * 2. Place root with next high priority element. 
     *      -replace root with the last node (as its lowest)
     *      -sink down this value to its correct position. This will result in highest priority node to be at the root
     */
    deQueue(){
        if(this.values.length == 0) return null;
        if(this.values.length == 1) return this.values.pop();
        
        var root = this.values[0];
        this.values[0] = this.values.pop();
        this.sinkDown();
        return root;
    }

    sinkDown(){
        const endIdx = this.values.length;
        var idx = 0;
        while(true){
            var element = this.values[idx];
            var leftIdx = (2*idx) + 1;
            var rightIdx = (2*idx) + 2;
            var swapIdx = null;
            var left, right;
            if(leftIdx < endIdx){
                left = this.values[leftIdx];
                if(left.priority > element.priority){
                    swapIdx = leftIdx;
                }
            }

            if(rightIdx< endIdx){
                right = this.values[rightIdx];
                if((swapIdx == null && right.priority > element.priority ) || (swapIdx != null && right.priority > left.priority)){
                    swapIdx = rightIdx;
                }
            }
            
            if(swapIdx == null) break;
            [this.values[swapIdx], this.values[idx]] = [this.values[idx], this.values[swapIdx]];
            idx = swapIdx;
        }
    }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enQueue("health checkup", 0);
priorityQueue.enQueue("concussion", 4);
priorityQueue.enQueue("fracture", 2);
priorityQueue.enQueue("fever", 1);
priorityQueue.enQueue("accident", 3);
priorityQueue.enQueue("surgery", 5);

