// get data from storage directly from the storege without exporting and importing
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
if (!registeredUsers){
  registeredUsers = [];
}
console.log(registeredUsers);
// LOGIN VALIDATION
let loginErrorMessage = document.querySelector('.js-login-error-message');

let loginUsername = document.querySelector('.js-Username-field');

let loginPassword = document.querySelector('.js-password-field');

const loginButton = document.querySelector('.js-login-form-button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  let loginUsernameValue = loginUsername.value;
  let loginPasswordValue = loginPassword.value;
  let successLogin = false
  registeredUsers.forEach((registeredUsers) => {
    if (loginUsernameValue == registeredUsers.username && loginPasswordValue == registeredUsers.password) {
      successLogin = true
    }
  })
  if(!successLogin){
    loginErrorMessage.innerHTML =  'Invalid Username or Password';
    }else{
      window.location.href = '/quiz.html'
  }
});