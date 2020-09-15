document.addEventListener("DOMContentLoaded", () => {

  // Click Listener to add task
  document.addEventListener("submit", function(e) {
    e.preventDefault();

    let task = document.getElementById("new-task-description");
    let taskList = document.getElementById("tasks");
    let newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem.innerHTML = 
    `<p class="task-text">${task.value}</p>
    <form> 
      <select name="priority" class="priority">
        <option value="High"> High Priority </option>
        <option value="Medium"> Medium Priority </option>
        <option value="Low"> Low Priority </option>
      </select>
    </form>
    <button type="button" id="delete-button"> X </button>`
    taskList.append(newListItem);
    task.value = "";
  })

  //  Click Listener for Delete 
  document.addEventListener('click', function(e) {
    if (e.target.id === "delete-button") {
      e.target.parentNode.remove()
     }
  })

  // Adding Priorities
  document.addEventListener("change", function(e) {
    if (e.target.className === "priority") {
        const result = e.target.value;

        let closestLi = e.target.closest(".list-item");
        let text = closestLi.querySelector(".task-text");

        if (result === "Low") {
          text.style.color = "green";
        } else if (result === "Medium") {
          text.style.color = "orange";
        } else if (result === "High") {
          text.style.color = "Red";
        }
    }
  })


});
