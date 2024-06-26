

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`You both chose ${humanChoice}, it's a tie!`) // Using template literal
    }else{ // human != computer choice
        switch(humanChoice){
            case 'rock':
                if (computerChoice === 'scissors'){
                    console.log('You win! Rock beats scissors!')
                }else{  // computer chose 'paper'
                    console.log('You lose! Paper beats rock!')
                }
                break;
            case 'paper':
                if (computerChoice === 'rock'){
                    console.log('You win! Paper beats rock!')
                }else{  // computer chose 'scissors'
                    console.log('You lose! Scissors beat paper!')
                }
                break;
            case 'scissors':
                if (computerChoice === 'paper'){
                    console.log('You win! Scissors beat paper!')
                }else{  // computer chose 'rock'
                    console.log('You lose! Rock beats paper!')
                }
                break;
        }
    }
}


// console.log('Human choice:', getHumanChoice());
// console.log('Computer choice:', getComputerChoice());