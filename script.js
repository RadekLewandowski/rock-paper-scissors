const rock = document.querySelector('.btn1')
const paper = document.querySelector('.btn2')
const scissors = document.querySelector('.btn3')

const choice = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerPlay = choice[Math.floor(Math.random() * choice.length)] 
    return computerPlay
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "We have a Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}





rock.addEventListener('click', function () {
    const result = playRound('rock', getComputerChoice());
    console.log(result);
});

paper.addEventListener('click', function () {
    const result = playRound('paper', getComputerChoice());
    console.log(result);
});

scissors.addEventListener('click', function () {
    const result = playRound('scissors', getComputerChoice());
    console.log(result);
});




// function game() {
//     console.log("Let's play the game!");
//     let round = 0
//     let playerScore = 0
//     let computerScore = 0
//     for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt('What do you choose, rock, scissors or paper?')
//         const computerSelection = getComputerChoice()
//         const outcome = playRound(playerSelection, computerSelection)
//         round ++
//         if (outcome === 'You Win') {
//         playerScore++;
//     }else if (outcome === 'You Lose') {
//         computerScore++;
//         }
//         console.log(round);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(playerScore);
//         console.log(computerScore);
//         console.log('-------------------');
//     }
//     if (playerScore > computerScore) {
//             console.log('Player win the game!');
//         } else if (playerScore < computerScore) {
//             console.log('Computer win the game!');
//     } else {
//         console.log('Game over. We have a tie!');
//         }

// }


// console.log(game());





// function playRound(playerSelection, computerSelection) {
//     const player = playerSelection
    
//     if (player === rock) {
//         if (computerSelection === scissors) {
//             return 'You Win'
//         } else if (computerSelection === paper ){
//             return 'You Lose'
//         } else if (computerSelection === playerSelection) {
//             return 'We have a Tie!'
//         } 
//     }

//     if (player === paper) {
//         if (computerSelection === rock) {
//             return 'You Win'
//         } else if (computerSelection === scissors ){
//             return 'You Lose'
//         } else if (computerSelection === playerSelection) {
//             return 'We have a Tie!'
//         } 
//     }
    
//     if (player === scissors) {
//         if (computerSelection === paper) {
//             return 'You Win'
//         } else if (computerSelection === rock ){
//             return 'You Lose'
//         } else if (computerSelection === playerSelection) {
//             return 'We have a Tie!'
//         } 
//     }
// }
