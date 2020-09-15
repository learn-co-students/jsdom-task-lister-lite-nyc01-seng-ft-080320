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

function createPriorityDropdown(priorityDropdown){
  const levels = [`high`, `medium`, `low`];
  
  for (i of levels) {
    const newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i;
    priorityDropdown.append(newOption);
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const priorityDropdown = document.createElement('select');

  createPriorityDropdown(priorityDropdown);
  
  
  // stick in priority dropdown
  const inputBox = document.querySelector('#new-task-description');
  inputBox.insertAdjacentElement("afterend", priorityDropdown)

  // grab submit button
  const submitButton = document.querySelector('input:last-child');
  submitButton.addEventListener('click', function(e){
    // don't submit w/ redirect
    e.preventDefault();

    // capture task text that was input
    let newTask = document.querySelector('#new-task-description').value;
    let newUser = document.querySelector('#new-task-user').value;

    const taskList = document.querySelector('#tasks');
    const taskItem = document.createElement('li');

    // select class for task
    assignPriority(priorityDropdown, taskItem);

    // add new task to list
    taskItem.textContent = 'Task: ' + newTask + ', User: ' + newUser;
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
      taskBox.value = newTask;
      const userBox = document.querySelector('#edit-task-user');
      userBox.value = newUser;

      const saveButton = document.querySelector('#save-task');
      saveButton.addEventListener('click', function(e){
        newTask = taskBox.value;
        newUser = userBox.value;
        assignPriority(document.querySelector('#edit-priority'), taskItem);

        taskItem.textContent = 'Task: ' + newTask + ', User: ' + newUser;
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