"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
let nextId = 1;
function addTodo(title) {
    const newTodo = {
        id: nextId,
        title: title,
    };
    todos.push(newTodo);
    nextId++;
    console.log(`Added: "${title}"`);
}
function removeTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        console.log(`Todo with id ${id} not found.`);
        return;
    }
    const removed = todos.splice(index, 1);
    console.log(`Removed: "${removed[0].title}"`);
}
function editTodo(id, newTitle) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        console.log(`Todo with id ${id} not found.`);
        return;
    }
    const oldTitle = todo.title;
    todo.title = newTitle;
    console.log(`Updated: "${oldTitle}" -> "${newTitle}"`);
}
function displayTodos() {
    if (todos.length === 0) {
        console.log("No todos yet.");
        return;
    }
    console.log("\n--- Todo List ---");
    todos.forEach((todo) => {
        console.log(`(${todo.id}) ${todo.title}`);
    });
    console.log("-----------------\n");
}
addTodo("Buy groceries");
addTodo("Study TypeScript");
addTodo("Go for a walk");
displayTodos();
editTodo(2, "Study TypeScript and finish the assignment");
removeTodo(3);
displayTodos();
//# sourceMappingURL=todo.js.map