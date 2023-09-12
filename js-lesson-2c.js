document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    getResult('Rock');
  }
  else if (event.key === 'p'){
    getResult('Paper');
  }
  else if (event.key === 's'){
    getResult('Scissors');
  }
  else if (event.key === 'a'){
    autoPlay();
  }
  else if (event.key === 'Backspace'){
    confirmReset();
  }
})

// to confirm whether you want to reset score or not
function confirmReset(){
  document.querySelector('.js-confirm-div').innerHTML = `
  <p class="confirm-text">Are you sure you want to reset the score?</p>
  <button class="js-confirm-yes reset-confirm-btn">Yes</button>
  <button class="js-confirm-no reset-confirm-btn">No</button>
  `;

  document.querySelector('.js-confirm-yes').addEventListener('click', () => {
    resetScore();
    hideConfirmMessage();
  });
  document.querySelector('.js-confirm-no').addEventListener('click', () => {
    hideConfirmMessage();
  })
}


function hideConfirmMessage(){
  document.querySelector('.js-confirm-div').innerHTML = '';
}

// to autoplay the game
let isAutoPlay = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlay){
    intervalId = setInterval(() => {
    // we save computer move in the a variable so the player move can
    // select random numbers
      const playerMove = getComputerMove();
      getResult(playerMove);
    }, 1000)
    isAutoPlay = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlay = false;
  }

  let autoPlayText = document.querySelector('.js-autoplay-btn');
  if (autoPlayText.innerHTML === 'Autoplay'){
    autoPlayText.innerHTML = 'Stop Playing';
  }
  else{
    autoPlayText.innerHTML = 'Autoplay';
  }
}

// for getting random computer move
function getComputerMove(){
  let getRandomNumber = Math.random();
  let computerMove = '';
  if (getRandomNumber >= 0 && getRandomNumber < 1 / 3){
    computerMove = 'Rock';
  }else if (getRandomNumber >= 1 / 3 && getRandomNumber < 2 / 3){
    computerMove = 'Paper';  
  }else if (getRandomNumber > 2 / 3 && getRandomNumber < 1){
    computerMove = 'Scissors';
  }

  return computerMove;
}

// for updating the score
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

// to get player move, comepare it with the computer's move and get results
function getResult(playerMove){
  // putting the computer move function so the computer move can be accessed
  let computerMove = getComputerMove();
  let result = '';

  if (playerMove === 'Rock'){
    if (computerMove === 'Rock'){
      result = 'Tie';
    }
    else if (computerMove === 'Paper'){
      result = 'You Lose';
    }
    else if(computerMove === 'Scissors'){
      result = 'You Win';
    }
  }
  else if (playerMove === 'Paper'){
    if (computerMove === 'Rock'){
      result = 'You Win';
    }
    else if (computerMove === 'Paper'){
      result = 'Tie';
    }
    else if(computerMove = 'Scissors'){
      result = 'You Lose';
    }
  }
  else if(playerMove === 'Scissors'){
    if (computerMove === 'Rock'){
      result = 'You Lose';
    }
    else if (computerMove === 'Paper'){
      result = 'You Win';
    }
    else if(computerMove === 'Scissors'){
      result = 'Tie';
    }
  }


  if (result === 'You Win'){
    score.wins += 1;
  }
  else if(result === 'You Lose'){
    score.loses += 1;
  }
  else if (result === 'Tie'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  // interacttivity with the DOM
  document.querySelector('.moves').innerHTML = `you
  <img src="rpc-pics/${playerMove}-emoji.png" class="move-icon">
  <img src="rpc-pics/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  document.querySelector('.result').innerHTML = `${result}`;

  document.querySelector('.score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  console.log(score);
}

// to reset the score
function resetScore(){
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;

  document.querySelector('.score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  console.log(score);
}