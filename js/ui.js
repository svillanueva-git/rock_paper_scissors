
let playerScore = 0;
let computerScore = 0;

// Computer selection
function computerPlay() {
    let selection = ['rock', 'paper', 'scissors']
    let randomizer = Math.floor(Math.random() * 3);
    return selection[randomizer];
}

// One round of the game
function playRound(player, computer) {
    if (player == 'rock' && computer == 'scissors') {
        return playerScore += 1;
    
    } else if (player == 'paper' && computer == 'rock') {
        return playerScore += 1;
        
    } else if (player == 'scissors' && computer == 'paper') {
        return playerScore += 1;
   
    } else if (player == computer) {
        return 0;

    } else {
        return computerScore += 1;
    }
}

// Adds text to the new div
function runningScore(player, computer) {
    content.textContent = `Your Score: ${player} Computer Score: ${computer}`;
    results.appendChild(content);
} 

function announceFinalWinner(player, computer) {
    if (player > computer) {
        content.textContent = `You WIN! With a final score of ${playerScore} - ${computerScore}`;
    } else {
        content.textContent = `You've lost :( with a final score of ${playerScore} - ${computerScore}`;
    }   
    results.appendChild(content);
}   

// Main event listener
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#resultsArea')
const content = document.createElement('div');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        let playerSelection = button.name;
        let computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);

        if ((playerScore == 5) || (computerScore == 5)) {
            announceFinalWinner(playerScore, computerScore);
        } else {
            playRound(playerSelection, computerSelection);
            runningScore(playerScore, computerScore);
        }
        
    });
});