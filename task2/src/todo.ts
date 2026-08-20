// Interface - defines the shape of a todo item
interface TodoItem {
  id: number;
  title: string;
}

// Array to store all todos
const todos: TodoItem[] = [];

// Counter for unique ids
let nextId: number = 1;

// Add a new todo
function addTodo(title: string): void {
  const newTodo: TodoItem = {
    id: nextId,
    title: title,
  };
  todos.push(newTodo);
  nextId++;
  console.log(`Added: "${title}"`);
}

// Remove a todo by id
function removeTodo(id: number): void {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    console.log(`Todo with id ${id} not found.`);
    return;
  }
  const removed = todos.splice(index, 1);
  console.log(`Removed: "${removed[0]!.title}"`);
}

// Edit a todo title by id
function editTodo(id: number, newTitle: string): void {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    console.log(`Todo with id ${id} not found.`);
    return;
  }
  const oldTitle = todo.title;
  todo.title = newTitle;
  console.log(`Updated: "${oldTitle}" -> "${newTitle}"`);
}

// Display all todos
function displayTodos(): void {
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

// Test everything
addTodo("Buy groceries");
addTodo("Study TypeScript");
addTodo("Go for a walk");

displayTodos();

editTodo(2, "Study TypeScript and finish the assignment");
removeTodo(3);

displayTodos();
