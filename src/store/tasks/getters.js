function tasksSorted (state) {
  let tasksSorted = {},
    keysOrdered = Object.keys(state.tasks);

  keysOrdered.sort((a, b) => {
    let taskAProp = state.tasks[a][state.sort].toLowerCase(),
      taskBProp = state.tasks[b][state.sort].toLowerCase();

    if (taskAProp > taskBProp) return 1;
    else if (taskAProp < taskBProp) return -1;
    else return 0;
  });

  keysOrdered.forEach(key => {
    tasksSorted[key] = state.tasks[key];
  });

  return tasksSorted;
}

function tasksFiltered (state, getters) {
  let tasksSorted = getters.tasksSorted;
  let tasksFiltered = {};
  if (state.search) {
    Object.keys(tasksSorted).forEach(function (key) {
      let task = tasksSorted[key],
        taskNamelowerCase = task.name.toLowerCase(),
        searchLowerCase = state.search.toLowerCase();
      if (taskNamelowerCase.includes(searchLowerCase)) {
        tasksFiltered[key] = task;
      }
    });
    return tasksFiltered;
  }
  return tasksSorted;
}

function tasksTodo (state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(function (key) {
    let task = tasksFiltered[key];
    if (!task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

function tasksCompleted (state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(function (key) {
    let task = tasksFiltered[key];
    if (task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

export {
  tasksSorted, tasksFiltered, tasksTodo, tasksCompleted,
}