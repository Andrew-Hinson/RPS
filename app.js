
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const sissorsButton = document.querySelector('#sissors-button');
const buttons = document.querySelectorAll('button');
const playerSpan = document.querySelector('#playerSpan');
const computerSpan = document.querySelector('#computerSpan');
const winner = document.querySelector('#winner');
let playerChoice = 0;
let computerChoice = 0;
let gameLogic = {
    rock : 0,
    paper: 0,
    sissors: 0
};

let computerPlay = function () {
let rng = Math.floor(Math.random() * 3) + 1;
    if (rng == 1){   //rock
        computerChoice = gameLogic.rock;
        computerSpan.innerHTML = ("ROCK!")
    }
    if (rng == 2){   //paper
        computerChoice = gameLogic.paper;
        computerSpan.innerHTML = ("PAPER!")
    }
    if (rng == 3){   //sissors
        computerChoice = gameLogic.sissors;
        computerSpan.innerHTML = ("SISSORS!")
    }
};



rockButton.onclick = function() {
    gameLogic.rock = 2;
    gameLogic.paper = 3;
    gameLogic.sissors = 1;
    playerChoice = gameLogic.rock;
    playerSpan.innerHTML = ("ROCK!");
    computerPlay()
};
paperButton.onclick = function() {
    gameLogic.rock = 1;
    gameLogic.paper = 2;
    gameLogic.sissors = 3;
    playerChoice = gameLogic.paper;
    playerSpan.innerHTML = ("PAPER!");
    computerPlay()
};
sissorsButton.onclick = function() {
    gameLogic.rock = 3;
    gameLogic.paper = 1;
    gameLogic.sissors = 2;
    playerChoice = gameLogic.sissors;
    playerSpan.innerHTML = ("SISSORS!");
    computerPlay()
};
//game evaluation
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if(playerChoice > computerChoice){
            winner.innerHTML = ("Player wins!")
        } else if (playerChoice < computerChoice){
            winner.innerHTML = ("Computer wins!")
        } else {
            winner.innerHTML = ("Tie match, try again!")
        }
        playerChoice = 0;
        computerChoice = 0;
    })
};



