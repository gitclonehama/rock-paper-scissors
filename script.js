

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return 'tie';
    switch(humanChoice){
        case 'rock':
            return (computerChoice === 'scissors') ? 'human' : 'computer';
        case 'paper':
            return (computerChoice === 'rock') ? 'human' : 'computer';
        case 'scissors':
            return (computerChoice === 'paper') ? 'human' : 'computer';
    }
}

function displayScore(humanScore, computerScore){
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('human-score').innerText = humanScore;
}

function displayChoice(humanChoice, computerChoice){
  document.getElementById('human-choice').innerText = humanChoice;
  document.getElementById('computer-choice').innerText = computerChoice;
}

function displayResult(winner) {
    const result = document.getElementById('round-result');
    switch (winner) {
        case 'human':
            result.innerText = 'You win!';
            break;
        case 'computer':
            result.innerText = 'You lose!';
            break;
        case 'tie':
            result.innerText = 'Tie!';
            break;
    }
}

function displayGame(winner, humanChoice, computerChoice, humanScore, computerScore){
    displayScore(humanScore, computerScore);
    displayChoice(humanChoice, computerChoice);
    displayResult(winner);
}

function resetGame() {
    const result = document.getElementById('round-result');
    humanScore = 0;
    computerScore = 0;
    displayScore(humanScore, computerScore);
    displayChoice('?', '?');
    result.innerText = '....................';
}

// Reset button event listener
document.getElementById('reset').addEventListener("click", function() {
    resetGame();
});


const choiceButtons = document.querySelectorAll(".btn");
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;
choiceButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (roundsPlayed < 50) {
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
            displayScore(humanScore, computerScore);
            displayChoice(humanChoice, computerChoice);
            displayResult(winner);
            if (humanScore === 10 || computerScore === 10) {
                (humanScore > computerScore)?
                document.querySelector("#round-result").innerText = (`You won ${humanScore} to ${computerScore}!`) :
                document.querySelector("#round-result").innerText =(`You lose ${humanScore} to ${computerScore}.`);
                resetGame();
            }
        }
    })
});
