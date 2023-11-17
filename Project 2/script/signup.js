// SIGNUP VALIDATION
const signupUsername = document.querySelector('.js-signup-username');

const signupEmail = document.querySelector('.js-email-field');

const signupPassword = document.querySelector('.js-password-field');

const signupConfirmPassword = document.querySelector('.js-passwordcheck-field');

const usernameErrorMessage = document.querySelector('.username-error-message');
const emailErrorMessage = document.querySelector('.email-error-message');
const passwordErrorMessage = document.querySelector('.password-error-message');
const passwordcheckErrorMessage = document.querySelector('.password-check-error-message');

const signupFormButton = document.querySelector('.js-sigup-form-btn');

let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
if (!registeredUsers){
  registeredUsers = [];
}
console.log(registeredUsers);
// let registeredUsers = [];

signupFormButton.addEventListener('click', (e)=>{
  e.preventDefault();
  validation();
});

function validation(){
  let signupUsernameValue = signupUsername.value;
  let signupEmailValue = signupEmail.value;
  let signupPasswordValue = signupPassword.value;
  let signupConfirmPasswordValue = signupConfirmPassword.value; 


  // // username validation
  if (signupUsernameValue === ''){
    signupUsername.style.border = '2px solid red';
    usernameErrorMessage.innerHTML = 'Username cannot be empty';
  }else{
    signupUsername.style.border = '2px solid green';
    usernameErrorMessage.innerHTML = '';
  }
  // email validation
  if (signupEmailValue === ''){
    signupEmail.style.border = '2px solid red';
    emailErrorMessage.innerHTML = 'Email cannot be empty';
  }else{
    signupEmail.style.border = '2px solid green';
    emailErrorMessage.innerHTML = '';
  }
  // password validation
  if (signupPasswordValue === ''){
    signupPassword.style.border = '2px solid red';
    passwordErrorMessage.innerHTML = 'Password cannot be empty';
  }else if(signupPasswordValue.length < 7){
    signupPassword.style.border = '2px solid red';
    passwordErrorMessage.innerHTML = 'Password cannot be less than 8 characters';
  }else{
    signupPassword.style.border = '2px solid green';
    passwordErrorMessage.innerHTML = '';
  }
  // password check validation
  if (signupConfirmPasswordValue !== signupPasswordValue){
    signupConfirmPassword.style.border = '2px solid red';
    passwordcheckErrorMessage.innerHTML = 'Password must be the same';
  }else{
    signupConfirmPassword.style.border = '2px solid green';
    passwordcheckErrorMessage.innerHTML = '';
  }

  if(signupUsernameValue === '' || signupEmailValue === '' || signupPasswordValue === '' || signupConfirmPasswordValue === ''){
    console.log('Complete registration');
  }else{
    registeredUsers.push({
      username: signupUsernameValue,
      email: signupEmailValue,
      password: signupPasswordValue
    });
    alert('Account creation successful');
    window.location.href = '/login.html'
  };
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}