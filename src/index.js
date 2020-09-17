document.addEventListener("DOMContentLoaded", () => {

  function addSortButton() {
    let list = document.getElementById("list");
    let sortButton = document.createElement("div");
    sortButton.innerHTML =
    `<button type="button" id="sort-button">Sort by Priority</button>`;
    list.append(sortButton);
  }

  addSortButton();


  // Click Listener to add task
  document.addEventListener("submit", function(e) {
    e.preventDefault();

    let task = document.getElementById("new-task-description");
    let taskList = document.getElementById("tasks");
    let newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem["priority"] = 3;
    newListItem.innerHTML = 
    `<p class="task-text">${task.value}</p>
    <form> 
      <select name="priority" class="priority">
        <option value="1"> High Priority </option>
        <option value="2"> Medium Priority </option>
        <option value="3"> Low Priority </option>
      </select>
    </form>
    <button type="button" id="delete-button"> X </button>`
    taskList.append(newListItem);
    task.value = "";
  })

  //  Click Listener for Sort 
  document.addEventListener('click', function(e) {
    if (e.target.id === "sort-button") {
      sortTasks();
     }
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

        if (result === "3") {
          closestLi["priority"] = 3;
          text.style.color = "green";
        } else if (result === "2") {
          closestLi["priority"] = 2;
          text.style.color = "orange";
        } else if (result === "1") {
          closestLi["priority"] = 1;
          text.style.color = "Red";
        }
    }
  })

  function sortTasks(){

    let old_ul = document.querySelector("#tasks");
    console.log("Old UL");
    console.log(old_ul);

    let new_ul = old_ul.cloneNode(true);
    console.log("New UL");
    console.log(new_ul);

    let lis = [];
    for (let i = 0; i < old_ul.children.length; i++) {
      if(old_ul.children[i].nodeName === "LI") {
        lis.push(old_ul.children[i]);
      }
    }

    lis.sort((a, b) => {
      return a.priority - b.priority;
    });

    for(let i = 0; i < lis.length; i++) {
      new_ul.appendChild(lis[i]);
      old_ul.parentNode.replaceChild(new_ul, old_ul);
    }


  }


});
