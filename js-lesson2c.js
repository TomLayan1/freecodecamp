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

  // interacttivity with the DOM
  document.querySelector('.moves').innerHTML = `You played ${playerMove}, computer played ${computerMove}`;
  document.querySelector('.result').innerHTML = `${result}`;
}