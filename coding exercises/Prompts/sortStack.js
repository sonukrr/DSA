// TC - O(n^2), SC - O(n)
function sortStack(stack) {
  if (stack.length == 0) return stack;

  let top = stack.pop();
  sortStack(stack);

  insertInSortedOrder(stack, top);

  return stack;
}

function insertInSortedOrder(stack, value) {
  if (stack.length == 0 || value >= stack[stack.length - 1]) {
    stack.push(value);
    return;
  }

  let top = stack.pop();
  insertInSortedOrder(stack, top);

  stack.push(top);
}

var arr = [-5, 2, -2, 4, 3, 1];
console.log(sortStack(arr));
