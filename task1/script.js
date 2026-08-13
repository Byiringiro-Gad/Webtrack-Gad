const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

function  addTask() {
    const taskText = taskInput.value.trim();  

    if (taskText !== '') {
        const li = document.createElement('li');

        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', function() {
            const newTask = prompt('Edit your task:', taskText);

            if (newTask !== null && newTask.trim() !== '') {
                li.firstChild.textContent = newTask.trim();
            }          
    });

        li.appendChild(editButton);
        li.appendChild(deleteButton);   
        taskList.appendChild(li);
        taskInput.value = ''; 
    }
}

addButton.addEventListener('click', addTask);

