var board;
var playerX = "X";
var playerO = "O";
var firstPlayer = "X";
var gameOver = false;

window.onload = function() {
    startGame();
}

function startGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    for(let a = 0; a < 3; a++) {
        for(let b = 0; b < 3; b++) {
            let tile = document.createElement("div");
            tile.id = a.toString() + "-" + b.toString();
            tile.classList.add("tile");
            if(a == 0 | a == 1) {
                tile.classList.add("horizontal-line");
            }
            if(b == 0 || b == 1) {
                tile.classList.add("vertical-line");
            }
            document.getElementById("board").append(tile);
        }
    }
}