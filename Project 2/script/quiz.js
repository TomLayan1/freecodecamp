import {question} from '../data/question.js';

let quizHTML = '';

let firstQuestion = question[0];
    quizHTML = `
    <div class="quiz-questionncontainer">
      <p class="quiz-questionn js-quiz-question">${firstQuestion.question}</p>
      <img src="" alt="">
    </div>
    <div class="quiz-img-container">
      <img class="quiz-img" src="">
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option-${firstQuestion.id}" value="A">
      <img src="" alt="" >
      <p class="quiz-option-value">${firstQuestion.option.a}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option-${firstQuestion.id}" value="B">
      <img src="" alt="" >
      <p class="quiz-option-value">${firstQuestion.option.b}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option-${firstQuestion.id}" value="C">
      <img src="" alt="" >
      <p class="quiz-option-value">${firstQuestion.option.c}</p>
    </div>
    <div class="option-container">
      <input class="option-selector" type="radio" name="quiz-option-${firstQuestion.id}" value="D">
      <img src="" alt="" >
      <p class="quiz-option-value">${firstQuestion.option.d}</p>
    </div>
     `;
    document.querySelector('.js-quiz-display-container').innerHTML = quizHTML;
    document.querySelectorAll('.option-selector').forEach((radio) => {
      radio.addEventListener('change', ()=>{
        console.log('correct');
        let questionButton = document.querySelectorAll('.quiz-btn');
        questionButton.style.backgroundColor = 'black';  
      })
    })