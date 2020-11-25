//randomly return Rock, Paper, Siccors, put to lowercase to weed out uppercase variables
let userInput =  prompt('Please enter Rock, Paper, or Sissors').toLowerCase();
// const playerSelection = userInput;
// const computerSelection = computerPlay();
// const outcomes = {
//     tie : (playerSelection === 'rock' && computerSelection === 'rock'),
//     loss : (playerSelection === 'rock' && computerSelection === 'paper'),
//     win : (playerSelection === 'rock' && computerSelection === 'sissors'),
//     win : (playerSelection === 'paper' && computerSelection === 'rock'),
//     tie : (playerSelection === 'paper' && computerSelection === 'paper'),
//     loss : (playerSelection === 'paper' && computerSelection === 'sissors'),
//     loss : (playerSelection === 'sissors' && computerSelection === 'rock'),
//     win : (playerSelection === 'sissors' && computerSelection === 'paper'),
//     tie : (playerSelection === 'sissors' && computerSelection === 'sissors')
// };

let computerPlay = function () {
    //create RNG between 1-10
    let rng = Math.floor(Math.random() * 10) + 1;
    //if the number is between 1-3, return rock
    if (rng <= 3 && rng >= 1){
        return 'rock';
    }
    if (rng <= 7 && rng >= 4){
        return 'paper';
    }
    if (rng <= 10 && rng >= 8){
        return 'sissors';
    }
}





let playRound = function (userSelection, computerSelection){
    
    if(userSelection === 'rock' && computerSelection === 'rock'){
        console.log('tie')
    }
    if(userSelection === 'rock' && computerSelection === 'paper'){
        console.log('loss')
    }
    if(userSelection === 'rock' && computerSelection === 'sissors'){
        console.log('win')
    }
    if(userSelection === 'paper' && computerSelection === 'rock'){
        console.log('win')
    }
    if(userSelection === 'paper' && computerSelection === 'paper'){
        console.log('tie')
    }
    if(userSelection === 'paper' && computerSelection === 'sissors'){
        console.log('loss')
    }
    if(userSelection === 'sissors' && computerSelection === 'rock'){
        console.log('loss')
    }
    if(userSelection === 'sissors' && computerSelection === 'paper'){
        console.log('win')
    }
    if(userSelection === 'sissors' && computerSelection === 'sissors'){
        console.log('tie')
    }
    
    
}
const userSelection = userInput;
const computerSelection = computerPlay();
console.log(playRound(userSelection, computerSelection));
// function game(){
//     for (let outcome in outcomes){
//         if (`${outcomes[outcome]}` === true){
//         console.log(outcome);
//         }
//     }
// }

// computerPlay();

// game();
