
const prompt = require('prompt-sync')();

/* BRAINSTORMING

Game logic:

 start game function (
        Create a 3x3 Grid as an array
        Create 2 players
        Create action to draw on grid
        Create end game conditions
)()

*/

const tictactoe = (() => {

    const Gameboard = Array(3).fill().map(() => Array(3).fill(null));
    console.log(Gameboard);

    const player1 = "X";
    const player2 = "O";
    const winner = null;
    let playerTurn = player1;

    const Draw = () => {
        let positionX = prompt("Choose X position for drawing:");
        let positionY = prompt("Choose Y position for drawing:");
        Gameboard[positionX][positionY] = playerTurn;
        console.log(Gameboard);
        playerTurn = playerTurn === player1 ? player2 : player1;
    }

    while (winner == null) {
        Draw();
    }

})();

tictactoe;