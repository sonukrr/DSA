
var MyQueue = function() {
    this.stack = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let dummyStack = [];
    while(this.stack.length){
        dummyStack.push(this.stack.pop());
    }
    this.stack.push(x);
    while(dummyStack.length){
        this.stack.push(dummyStack.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length;
};
