document.addEventListener("DOMContentLoaded", () => {
    const givenForm = document.querySelector('#create-task-form');

    // const priorityVar = document.getElementById('priority_id')
    

    function submitf(e){
      e.preventDefault()
      const input = document.querySelector('#new-task-description').value;
      const taskLi = document.createElement('li');
      taskLi.classList.add("task");
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete"
      //if value === medium make taskLi yellow etc
      // querySelector get value using the id. assign to a var. if var === high
      taskLi.textContent = input;
      const tasksUl = document.querySelector('#tasks');
      tasksUl.appendChild(taskLi);
      taskLi.appendChild(deleteButton)
      const priorityVar = document.getElementById('priority_id')
          if (priorityVar.value === "High"){
            taskLi.style.color = "red";
          } else if (priorityVar.value === "Medium"){
            taskLi.style.color = "yellow";
          } else {
            taskLi.style.color = "green";
          }

              
      console.log(priorityVar.value) 
      deleteButton.addEventListener('click', function(e){
          taskLi.remove();
          //e.target.parentNode.remove()
      })
    }
    
    givenForm.addEventListener('submit', submitf);  
});


//   - As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// - An additional input field (e.g. user, duration, date due)
// - Ability to edit tasks

