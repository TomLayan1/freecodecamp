// get all the html
const nameInput = document.querySelector('.js-name-field');
const nameErrorMessage = document.querySelector('.js-name-error-message');

const emailInput = document.querySelector('.js-email-field');
const emailErrorMessage = document.querySelector('.js-emial-error-message');


const phoneNumberInput = document.querySelector('.js-number-field');
const phoneNumberErrorMessage = document.querySelector('.js-number-error-message');


const subjectInput = document.querySelector('.js-subject-field');
const subjectErrorMessage = document.querySelector('.js-subject-error-message');


const messageInput = document.querySelector('.js-message-field');
const messageErrorMessage = document.querySelector('.js-message-error-message');

const sendButton = document.querySelector('.js-send-message-btn');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateContactForm();
})

function validateContactForm() {
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const numberInputValue = phoneNumberInput.value;
  const subjectInputValue = subjectInput.value;
  const messageInputValue = messageInput.value;

  if (nameInputValue === ''){
    nameErrorMessage.innerHTML = 'Name cannot be empty!';
    nameInput.style.border = '2px solid red';
  }else{
    nameInput.style.border = '2px solid green';
    nameErrorMessage.innerHTML = '';
  }

  if (emailInputValue === ''){
    emailErrorMessage.innerHTML = 'Enter a name!';
    emailInput.style.border = '2px solid red';
  }else{
    emailInput.style.border = '2px solid green';
    emailErrorMessage.innerHTML = '';
  }

  if (numberInputValue === ''){
    phoneNumberErrorMessage.innerHTML = 'Enter your Phone number!';
    phoneNumberInput.style.border = '2px solid red';
  }else if(numberInputValue.length < 9){
    phoneNumberErrorMessage.innerHTML = 'Phone number cannot be less than 10 digits';
  }else{
    phoneNumberInput.style.border = '2px solid green';
    phoneNumberErrorMessage.innerHTML = '';
  }

  if (subjectInputValue === ''){
    subjectErrorMessage.innerHTML = 'Enter a subject!';
    subjectInput.style.border = '2px solid red';
  }else{
    subjectInput.style.border = '2px solid green';
    subjectErrorMessage.innerHTML = '';
  }

  if (messageInputValue === ''){
    messageErrorMessage.innerHTML = 'Enter a subject!';
    messageInput.style.border = '2px solid red';
  }else if(messageInputValue.length < 70){
    messageErrorMessage.innerHTML = 'Message cannot be less than 70 characters';
  }else{
    messageInput.style.border = '2px solid green';
    messageErrorMessage.innerHTML = '';
  }

  // for success alert
  if (nameInputValue === '' || emailInputValue === '' || numberInputValue === '' || numberInputValue.length < 9 || subjectInputValue === '' || messageInputValue === '' || messageInputValue.length < 70){
    alert('Complete all fields to send message');
  }else{
    alert('Message sent successfully!');
  }
}