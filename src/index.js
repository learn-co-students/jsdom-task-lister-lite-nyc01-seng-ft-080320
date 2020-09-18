document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector('#main-content');

  const createTaskForm = document.querySelector('#create-task-form')

  const newTaskDescription = document.querySelector('#new-task-description')

  const list = document.querySelector('#list')

  const tasks = document.querySelector('#tasks')

  const dropDown = document.createElement('select')

  let finalColor;

  function dropMenu() {
    const form = document.querySelector('#create-task-form');
    form.insertAdjacentElement('beforeend', dropDown);
    createOptions("Choose Priority");
    createOptions("High");
    createOptions("Medium");
    createOptions("Low");
  }
  
  const createOptions = priority => {
    const option = document.createElement('option')
    option.setAttribute("name", priority);
    option.textContent = priority;
    console.log(option)
    dropDown.appendChild(option)
  }

 
  
    dropDown.addEventListener('change', e => {
      let color;
      if (e.target.value === "High") {
        color = "red"
       } else if (e.target.value === "Medium") {
        color =  "yellow"
       } else if (e.target.value === "Low") {
         color = "green"
       }
      console.log(color)
      finalColor = color
    })
  
    
  
  // const createLi = () => {
  
    
  //   return color
  // }

//function clicker() {
 document.addEventListener("submit", function(e) {
   
   const deleteButton = document.createElement('button')
   deleteButton.innerHTML = "Delete"
   
   e.preventDefault();

    function createTask() {
        const taskLi = document.createElement('li')
        const getTask = newTaskDescription.value;
        taskLi.innerHTML = getTask
        taskLi.style.color = finalColor
        //const newTaskLi = createLi()
        taskLi.append(deleteButton)
        tasks.append(taskLi)
        //console.log(prioritySelect())
      }//createTask
    function removeTask() {
      deleteButton.addEventListener("click", function(e) {
         deleteButton.parentNode.remove()
       })//delete button
    }//remove task
    
    // createTaskForm.reset();
    
    createTask();
    removeTask();

  })//submit
  dropMenu();
  // prioritySelect();
})//DOM Content
