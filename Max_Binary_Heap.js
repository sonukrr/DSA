class BinaryHeap{
    constructor(){
        this.values = [];
    }

    // insert or bubbleUp
    // max binary heap - 1. atmost two child nodes
    //                   2. parent is always greater than child node. So root is max of all
    bubbleUp(val){
        // two step process 1. push to arr,
        //                  2. bubble up i.e, find correct position by iteratively comparing pushed element with parent and swapping if element is greater than parent
        this.values.push(val);

        let idx = this.values.length - 1;
        while(idx > 0){
            let element = this.values[idx];
            let parentIdx = Math.floor((idx - 1)/2); // to find nth index element child nodes . 1. left child = 2n + 1, 2. right child = 2n + 2
            const parent = this.values[parentIdx];
            if(element <= parent) break; // no swapping means the element is already at correct position and we dont need to do anyhting further
            // swap
            this.values[idx] = parent;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }

        return this.values;
    }

    // to remove a node from max heap -> max node(root), min heap -> min node(root)
    extractMax(){
        if(this.values.length == 0) return null;
        if(this.values.length == 1) return this.values.pop();

        const oldRoot = this.values[0];
        this.values[0] = this.values.pop();      
        this.sinkDown();    
        console.log(this.values);
        return oldRoot;

        
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
                if(left > element){
                    swapIdx = leftIdx;
                }
            }

            if(rightIdx< endIdx){
                right = this.values[rightIdx];
                if((swapIdx == null && right > element ) || (swapIdx != null && right > left)){
                    swapIdx = rightIdx;
                }
            }
            
            if(swapIdx == null) break;
            [this.values[swapIdx], this.values[idx]] = [this.values[idx], this.values[swapIdx]];
            idx = swapIdx;
        }
    }
}

var maxBinaryHeap = new BinaryHeap();
maxBinaryHeap.bubbleUp(0);
maxBinaryHeap.bubbleUp(4);
maxBinaryHeap.bubbleUp(2);
maxBinaryHeap.bubbleUp(1);
maxBinaryHeap.bubbleUp(3);
maxBinaryHeap.bubbleUp(5);

