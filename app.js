const todoInput = document.querySelector('.todo__input');
const todoItems = document.querySelector('.todo__items');
const items = document.querySelectorAll(".list-group-item")

function addTodo() {
   todoInput.addEventListener("keypressS", function (e) {
       //console.log(e.keyCode);
       if (e.keyCode === 13) {
           //console.log("You hit enter.");
           //const newValue = todoInput.value;

           /*const li = document.createElement('li');
           li.className = "list-group-item";
           li.textContent = newValue;*/
           const newItem = createNewElement(todoInput.value);

           //todoItems.appendChild(newItem);
           todoItems.insertBefore(newItem, todoItems.childNodes[0]);
           todoInput.value = "";
       }
   });
}
function createNewElement(text) {
    const li = document.createElement("li");
           li.className = "list-group-item";
           li.textContent = text;
           return li;
}
function completedTask(){
 for(const item of items) {
    
    item.addEventListener('click', function (e) {
        const listItem = e.target.classList;
        //console.log(e.target.classList.contains('list-group-item'));
      //console.log(e.target);
      if(e.target.classList.contains('list-group-item')){
      
      } 
        //console.log("Right element");
        e.target.classList.toggle("completed"); 
    });
 }
}

completedTask();

addTodo();