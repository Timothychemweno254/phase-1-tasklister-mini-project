document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('task-list');
  const prioritySelect = document.getElementById('priority');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();

      const taskDescription = document.getElementById('new-task-description').value;
    
        const priority = prioritySelect.value;
        if (taskDescription.trim() !== "") {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
      switch (priority) {
        case 'high':
          taskItem.style.color = 'red';
          break;
        case 'medium':
          taskItem.style.color = 'yellow';
          break;
        case 'low':
          taskItem.style.color = 'green';
          break;
      }

      
      taskItem.dataset.priority = priority;

    
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });

    
      taskItem.appendChild(deleteButton);

      
      taskList.appendChild(taskItem);

    
      document.getElementById('new-task-description').value = '';
    }
  });

  document.getElementById('sort-tasks').addEventListener('click', function() {
    const tasks = Array.from(taskList.querySelectorAll('li'));
    tasks.sort((a, b) => {
      const priorityA = a.dataset.priority;
      const priorityB = b.dataset.priority;

      
      if (priorityA === priorityB) return 0;
      return priorityA === 'high' ? -1 : 1;
    });

    
    tasks.forEach(task => {
      taskList.appendChild(task);
    });
  });
});
