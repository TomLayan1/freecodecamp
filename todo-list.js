let todoList = [];

renderTodoList();

function renderTodoList() {
  /* we use the accumulator pattern to combine each of the html and display them on the webpage
 1. we make a variable below to store each html */
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
  // generating the html using html using javascript
    const html = `<p>${todo}</p>`;

  // as we loop through the array we save each html into the todoListHTML variable
    todoListHTML += html;
  }

  document.querySelector('.js-output').innerHTML = todoListHTML;
}


// onclick, this function is called and it gets and adds the inputed value into the list
function makeTodoList(){
  let inputList = document.querySelector('.js-list-input');
  let list = inputList.value;

// .push() add a value to an array 
  todoList.push(list);

// the function is called when the onclick function is called
  renderTodoList()
// the input field becomes empty as the add button is clicked or enter is pressed
  inputList.value = '';
}

// on pressing the enter key, this function is called does the same task as the onclick function
function enterToMakeList(event){
  if (event.key === 'Enter'){
    makeTodoList();
  }
}