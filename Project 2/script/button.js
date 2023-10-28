import {question} from '../data/question.js';

let buttonHTML = '';
question.forEach((question, index) =>{
  buttonHTML += `
  <button class="quiz-btn js-quiz-btn" data-quiz-id="${question.id}">${index + 1}</button>
  `;
});
document.querySelector('.js-quiz-btn-container').innerHTML = buttonHTML;

document.querySelectorAll('.js-quiz-btn').forEach((button) =>{
  button.addEventListener('click', () =>{
    const questionId = button.dataset.quizId;
    question.forEach((question, index) =>{
      if (question.id === questionId){
        let questionHTML = `
            <div class="quiz-questionncontainer">
              <p class="quiz-questionn js-quiz-question">${question.question}</p>
              <img src="" alt="">
            </div>
            <div class="quiz-img-container">
              <img class="quiz-img" src="">
            </div>
            <div class="option-container">
              <input class="option-selector js-option-selector" type="radio" name="quiz-option-${question.id}" value="A">
              <img src="" alt="" >
              <p class="quiz-option-value">${question.option.a}</p>
            </div>
            <div class="option-container">
              <input class="option-selector js-option-selector" type="radio" name="quiz-option-${question.id}" value="B">
              <img src="" alt="" >
              <p class="quiz-option-value">${question.option.b}</p>
            </div>
            <div class="option-container">
              <input class="option-selector js-option-selector" type="radio" name="quiz-option-${question.id}" value="C">
              <img src="" alt="" >
              <p class="quiz-option-value">${question.option.c}</p>
            </div>
            <div class="option-container">
              <input class="option-selector js-option-selector" type="radio" name="quiz-option-${question.id}" value="D">
              <img src="" alt="" >
              <p class="quiz-option-value">${question.option.d}</p>
            </div>
            `;
        document.querySelector('.js-quiz-display-container').innerHTML = questionHTML;
        document.querySelectorAll('.option-selector').forEach((radio) => {
          radio.addEventListener('change', ()=>{
            console.log('correct');
            let questionButton = document.querySelectorAll('.quiz-btn');
            questionButton.style.backgroundColor = 'black';
          });
        });
      }
      buttonHTML += `
      <button class="quiz-btn js-quiz-btn" data-quiz-id="${question.id}">${index + 1}</button>
      `;
    });
  });
});
