document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.querySelector("form");

  newTaskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const newTaskDescription = document.getElementById("new-task-description");
      const newTask = document.createElement("li");
      const button = document.createElement("button");
      button.innerText = "Done!";
      //debugger
      newTask.innerText = newTaskDescription.value;
      document.getElementById("tasks").appendChild(newTask);
      document.getElementById("li").appendChild(button);
      //event.target.reset();
  });
});



