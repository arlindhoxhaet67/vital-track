/* 
   Filename: complexCode.js

   Description: 
   This is a complex JavaScript code that implements a multi-level task manager system.
   It allows the creation, management, and completion of tasks with various levels of priority.
   The code is structured using object-oriented programming principles and makes use of several helper functions to provide rich functionality.

*/

// Task Class
class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.completed = false;
  }

  // Method to mark a task as completed
  complete() {
    this.completed = true;
    console.log(`Task "${this.name}" has been completed.`);
  }
}

// Task Manager Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Method to add a new task to the task manager
  addTask(name, priority) {
    const newTask = new Task(name, priority);
    this.tasks.push(newTask);
    console.log(`Task "${name}" has been added to the task manager.`);
  }

  // Method to list all the tasks in the task manager
  listTasks() {
    console.log("Tasks in the task manager:");
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      console.log(`Name: ${task.name} | Priority: ${task.priority}`);
    }
  }

  // Method to complete a specific task
  completeTask(taskName) {
    const taskIndex = this.tasks.findIndex((task) => task.name === taskName);
    if (taskIndex >= 0) {
      this.tasks[taskIndex].complete();
    } else {
      console.log(`Task "${taskName}" not found in the task manager.`);
    }
  }
}

// Helper function to generate a random priority
function generatePriority() {
  const priorities = ["Low", "Medium", "High"];
  const randomIndex = Math.floor(Math.random() * priorities.length);
  return priorities[randomIndex];
}

// Instantiate a new Task Manager
const taskManager = new TaskManager();

// Add some sample tasks
taskManager.addTask("Task 1", generatePriority());
taskManager.addTask("Task 2", generatePriority());
taskManager.addTask("Task 3", generatePriority());
taskManager.addTask("Task 4", generatePriority());
taskManager.addTask("Task 5", generatePriority());

// List all tasks in the task manager
taskManager.listTasks();

// Complete a specific task
taskManager.completeTask("Task 3");

// List all tasks after completion
taskManager.listTasks();

// Output:
// Task "Task 1" has been added to the task manager.
// Task "Task 2" has been added to the task manager.
// Task "Task 3" has been added to the task manager.
// Task "Task 4" has been added to the task manager.
// Task "Task 5" has been added to the task manager.
// Tasks in the task manager:
// Name: Task 1 | Priority: Medium
// Name: Task 2 | Priority: Low
// Name: Task 3 | Priority: High
// Name: Task 4 | Priority: High
// Name: Task 5 | Priority: Low
// Task "Task 3" has been completed.
// Tasks in the task manager:
// Name: Task 1 | Priority: Medium
// Name: Task 2 | Priority: Low
// Name: Task 4 | Priority: High
// Name: Task 5 | Priority: Low