 // For score
 let score = JSON.parse(localStorage.getItem('score')) || 
 {
   wins: 0,
   loses: 0
 };

 // To get player move and compare with computer move to get result and scores
 function playGame(playerMove){
   const computerMove = pickComputerMove();
   let result = '';

   if(playerMove === 'heads'){
     if (computerMove === 'heads'){
     result = 'You win';
     }
     else if (computerMove === 'tails') {
       result = 'You lose'
     }
   }
   else if (playerMove === 'tails'){
     if (computerMove === 'heads'){
     result = 'You lose';
     }
     else if (computerMove === 'tails') {
       result = 'You win';
     }
   }
   
   if (result === 'You win'){
     score.wins += 1;
   }
   else if (result === 'You lose'){
     score.loses += 1;
   }

   localStorage.setItem('score', JSON.stringify(score));

   document.querySelector('.moves').innerHTML = `You picked ${playerMove}. Computer played ${computerMove}`;

   document.querySelector('.result').innerText = `${result}`;

   document.querySelector('.score').innerText = `Wins: ${score.wins} Loses: ${score.loses}`;
 }

 //For computer move.
 const computerMove = pickComputerMove();
 function pickComputerMove(){
   let computerMove = '';
   let randomNumber = Math.random();

   if (randomNumber >= 0 && randomNumber < 1 / 2){
     computerMove = 'heads';
   }
   else if (randomNumber >= 1 / 2 && randomNumber < 1){
     computerMove = 'tails';
   }

   return computerMove;
 }