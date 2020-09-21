/*

This is basically one user story and can by summarized by
- As a user, when I enter text into the task input field and click "create New Task", the text should appear in a list under "My Todo"

* add a submit listener to the form 
* get data out of the input field
* create an li element with that text
* append that li to the DOM

*/
document.addEventListener("DOMContentLoaded", e => {
    // your code here
   const submitHandler = () => {
       const taskForm = document.querySelector('#create-task-form')

       taskForm.addEventListener("submit", function(e){
           e.preventDefault()
           // now we need to get data out of the form
           const form = e.target
           const task = form["new-task-description"].value

            // create new li element to store our tasks
           const taskLi = document.createElement('li')

           // can create if statement to prevent duplicate tasks
           if(task){

           // now assign the value from the form to the element
           taskLi.textContent = task
           const button = document.createElement('button')
           button.textContent = delete
           taskLi.append(button)

           // now append the tasks to the dom
           taskUl = document.querySelector('#tasks')
           taskUl.append(taskLi)

           form.reset()
           } else {
               alert("You need to give a task dummy")
           }
       })
   }

   submitHandler()
  });