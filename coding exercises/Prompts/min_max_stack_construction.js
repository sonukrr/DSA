class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }

  // O(1)
  push(number) {
    let minMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      let last = this.minMaxStack[this.minMaxStack.length - 1];
      minMax.min = Math.min(minMax.min, last.min);
      minMax.max = Math.max(minMax.max, last.max);
    }
    this.minMaxStack.push(minMax);
    this.stack.push(number);
    return null;
  }

  // O(1)
  pop() {
      this.minMaxStack.pop();
      return this.stack.pop();
  }

  // O(1)
  peek() {
      return this.stack[this.stack.length-1];
  }

  // O(1)
  getMin() {
      return this.minMaxStack[this.minMaxStack.length-1].min;
  }

  // O(1)
  getMax() {
    return this.minMaxStack[this.minMaxStack.length-1].max;
  }
}

var stack = new MinMaxStack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.getMin());
console.log(stack.getMax());

console.log(stack);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
console.log(stack.getMin());
console.log(stack.getMax());

console.log(stack.peek());
