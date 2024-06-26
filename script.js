

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

// console.log('Human choice:', getHumanChoice());
// console.log('Computer choice:', getComputerChoice());