// taskManager.js
// Simple module with two functions: addTask and listTasks

// taskManager.js

function addTask(tasks, taskText) {
  tasks.push(taskText);
}

function listTasks(tasks) {
  if (!tasks || tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('Your Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

module.exports = { addTask, listTasks };
