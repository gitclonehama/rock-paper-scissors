

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
      console.log(`You both chose ${humanChoice}, it's a tie!`) // Using template literal
  }else { // human != computer choice
      let winner = ''
      switch(humanChoice){
          case 'rock':
              if (computerChoice === 'scissors'){
                  winner = 'human'
                  console.log('You win! Rock beats scissors!')
              }else{  // computer chose 'paper'
                  winner = 'computer'
                  console.log('You lose! Paper beats rock!')
              }
              break;
          case 'paper':
              if (computerChoice === 'rock'){
                  winner = 'human'
                  console.log('You win! Paper beats rock!')
              }else{  // computer chose 'scissors'
                  winner = 'computer'
                  console.log('You lose! Scissors beat paper!')
              }
              break;
          case 'scissors':
              if (computerChoice === 'paper'){
                  winner = 'human'
                  
                  console.log('You win! Scissors beat paper!')
              }else{  // computer chose 'rock'
                  winner = 'computer'
                  console.log('You lose! Rock beats paper!')
              }
              break;
      }
      return winner;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let rounds = 5;
  while (rounds >= 1 && rounds <= 5){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner === 'human'){
      humanScore++;
    }else if (winner === 'computer'){
      computerScore++;
    }
    rounds--;
  }
  if (humanScore != computerScore) {
    (humanScore > computerScore) ?
    console.log(`You win! Your score: ${humanScore} Computer score: ${computerScore}`) :
    console.log(`You lose! Your score: ${humanScore} Computer score: ${computerScore}`);
  }
}




// playGame();

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection,computerSelection);