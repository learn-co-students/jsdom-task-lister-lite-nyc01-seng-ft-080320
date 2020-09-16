document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector('#main-content');

  const createTaskForm = document.querySelector('#create-task-form')

  const newTaskDescription = document.querySelector('#new-task-description')

  const list = document.querySelector('#list')

  const tasks = document.querySelector('#tasks')

  const dropDown = document.createElement('select')

  function dropMenu() {
    const form = document.querySelector('#create-task-form');
    form.insertAdjacentElement('beforeend', dropDown);
  }
  
  dropMenu();
//function clicker() {
 document.addEventListener("submit", function(e) {
   const getTask = newTaskDescription.value;
   const deleteButton = document.createElement('button')
   deleteButton.innerHTML = "Delete"
   e.preventDefault();
      function createTask() {
        const taskLi = document.createElement('li')
        taskLi.innerHTML = getTask
        taskLi.append(deleteButton)
        tasks.append(taskLi)
      }//createTask
    function removeTask() {
      deleteButton.addEventListener("click", function(e) {
         deleteButton.parentNode.remove()
       })//delete button
    }//remove task
    
   
    createTask();
    removeTask();
    
  })//submit
})//DOM Content
