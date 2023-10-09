import {question} from '../data/question.js';

let quizHTML = '';

question.forEach((question) =>{
    quizHTML += `
    <div class="quiz-questionncontainer">
      <p class="quiz-questionn js-quiz-question">${question.question}</p>
      <img src="" alt="">
    </div>
    <div class="quiz-img-container">
      <img class="quiz-img" src="">
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option-${question.id}">
      <img src="" alt="" >
      <p class="quiz-option-value">${question.option.a}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option}">
      <img src="" alt="" >
      <p class="quiz-option-value">${question.option.b}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option">
      <img src="" alt="" >
      <p class="quiz-option-value">${question.option.c}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option">
      <img src="" alt="" >
      <p class="quiz-option-value">${question.option.d}</p>
    </div>`;
  });
  // console.log(quizHTML);
  
  let buttonHTML = '';
  question.forEach((question) =>{
    buttonHTML += `
    <button class="quiz-btn js-quiz-btn" data-quiz-id="${question.id}">1</button>
    `;
  });
  // console.log(buttonHTML);

  document.querySelector('.js-quiz-btn-container').innerHTML = buttonHTML;

  document.querySelectorAll('.js-quiz-btn').forEach((button) =>{
    button.addEventListener('click', () =>{
      const questionId = button.dataset.quizId;
      console.log(questionId);
      document.querySelector('.js-quiz-display-container').innerHTML= questionId;
    });
  });



/* <div class="quiz-questionncontainer">
<p class="quiz-questionn js-quiz-question">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat.</p>
<img src="" alt="">
</div>
<div class="quiz-img-container">
<img class="quiz-img" src="">
</div>
<div class="option-container">
<input class="option-selector" type="radio" name="quiz-option">
<img src="" alt="" >
<p class="quiz-option-value">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div class="option-container">
<input class="option-selector" type="radio" name="quiz-option">
<img src="" alt="" >
<p class="quiz-option-value">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div class="option-container">
<input class="option-selector" type="radio" name="quiz-option">
<img src="" alt="" >
<p class="quiz-option-value">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div class="option-container">
<input class="option-selector" type="radio" name="quiz-option">
<img src="" alt="" >
<p class="quiz-option-value">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div class="quiz-btn-container js-quiz-btn-container">
<button class="quiz-btn js-quiz-btn">1</button>
</div> */