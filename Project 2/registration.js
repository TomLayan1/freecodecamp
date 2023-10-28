// let registrationContainer = document.querySelector('.js-registration-container');

// registrationContainer.innerHTML = signupHTML;
// // `
// // <div class="btn-container">
// // <button class="js-login-btn login-btn">Log In</button>
// // <button class="js-signup-btn sign-up-btn">Sign Up</button>
// // </div>
// // `;

// // for login field
// const loginHtML =  `
// <div class="login-form-contaner">
//   <form class="login-form">
//     <div class="Username-container">
//       <label class="username-indicator">Username</label>
//       <input type="text" class="js-username-login Username-field">
//     </div>
//     <div class="js-password-login password-container">
//       <label class="password-indicator">Password</label>
//       <input type="password" class="password-field">
//     </div>
//     <button class="login-form-button">Log In</button>
//   </form>
//   <p class="direct-to-signup" style="text-align: center; padding: 5px;">Haven't registered?
//       <a class="js-click-to-sinup" style="color: blue" onclick="clickToSignup()">Click here</a></p>
// </div>
// `;
// const loginButton = document.querySelector('.js-login-btn');
// loginButton.addEventListener('click', () =>{
//   registrationContainer.innerHTML = loginHtML;
// });

// // for sign field
// const signupHTML = `
// <div class="form-container">
//   <form class="form">
//     <div class="input-container">
//       <label class="input-label">Username</label>
//       <input class="js-signup-username input-field" id="username" type="text" placeholder="Enter your name here">
//     </div>
//     <div class="input-container">
//       <label class="input-label">Email</label>
//       <input class="input-field" id="email" type="email" placeholder="Enter your email here">
//     </div>
//     <div class="input-container">
//       <label class="input-label">Password</label>
//       <input class="input-field" id="password" type="password" placeholder="Enter your name here">
//     </div>
//     <div class="input-container">
//       <label class="input-label">Confirm Password</label>
//       <input class="input-field" id="password-check" type="password" placeholder="Enter your name here">
//     </div>
//     <button class="js-sigup-form-btn form-sign-btn">Sign Up</button>
//   </form>
// </div>
// `;
// const signupButton = document.querySelector('.js-signup-btn');
// signupButton.addEventListener('click', () =>{
//   registrationContainer.innerHTML = signupHTML;
// });

// // to signup from log in page
// function clickToSignup() {
//   registrationContainer.innerHTML = signupHTML;
// }

// registered user will be stored in the array and saved in local storage.
const registeredUsers = [];

// signup form validation


const signupUsername = document.querySelector('.js-signup-username');

const signupEmail = document.querySelector('.js-email-field');

const signupPassword = document.querySelector('.js-password-field');

const signupConfirmPassword = document.querySelector('.js-passwordcheck-field');

const errorMessage = document.querySelector('.error-message');
console.log(errorMessage)

// console.log(usernameSignup);

const signupFormButton = document.querySelector('.js-sigup-form-btn');
// console.log(signupFormButton);

signupFormButton.addEventListener('click', (e)=>{
  e.preventDefault();

  let signupUsernameValue = signupUsername.value;
  let signupEmailValue = signupEmail.value;
  let signupPasswordValue = signupPassword.value;
  let signupConfirmPasswordValue = signupConfirmPassword.value;

  // username validation
  if (signupUsernameValue === ''){
    signupUsername.style.border = '2px solid red';
    errorMessage.innerHTML = 'Username cannot be empty';
  }else{
    signupUsername.style.border = '2px solid green';
    errorMessage.innerHTML = '';
  }
  // email validation
  if (signupEmailValue === ''){
    signupEmail.style.border = '2px solid red';
    errorMessage.innerHTML = 'Username cannot be empty';
  }else{
    signupEmail.style.border = '2px solid green';
    errorMessage.innerHTML = '';
  }
  // password validation
  if (signupPasswordValue === ''){
    signupPassword.style.border = '2px solid red';
    errorMessage.innerHTML = 'Username cannot be empty';
  }else{
    signupPassword.style.border = '2px solid green';
    errorMessage.innerHTML = '';
  }
  // password check validation
  if (signupConfirmPasswordValue !== signupPasswordValue){
    signupConfirmPassword.style.border = '2px solid red';
    errorMessage.innerHTML = 'Password must be the same';
  }else{
    signupConfirmPassword.style.border = '2px solid green';
    errorMessage.innerHTML = '';
  }
  console.log(signupUsernameValue,
    signupEmailValue,
    signupConfirmPasswordValue,
    signupPasswordValue);
})

// functon verifyEmail(){
//   return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+[a-zA-Z]{2,}))$/
// }

