var board;
var value;
var playerX = "X";
var playerO = "O";
var currentPlayer = playerO;
var gameOver = false;
var gameTie = false;

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

    displayPlayer(currentPlayer);
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

function checkGame() {
    //horizontal checking
    for(let a = 0; a < 3; a++) {
        if(board[a][0] == board[a][1] && board[a][1] == board[a][2] && board[a][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(a.toString() + "-" + i.toString());
                tile.classList.add("winner-tiles");
            }
            gameOver = true;
            displayPlayer(board[a][0]);
            return;
        }
    }

    //vertical checking
    for(let b = 0; b < 3; b++) {
        if(board[0][b] == board[1][b] && board[1][b] == board[2][b] && board[0][b] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + b.toString());
                tile.classList.add("winner-tiles");
            }
            gameOver = true;
            displayPlayer(board[0][b].toString());
            return;
        }
    }

    //left diagonal checking
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile = document.getElementById(i.toString() + "-" + i.toString());
            tile.classList.add("winner-tiles");
        }
        gameOver = true;
        displayPlayer(board[0][0].toString());
        return;
    }

    //right diagonal checking
    if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != ' ') {
        let tile = document.getElementById("2-0");
        tile.classList.add("winner-tiles");

        tile = document.getElementById("1-1");
        tile.classList.add("winner-tiles");

        tile = document.getElementById("0-2");
        tile.classList.add("winner-tiles");

        gameOver = true;
        displayPlayer(board[2][0].toString());
        return;
    }
    
    //check if game is a tie
    if(!gameOver && board[0][0] != ' ' && board[0][1] != ' ' && board[0][2] != ' ' && board[1][0] != ' ' && board[1][1] != ' ' && board[1][2] != ' ' && board[2][0] != ' ' && board[2][1] != ' ' && board[2][2] != ' ') {
        gameOver = true;
        gameTie = true;
        displayPlayer();
        return;
    }
}

function displayPlayer(value) {
    document.getElementById("winner-player").innerHTML = " ";
    let winner = document.getElementById("winner-player");
    console.log(gameOver);
    console.log(gameTie);
    if(gameOver && !gameTie) {
        winner.classList.add("winner-player");
        winner.append("Player " + value + " wins!");
    } else if(gameOver && gameTie) {
        winner.classList.add("tie-player");
        winner.append("It's a tie!");
    } else {
        winner.append("Player " + value + " is playing.");
    }
}