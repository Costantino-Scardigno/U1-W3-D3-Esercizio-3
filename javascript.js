
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Per favore, inserisci un task.');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = taskText;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.classList.add('delete-btn');
    
    
    li.appendChild(deleteButton);

    
    taskList.appendChild(li);

    
    taskInput.value = '';

    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
