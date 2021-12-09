// Greedy Algorithm - Choosing the optimal solution at each step to make thhe entire solution optimal

// Greedy Approach - we sort the array inplace to make sure that the query taking most time to execute is at the end.
// Coz placing the larger time taking queries in start or mid will result in addition of larger waiting time to all queries taht are after it.
// TC - O(n log n), SC - O(n)
function minimumWaitingTime(queries) {
    queries.sort((n1, n2) => n1 - n2);
  
    var totalWaitingTime = 0;
    for (let i = 0; i < queries.length; i++) {
          const duration = queries[i];
          const queriesLeft = queries.length - (i+1);
      totalWaitingTime +=  duration * queriesLeft;
    }
    return totalWaitingTime;
  }
  