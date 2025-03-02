document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        if (taskInput.value.trim() !== '') {
            const newTask = document.createElement('li');
            newTask.innerHTML = `
                <span>${taskInput.value}</span>
                <button class="complete">Mark as Done</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(newTask);
            taskInput.value = '';

            const completeButton = newTask.querySelector('.complete');
            const deleteButton = newTask.querySelector('.delete');

            completeButton.addEventListener('click', function() {
                newTask.classList.toggle('completed');
            });

            deleteButton.addEventListener('click', function() {
                taskList.removeChild(newTask);
            });
        }
    });
});

