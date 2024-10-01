document.addEventListener('DOMContentLoaded', () => {
   const taskInput = document.getElementById("taskInput");
   const descriptionInput = document.getElementById("description")
   const addTaskButton = document.getElementById("addTaskButton");
   const taskList = document.getElementById("taskList");

   addTaskButton.addEventListener('click',addTask);
   taskList.addEventListener('click',handleTaskClick);

   function addTask() {
    const taskText = taskInput.value.trim();
    const taskDescription = descriptionInput.value.trim();
    if (taskText !== '' && taskDescription !== ''){
        const listItem = document.createElement('li');
       listItem.innerHTML = `<div class="task-content">
                                <strong>${taskText}</strong>
                                <p>${taskDescription}</p>
                             </div>
                             <button class="delete">Delete</button>`;
       taskList.appendChild(listItem);
       taskInput.value = '';
       descriptionInput.value = '';
    }
   }

   function handleTaskClick() {
    if (event.target.tagName === 'BUTTON' & event.target.classList.contains('delete')){
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    } else if(event.target.tagName === 'LI'){
        event.target.classList.toggle('done');
    }
   }
});
