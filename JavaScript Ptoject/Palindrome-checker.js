const input = document.getElementById('text-input');
const output = document.getElementById('result');
const button = document.getElementById('check-btn');

button.addEventListener('click', () => {
  const str = input.value;
  palindrome(str)
})

function palindrome(str) {
  const fixedString = str.replace(/\W+|_/g, '').toLowerCase();
  const result = fixedString.split('').reverse().join('');
  if (fixedString === result) {
   output.innerHTML = str + ' is a palindrome';
  } else {
   output.innerHTML = str + ' is not a palindrome';
  }

  if (str === '') {
    alert('Please input a value');
  }
}