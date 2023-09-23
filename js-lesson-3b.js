const button = document.querySelector('.get-value-btn');
button.addEventListener('click', (button) =>{
  console.log('code is working');
  const selectElement = document.getElementById('js-value-selector');
  const value = selectElement.value;

  const displayValue = document.querySelector('.js-show-value');
  displayValue.innerHTML = `You chose ${value}`;
});