// TC - O(n log n), SC - O(n)
function taskAssignment(k, tasks) {
    const tasksObj = []
    const tasksPairs = [];
    for (let i = 0; i < tasks.length; i++) {
        tasksObj.push(new Task(tasks[i], i));        
    }

    //sort
    tasksObj.sort((t1,t2) => t1.duration - t2.duration);

    var start = 0;
    var end = tasksObj.length-1;

    while(start < end){
        tasksPairs.push([tasksObj[start].index, tasksObj[end].index]);
        start++;
        end--;
    }
    return tasksPairs;
  }

  class Task{
      constructor(duration, index){
        this.duration = duration;
        this.index = index;
      }
  }