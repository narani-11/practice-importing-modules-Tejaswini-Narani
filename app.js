// app.js
const path = require('path');
const { addTask, listTasks } = require('./taskManager');
const { saveTasks, loadTasks } = require('./fileHandler');

const filePath = path.join(__dirname, 'tasks.json');

// load existing tasks (or [])
let tasks = loadTasks(filePath);

// simple CLI:
// node app.js add "Buy milk"   -> adds a task
// node app.js list             -> lists tasks
// node app.js                  -> lists tasks
const command = process.argv[2];

if (command === 'add') {
  const taskText = process.argv[3];
  if (!taskText) {
    console.log('Please provide a task text: node app.js add "Buy milk"');
    process.exit(1);
  }
  addTask(tasks, taskText);
  saveTasks(filePath, tasks);
  console.log(`Added task: "${taskText}"`);
  listTasks(tasks);
} else {
  // default: show tasks
  listTasks(tasks);
}

//output :
Your Tasks:
1. taskmanager practice task
2. finished filehandler practice Task
3. Buy milk
4. Do homework
