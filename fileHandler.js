// fileHandler.js
// Uses fs to save/load tasks as JSON

const fs = require('fs');

function saveTasks(filePath, tasks) {
  // write tasks array as pretty JSON
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}

function loadTasks(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // if file doesn't exist or JSON invalid => return empty array
    return [];
  }
}

module.exports = { saveTasks, loadTasks };
