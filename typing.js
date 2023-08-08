// each time a key that is punched while typing is released the function is called and is displayed
function showInput(){
  let inputValue = document.querySelector('.js-input');
  let input = inputValue.value;

  document.querySelector('.js-output').innerHTML = `${input}`;
}