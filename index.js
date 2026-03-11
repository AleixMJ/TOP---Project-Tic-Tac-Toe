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
    
    const player1 = "X";
    const player2 = "O";
    let winner = null;
    let playerTurn = player1;
    const newGame = document.querySelector("#new-game");
    newGame.addEventListener("click", resetGame);
    const playerMessage = document.querySelector(".current-player");
    playerMessage.style.color = playerTurn === player1 ? "#2980b9" : "#c0392b";  


    const cells = document.querySelectorAll(".item");
    cells.forEach( cell => {
        cell.addEventListener("click", Draw);

    });

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

         // board full
         
         if (Gameboard.every(row => row.every(cell => cell !== null))) {
            return "draw";
         } 
        
        return null;
    }
    
   function Draw(e) {

        const positionX = parseInt(e.target.dataset.x);
        const positionY = parseInt(e.target.dataset.y);
        Gameboard[positionX][positionY] = playerTurn;
        if (e.target.textContent !== "") {
            return;
        }
        e.target.textContent = playerTurn;        
        e.target.style.color = playerTurn === player1 ? "#2980b9" : "#c0392b";       

        winner = checkWin();
        if (winner === "draw") {
            console.log("it's a draw!")
        } else if (winner) {
            console.log(`Player ${winner} wins!`)
        }
        playerTurn = playerTurn === player1 ? player2 : player1;        
        playerMessage.textContent = `${playerTurn}`;
        playerMessage.style.color = playerTurn === player1 ? "#2980b9" : "#c0392b";     
    }

    function resetGame() {
        winner = null;
        playerTurn = player1;
        playerMessage.textContent = `${playerTurn}`;
        playerMessage.style.color = playerTurn === player1 ? "#2980b9" : "#c0392b";  

        cells.forEach( cell => {
            cell.textContent = null;
            cell.style.color = "black";
        });
    }


})();

tictactoe;