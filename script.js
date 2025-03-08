var board;
var playerX = "X";
var playerO = "O";
var firstPlayer = "X";
var gameOver = false;

window.onload() = function() {
    startGame();
}

function startGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];

    for(let a = 0; a < 3; a++) {
        for(let b = 0; b < 3; b++) {
            let tile = document.createElement("div");
            tile.id = a.toString() + "-" + b.toString();
            tile.classList.add("tile");
        }
    }
}