var board;
var playerX = "X";
var playerO = "O";
var currentPlayer = playerO;
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
            tile.addEventListener("click", selectTile);
            document.getElementById("board").append(tile);
        }
    }
}

function selectTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let a = parseInt(coords[0]);
    let b = parseInt(coords[1]);

    if(board[a][b] == ' ') {
        board[a][b] = currentPlayer;
    } else {
        return;
    }
    
    this.innerText = currentPlayer;

    if (currentPlayer == playerO) {
        currentPlayer = playerX;
    } else {
        currentPlayer = playerO;
    }

    checkGame();
}
