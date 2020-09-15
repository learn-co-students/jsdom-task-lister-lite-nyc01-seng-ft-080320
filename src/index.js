document.addEventListener("DOMContentLoaded", () => {

    // Sort button for task list
    const sortButton = document.createElement('button');
    sortButton.innerText = "Sort";
    sortButton.classList.add("sort");

    const listBox = document.querySelector("#list");
    listBox.insertAdjacentElement('afterend', sortButton)

    sortButton.addEventListener('click', function(){
        const tasks = Array.prototype.slice.call(document.querySelectorAll('li'));
        const sorted = tasks.sort(function (a,b) {
            return a.className - b.className
        });
        const list = document.querySelector('ul');
        list.innerHTML = ""
        for (item of sorted){
          list.appendChild(item); 
        }
      })

    //drop down menu in form

    const dropDown= `<label for="priority"> Priority:</label>
        <select id="priority" name="priority" size="1">
        <option value= "1" >High</option>
        <option value= "2" >Medium</option>
        <option value= "3" >Low</option>
        </select>`

    const form = document.querySelector('#create-task-form');
    const submit = document.querySelector("input[type=submit]");
    const priority =document.createElement('div');
    priority.innerHTML = dropDown;
    form.append(priority);
    // form.insertBefore(priority, submit);

    //EventHandler for submit button
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const taskLi = document.createElement("li");

        const inputValue = document.querySelector("#new-task-description");
        taskLi.textContent = inputValue.value;

        const priorityText = document.querySelector("#priority").value
        taskLi.style.color = priorityColor(priorityText)
        taskLi.classList.add(priorityText)

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "X"
        deleteButton.classList.add("deleteButton")
        deleteButton.addEventListener('click', function(e2){
          console.log(e2)
            e2.preventDefault();
            deleteButton.parentNode.remove();
        })
        taskLi.appendChild(deleteButton)

        const parentUl = document.querySelector("#tasks");
        parentUl.appendChild(taskLi);

        document.querySelector("#create-task-form").reset();
    });

    function priorityColor(priorityValue){
        switch(priorityValue){
            case "1" : 
                return "red";
                break;
            case "2" :
                return "yellow";
                break;
            case "3" :
                return "green";
                break;
            default:
                return "blue"; //just for fun (Blue means something wrong with our code)
                break;
        }
    }
});
