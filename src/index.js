function assignPriority(priorityField, taskItem){
  switch(priorityField.value) {
    case 'high': 
      taskItem.className = "high-priority";
      break;
    case 'medium':
      taskItem.className = "medium-priority";
      break;
    case 'low':
      taskItem.className = "low-priority";
      break;   
  }
}

function createPriorityDropdown(){
  const dropdown = document.createElement('select');
  dropdown.className = "priority-dropdown"
  const levels = [`high`, `medium`, `low`];
  
  for (i of levels) {
    const newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i;
    dropdown.append(newOption);
  }
  const inputBox = document.querySelector('.task-description');
  inputBox.insertAdjacentElement("afterend", dropdown);
}

document.addEventListener("DOMContentLoaded", () => {

  
  createPriorityDropdown();

  // grab submit button
  const submitButton = document.querySelector('input:last-child');
  submitButton.addEventListener('click', function(e){
    // don't submit w/ redirect
    e.preventDefault();

    // capture task text that was input
    let task = document.querySelector('.task-description').value;
    let taskUser = document.querySelector('#new-task-user').value;

    const taskList = document.querySelector('#tasks');
    const taskItem = document.createElement('li');

    // select class for task
    assignPriority(document.querySelector('.priority-dropdown'), taskItem);

    // add new task to list
    taskItem.textContent = 'Task: ' + task + ', User: ' + taskUser;
    taskList.append(taskItem);

    // add edit button for that new task
    const editButton = document.createElement('button');
    editButton.textContent = 'edit Task';
    taskItem.append(editButton);

    // change task to edit field when delete button is clicked
    editButton.addEventListener('click', function(e) {
      taskItem.innerHTML = `
        <form id="edit-task-form" action="#" method="post">
          <label for="edit-task-description">Task description:</label>
          <input type="text" id="edit-task-description" name="edit-task-description"><br>
          <label for="edit-task-user">User:</label>
          <input type="text" id="edit-task-user" name="edit-task-user">
          <select id="edit-priority">
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
          <input type="submit" id="save-task" value="Save Task">
        </form>
      `

      const taskBox = document.querySelector('#edit-task-description');
      taskBox.value = task;
      const userBox = document.querySelector('#edit-task-user');
      userBox.value = taskUser;

      const saveButton = document.querySelector('#save-task');
      saveButton.addEventListener('click', function(e){
        task = taskBox.value;
        taskUser = userBox.value;
        assignPriority(document.querySelector('#edit-priority'), taskItem);

        taskItem.textContent = 'Task: ' + task + ', User: ' + taskUser;
      // add edit button for that new task
   
        taskItem.append(editButton);
      })
    });

    // add delete button for that new task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    taskItem.append(deleteButton);

    // remove task when delete button is clicked
    deleteButton.addEventListener('click', function(e){
      taskItem.remove();
    });
  }, false);  
});