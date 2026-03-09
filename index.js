
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
    let winner = null;
    let playerTurn = player1;

    let checkWin = () => {

        // rows
        for (let i = 0 ; i < 3; i++) {            
            if ( Gameboard[i][0] && Gameboard[i][0] == Gameboard[i][1] && Gameboard[i][0] == Gameboard[i][2]) {
                return Gameboard[i][0];
            }           
        }
         // columns
        for (let i = 0 ; i < 3; i++) {            
            if ( Gameboard[0][i] && Gameboard[0][i] == Gameboard[1][i] && Gameboard[0][i] == Gameboard[2][i]) {
                return Gameboard[0][i];
            }           
        }
         // diagonals
         if ( Gameboard[0][0] && Gameboard[0][0] == Gameboard[1][1] && Gameboard[0][0] == Gameboard[2][2]) {
            return Gameboard[0][0];
         } else if ( Gameboard[2][0] && Gameboard[2][0] == Gameboard[1][1] && Gameboard[2][0] == Gameboard[0][2]) {
            return Gameboard[2][0];
         }

        return null;
    }
    
    const Draw = () => {
        let positionX = prompt("Choose X position for drawing:");
        let positionY = prompt("Choose Y position for drawing:");
        Gameboard[positionX][positionY] = playerTurn;
        console.log(Gameboard);
        playerTurn = playerTurn === player1 ? player2 : player1;
    }

    while (winner == null) {
        Draw();
        winner = checkWin();
    }

})();

tictactoe;