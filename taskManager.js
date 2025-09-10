// taskManager.js
// Simple module with two functions: addTask and listTasks

function addTask(tasks, task) {
  // tasks: array (e.g., ["Buy milk", "Do homework"])
  // task: string
  if (typeof task !== 'string' || task.trim() === '') return tasks;
  tasks.push(task);
  return tasks;
}

function listTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    console.log('No tasks available.');
    return;
  }
  console.log('Your Tasks:');
  tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t}`);
  });
}

module.exports = { addTask, listTasks };
