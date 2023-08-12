// we store the array a global variable variable to it can be accessed by every function and loop
let todoList = [{name: '', dueDate: ''}];

renderTodo();

function renderTodo(){
  // we use an accumulator pattarn to combine all the html code together
  let todoListHTML = '';

  for(let i = 1; i < todoList.length; i++){
    let todo = todoList[i];
    let name = todo.name;
    let dueDate = todo.dueDate;

  // generate html code for each list and button
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="js-delete-btn" onclick="todoList.splice(${i}, 1); renderTodo();">Delete</button>
    `;

  // this displays the list on the website
    todoListHTML += html;

    if (i === 8){
      break;
    }
  }
  document.querySelector('.js-output').innerHTML = todoListHTML;
  console.log(todoListHTML);
}

function addTodoList() {
  let textInput = document.querySelector('.js-input');
  let name = textInput.value;

  let dateInput = document.querySelector('.js-date');
  let dueDate = dateInput.value;


  todoList.push({name: name, dueDate: dueDate});

// this makes the input fields empty after a value has been added
  textInput.value = '';
  dateInput.value = '';

// the function will be called when add button is clicked
  renderTodo();

  console.log(todoList);
}

// the funtion allows the list to be add when the enter key is pressed
function enterToAddList(event){
  if (event.key === 'Enter'){
    addTodoList();
  }
}