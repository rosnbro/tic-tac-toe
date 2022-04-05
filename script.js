const TicTacToe = (function() {
    
    // DOM
    const cells = document.querySelectorAll(".cell");
    const difficulty = document.querySelector("#difficulty");
    const xButton = document.querySelector("#selectX");
    const oButton = document.querySelector("#selectO");
    const resetButton = document.querySelector("#reset");
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");

    // Game objects
    const Gameboard = {
        board: ["","","","","","","","",""],
        listen: function() {
            cells.forEach((cell, i) => {
                cell.addEventListener("click", () => {
                    if (this.board[i] == "") {
                        Player.move(i);
                    }
                });
            });
        },
        render: function() {
            cells.forEach((cell, i) => {
                cell.innerHTML = this.board[i];
            });
        },
        reset: function() {
            this.board = ["","","","","","","","",""];
            this.render();
        },
    }

    const Player = {
        symbol: "X",
        wins: 0,
        listen: function() {
            xButton.addEventListener("click", () => {
                this.symbol = "X";
                Computer.symbol = "O"
                Gameboard.reset();
                xButton.classList.add("active");
                oButton.classList.remove("active");
            });
            oButton.addEventListener("click", () => {
                this.symbol = "O";
                Computer.symbol = "X"
                Gameboard.reset();
                Computer.move();
                oButton.classList.add("active");
                xButton.classList.remove("active");
            });
            resetButton.addEventListener("click", () => {
                Gameboard.reset();
            });
        },
        move: function(i) {
            Gameboard.board.splice(i, 1, this.symbol);
            Gameboard.render();
            if (Gameplay.checkForWin() == false) Computer.move();
        },
    }
    
    const Computer = {
        symbol: "O",
        wins: 0,
        move: function() {
            switch (difficulty.value) {
                case "moderate":
                    // Alternate between random and expert
                    break;
                case "draw":
                    // Expert but choose only draw scenarios
                    break;
                case "expert":
                    // best possible moves
                    break;
                default:
                    let isPlaced = false;
                    let i;
                    do {
                        i = Math.floor(Math.random() * Gameboard.board.length);
                        if (Gameboard.board[i] == "") {
                            Gameboard.board.splice(i, 1, this.symbol);
                            isPlaced = true;
                        }
                    } while (isPlaced == false);
                    Gameboard.render();
                    Gameplay.checkForWin();
                    break;
            }
        },
    }

    const Gameplay = {
        start: function() {
            Player.listen();
            Gameboard.listen();
        },
        checkForWin: function() {
            if (Gameboard.board[0] == Gameboard.board[1] &&
                Gameboard.board[0] == Gameboard.board[2] &&
                Gameboard.board[0] != "") {
                    this.declareWinner(0);
            } else
            if (Gameboard.board[3] == Gameboard.board[4] &&
                Gameboard.board[3] == Gameboard.board[5] &&
                Gameboard.board[3] != "") {
                    this.declareWinner(3);
            } else
            if (Gameboard.board[6] == Gameboard.board[7] &&
                Gameboard.board[6] == Gameboard.board[8] &&
                Gameboard.board[6] != "") {
                    this.declareWinner(6);
            } else
            if (Gameboard.board[0] == Gameboard.board[3] &&
                Gameboard.board[0] == Gameboard.board[6] &&
                Gameboard.board[0] != "") {
                    this.declareWinner(0);
            } else
            if (Gameboard.board[1] == Gameboard.board[4] &&
                Gameboard.board[1] == Gameboard.board[7] &&
                Gameboard.board[1] != "") {
                    this.declareWinner(1);
            } else
            if (Gameboard.board[2] == Gameboard.board[5] &&
                Gameboard.board[2] == Gameboard.board[8] &&
                Gameboard.board[2] != "") {
                    this.declareWinner(2);
            } else
            if (Gameboard.board[0] == Gameboard.board[4] &&
                Gameboard.board[0] == Gameboard.board[8] &&
                Gameboard.board[0] != "") {
                    this.declareWinner(0);
            } else
            if (Gameboard.board[2] == Gameboard.board[4] &&
                Gameboard.board[2] == Gameboard.board[6] &&
                Gameboard.board[2] != "") {
                    this.declareWinner(2);
            } else 
            if (!Gameboard.board.includes("")) {
                    this.declareWinner("tie");
            } else return false;
        },
        declareWinner: function(i) {
            if (i == "tie") {
                this.displayWinner("Nobody");
            } else if (Gameboard.board[i] == Player.symbol) {
                Player.wins++;
                this.displayWinner("You");
            } else {
                Computer.wins++;
                this.displayWinner("The Computer");
            }
        },
        displayWinner: function(winner) {
            alert(winner + " won this one!");
            playerScore.innerHTML = Player.wins;
            computerScore.innerHTML = Computer.wins;
            // Gameboard.reset();
        },
    }

    // Initialization
    Gameplay.start();

})();