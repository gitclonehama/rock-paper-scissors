

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let humanChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();
  while (!choices.includes(humanChoice)) {
      humanChoice = prompt('Invalid choice. Choose rock, paper, or scissors:').toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice){
    return 'tie';
  }else { // human != computer choice
      let winner = '';
      switch(humanChoice){
          case 'rock':
              if (computerChoice === 'scissors'){
                  winner = 'human';
              }else{  // computer chose 'paper'
                  winner = 'computer';
              }
              break;
          case 'paper':
              if (computerChoice === 'rock'){
                  winner = 'human';
              }else{  // computer chose 'scissors'
                  winner = 'computer';
              }
              break;
          case 'scissors':
              if (computerChoice === 'paper'){
                  winner = 'human';
              }else{  // computer chose 'rock'
                  winner = 'computer';
              }
              break;
      }
      return winner;
  }
}


function displayScore(humanScore, computerScore){
  console.log(`Computer: ${computerScore} You: ${humanScore}`);
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('human-score').innerText = humanScore;
}

function displayChoice(humanChoice, computerChoice){
  document.getElementById('human-choice').innerText = humanChoice;
  document.getElementById('computer-choice').innerText = computerChoice;
}

function displayGame(winner, humanChoice, computerChoice, humanScore, computerScore) {
  displayChoice(humanChoice, computerChoice);
  displayScore(humanScore, computerScore);
    if (winner === 'tie'){
        document.getElementById('round-result').innerText = "It's a tie!";
    }else if (winner === 'human'){
        document.getElementById('round-result').innerText = "You win!";
    }else{
        document.getElementById('round-result').innerText = "You lose!";
    }
}


const choiceButtons = document.querySelectorAll(".btn");
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

choiceButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (roundsPlayed < 5) {
            roundsPlayed++;
            const computerChoice = getComputerChoice();
            const humanChoice = this.innerText.toLowerCase();
            const winner = playRound(humanChoice, computerChoice);
            switch (winner){
                case 'tie':
                    break;
                case 'human':
                    humanScore++;
                    break;
                case 'computer':
                    computerScore++;
                    break;
            }
            console.log(`Rounds Remaining: ${5 - roundsPlayed} \n Computer: ${computerScore} You: ${humanScore}`)
            if (roundsPlayed == 5) {
                (humanScore > computerScore)?
                console.log(`You won ${humanScore} to ${computerScore}!`) : 
                console.log(`You lose ${humanScore} to ${computerScore}.`);
            }
        }
    })
});