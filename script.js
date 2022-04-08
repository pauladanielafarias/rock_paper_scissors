//VARIABLES
let winMsg = 'You win!';
let loseMsg = 'You lose!';
let tieMsg = "It's a Tie";
let moveList = ['Rock', 'Paper', 'Scissors'];


//DOM VARIABLES
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */
let endGame = (event) => {
    let playerMove = moveList.indexOf(event.target.textContent);
    playerMove = moveList[playerMove];

    let computerMove = randomMove();
    computerMove = moveList[computerMove];

    moveDisplays.forEach((moveDisplay) => {
        moveDisplay.style.display = "inline-block"
        moveDisplay.style.whiteSpace = "pre";
    });
    
    moveDisplays[0].textContent = `You played \n${playerMove}`;
    moveDisplays[1].textContent = `Computer played \n${computerMove}`;
    
    statusDisplay.textContent = calcResult(playerMove, computerMove);

    buttons[1].textContent = "Play Again";
    buttons[1].removeEventListener("click", endGame);
    buttons[1].addEventListener("click", startGame);
   
    buttons[0].style.display = "none";
    buttons[2].style.display = "none";

    return;
};

/**
 * Displays start state of game
 */
let startGame = () => {
    //STATUS DISPLAY
    statusDisplay.textContent = 'Choose!';

    let i = 0;
    //GAME BUTTONS
    buttons.forEach((button) => {
        //show button name
        button.textContent = moveList[i]; 
        button.style.display = "inline-block";

        //ADD EVENT LISTENER
        button.addEventListener("click", endGame);        
        i++;
    });

    //MOVE DISPLAY
    moveDisplays.forEach(moveDisplay => moveDisplay.style.display = 'none');

    return;
};
startGame();



/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   playerMove  player move
 * @param  {Number}   computerMove  computer move
 * @return {String}   result result of the game
 */
let calcResult = (playerMove, computerMove) => {
    let result = "";
    //TIE
    if (playerMove == computerMove) {
        result = tieMsg;
    }
    //PLAYER WINS
    else if (playerMove == "Rock" && computerMove == "Scissors" || playerMove == "Scissors" && computerMove == "Paper") {
        result = winMsg;
    }
    //PLAYER LOSES 
    else if (playerMove == "Scissors" && computerMove == "Rock" || playerMove == "Paper" && computerMove == "Scissors") {
        result = loseMsg;
    }


    return result;
};


/**
 * @return {Number}   random number between 0 and 2
 */
let randomMove = () => {
    let randomeMove = Math.floor(Math.random() * 3);

    return randomeMove;
};


