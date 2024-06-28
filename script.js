

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
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


function updateScore(humanScore, computerScore){
  console.log(`Computer: ${computerScore} You: ${humanScore}`);
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('human-score').innerText = humanScore;
}

function updateChoice(humanChoice, computerChoice){
  document.getElementById('human-choice').innerText = humanChoice;
  document.getElementById('computer-choice').innerText = computerChoice;
}

// Don't forget to reset display after calling this function
function updateResult(winner) {
    if (winner === 'tie'){
        document.getElementById('round-result').innerText = "It's a tie!";
    }else if (winner === 'human'){
        document.getElementById('round-result').innerText = "You win!";
    }else if (winner === 'computer'){
        document.getElementById('round-result').innerText = "You lose!";
    }else{
        document.getElementById('round-result').innerText = "";
    }
}

function displayGame(winner, humanChoice, computerChoice, humanScore, computerScore){
    updateScore(humanScore, computerScore);
    updateChoice(humanChoice, computerChoice);
    updateResult(winner);
}


const choiceButtons = document.querySelectorAll(".btn");
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;
choiceButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (roundsPlayed < 100) {
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
            // displayGame(winner, humanChoice, computerChoice, humanScore, computerScore);
            updateScore(humanScore, computerScore);
            updateChoice(humanChoice, computerChoice);
            updateResult(winner);
            if (humanScore === 10 || computerScore === 10) {
                (humanScore > computerScore)?
                alert(`You won ${humanScore} to ${computerScore}!`) :
                alert(`You lose ${humanScore} to ${computerScore}.`);
            }
        }
    })
});

// Reset Button
document.getElementById('reset').addEventListener("click", function() {
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
    updateScore(humanScore, computerScore);
    updateChoice('?', '?');
    updateResult('');
});
