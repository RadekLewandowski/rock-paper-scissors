
const choice = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerPlay = choice[Math.floor(Math.random() * choice.length)] 
    return computerPlay
}



function playRound(playerSelection, computerSelection) {

let YouLose = `You lose ${computerSelection} beats ${playerSelection.toLowerCase()}!`
let YouWin = `You win ${playerSelection.toLowerCase()} beats ${computerSelection}!`

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    
        
        return YouLose   
        score ++
        
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        
         return YouWin
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        
       return YouLose
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
          
     return YouWin

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {

        return YouLose
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        
        return YouLose

    }else if(playerSelection.toLowerCase() ===  computerSelection) {
        
        return "Tie!"

    } else {
        return "Error"
    }


}

// function checkWinner() {
//     if (playRound(playerSelection, computerSelection) === YouWin) {
//         playerScore++;
//     }else if (playRound(playerSelection, computerSelection) === YouLose) {
//         computerScore++;
//     }
    
// }


function game() {
    console.log("Let's play the game!");
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('What do you choose, rock, scissors or paper?')
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        if (playRound(playerSelection.toLowerCase(), computerSelection) === YouWin) {
        playerScore++;
    }else if (playRound(playerSelection.toLowerCase(), computerSelection) === YouLose) {
        computerScore++;
        }
        console.log(playRound(playerSelection, computerSelection));
        console.log('-------------------');
        console.log(playerScore);
        console.log(computerScore);
}
}

console.log(game());






