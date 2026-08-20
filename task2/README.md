# TypeScript Todo List App

A Todo List application built with TypeScript.

---

## What it does

- Add a new todo item
- Edit an existing todo item
- Remove a todo item
- Display all todos in the console

---


---

## Project Structure

task2/
├── src/
│   └── todo.ts         # TypeScript source file
├── dist/
│   └── todo.js         # Compiled JavaScript (generated after build)
├── tsconfig.json       # TypeScript compiler settings
├── package.json        # Project info and dependencies
└── screenshots/        # Screenshots of the app running

---

## How to run it

### Requirements

- Node.js installed on your computer (https://nodejs.org/)
- npm (comes with Node.js)

### Steps

1. Clone the repository:
   git clone https://github.com/YOUR-USERNAME/typescript-todo-app.git
   cd typescript-todo-app

2. Install dependencies:
   npm install

3. Compile the TypeScript file:
   npx tsc

4. Run the app:
   node dist/todo.js

---

## Console Output

Added: "Buy groceries"
Added: "Study TypeScript"
Added: "Go for a walk"

--- Todo List ---
(1) Buy groceries
(2) Study TypeScript
(3) Go for a walk
-----------------

Updated: "Study TypeScript" -> "Study TypeScript and finish the assignment"
Removed: "Go for a walk"

--- Todo List ---
(1) Buy groceries
(2) Study TypeScript and finish the assignment
-----------------

---

## Screenshots

### 1. Project files in VS Code
![Project files](screenshots/Screenshot%202026-08-20%20171546.png)

### 2. Compiling with tsc
![Compile](screenshots/Screenshot%202026-08-20%20171009.png)

### 3. Running the app
![Run output](screenshots/Screenshot%202026-08-20%20171147.png)

---

## Built with

- TypeScript (https://www.typescriptlang.org/)
- Node.js (https://nodejs.org/)