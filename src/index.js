document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  function handleFormSubmit(event) {
    event.preventDefault(); 
  }

    const taskDescription = taskInput.value.trim();
    if (taskDescription === '') {
      alert('Please enter a task description!');
      return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskDescription;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

   



