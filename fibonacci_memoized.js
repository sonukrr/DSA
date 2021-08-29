//recursive approach
// TC -> O(2^n)
function fibonacci_recursive(n){
    if(n<=2) return 1;
    var res = fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
    return res;
}

// console.log(fibonacci_recursive(40));

//memoized approach - Memoization is a concept of implementing the dynamic programming in which we store the solution/ result of common sub problems for solving a complex problem
// TC -> O(n)
function fibonacci_memoized(n, mem = [undefined, 1, 1]){
    if(mem[n]) return mem[n];

    var res = fibonacci_memoized(n-1, mem) + fibonacci_memoized(n-2, mem);
    mem[n] = res;
    return res;
}

console.log(fibonacci_memoized(100));

// To avoid stack overflow on above memo approach
// tabulation approach - Implementation of dynamic programming. This uses bottom up approach meaning start from the base/simple case and approach towards the complex case
// TC -> O(n)
function fibonacci_tabulated(n){
    if(n<=2) return 1;
    var fibNums = [0,1,1];
    for(i=3 ; i<=n ; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fibonacci_tabulated(1000));