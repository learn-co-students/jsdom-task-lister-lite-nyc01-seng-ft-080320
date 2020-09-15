document.addEventListener("DOMContentLoaded", () => {
  // your code here

    
    const sortButton = document.createElement('button');
    sortButton.innerText = "Sort";
    sortButton.classList.add("sort");

    const listBox = document.querySelector("#list");
    // listBox.appendChild(sortButton);
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

    //targetElement.insertAdjacentElement(position, element);

    const dropDown= `<label for="priority"> Priority:</label>
        <select id="cars" name="cars" size="1">
        <option value= "1" >High</option>
        <option value= "2" >Medium</option>
        <option value= "3" >Low</option>
        </select>`

    const form = document.querySelector('#create-task-form');
    const submit = document.querySelector("input[type=submit]");
    const priority =document.createElement('div');
    priority.innerHTML = dropDown;
    form.append(priority);

    submit.addEventListener('click',function(e){
        e.preventDefault();
        const taskLi = document.createElement("li");
        const parentUl = document.querySelector("#tasks");
        const inputValue = document.querySelector("#new-task-description");
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "X"
        deleteButton.classList.add("deleteButton")
        deleteButton.addEventListener('click', function(e2){
          console.log(e2)
            e2.preventDefault();
            deleteButton.parentNode.remove();
        })
      
        taskLi.textContent = inputValue.value;
        const priorityText = document.querySelector("#cars").value
        taskLi.style.color = priorityColor(priorityText)
        taskLi.classList.add(priorityText)
    
        taskLi.appendChild(deleteButton)
        parentUl.appendChild(taskLi);
        

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



/*
$('#sort').on('click', function() {
  var sortedElements = $('.greendivs, .orangedivs, .reddivs').sort(function(a, b) {
    debugger
    return a.className > b.className;
  });

  $('.container_for_alldivs').html(sortedElements);
});
*/