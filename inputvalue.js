 // the submit button when clicked calls the function and displays the output
 function getName(){
  let inputElement = document.querySelector('.js-name');
  let nameInput = inputElement.value;
  
  document.querySelector('.js-output').innerHTML = `Your name is ${nameInput}.`;
}

// the enter key when pressed calls the function and displays the result on the screen
function enterToGetName(event){
  if (event.key === 'Enter'){
    getName();
  }
}