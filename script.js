const TicTacToe = (function() {
    
    // DOM
    const cells = document.querySelectorAll(".cell");
    const xButton = document.querySelector("#selectX");
    const oButton = document.querySelector("#selectO");
    const difficulty = document.querySelector("#difficulty");

    // Game objects
    const Gameboard = {
        board: ["","","","","","","","",""],
        listen: function() {
            cells.forEach((cell, i) => {
                cell.addEventListener("click", () => {
                    if (this.board[i] == "") {
                        addSymbol(i);
                    }
                });
            });
        },
        reset: function() {
            this.board = ["","","","","","","","",""];
            render();
        },
    }

    const Player = {
        symbol: "X", /////////////////////// set so if O computer goes first
        listen: function() {
            xButton.addEventListener("click", () => {
                this.symbol = "X";
                Gameboard.reset();
            });
            oButton.addEventListener("click", () => {
                this.symbol = "O";
                Gameboard.reset();
            });
        },
    }
    
    const Computer = {
        symbol: function() {
            if (Player.symbol == "X") {
                return "O";
            } else return "X";
        },
        move: () => {
            switch (difficulty) {
                case easy:
                    // Randomly fill one empty place
                    break;
                case moderate:
                    // Alternate between random and expert
                    break;
                case draw:
                    // Expert but choose only draw scenarios
                    break;
                case expert:
                    // best possible moves
                    break;
                default:
                    // copy code for easy
                    break;
            }
        },
        
    }

    // Initialization
    start();

    // Functions
    function start() {
        Player.listen();
        Gameboard.listen();
    }

    function render() {
        cells.forEach((cell, i) => {
            cell.innerHTML = Gameboard.board[i];
        });
        checkForWin();
    }

    function addSymbol(i) { // Make into player and computer methods?
        Gameboard.board.splice(i, 1, Player.symbol);
        render();
    }

    function checkForWin() {
        if (Gameboard.board[0] == Gameboard.board[1] &&
            Gameboard.board[0] == Gameboard.board[2] &&
            Gameboard.board[0] != "") {
                declareWinner(0);
            } else
        if (Gameboard.board[3] == Gameboard.board[4] &&
            Gameboard.board[3] == Gameboard.board[5] &&
            Gameboard.board[3] != "") {
                declareWinner(3);
            } else
        if (Gameboard.board[6] == Gameboard.board[7] &&
            Gameboard.board[6] == Gameboard.board[8] &&
            Gameboard.board[6] != "") {
                declareWinner(6);
            } else
        if (Gameboard.board[0] == Gameboard.board[3] &&
            Gameboard.board[0] == Gameboard.board[6] &&
            Gameboard.board[0] != "") {
                declareWinner(0);
            } else
        if (Gameboard.board[1] == Gameboard.board[4] &&
            Gameboard.board[1] == Gameboard.board[7] &&
            Gameboard.board[1] != "") {
                declareWinner(1);
            } else
        if (Gameboard.board[2] == Gameboard.board[5] &&
            Gameboard.board[2] == Gameboard.board[8] &&
            Gameboard.board[2] != "") {
                declareWinner(2);
            } else
        if (Gameboard.board[0] == Gameboard.board[4] &&
            Gameboard.board[0] == Gameboard.board[8] &&
            Gameboard.board[0] != "") {
                declareWinner(0);
            } else
        if (Gameboard.board[2] == Gameboard.board[4] &&
            Gameboard.board[2] == Gameboard.board[6] &&
            Gameboard.board[2] != "") {
                declareWinner(2);
            } else
        if (!Gameboard.board.includes("")) {
                declareWinner("tie");
            }
    }

    function declareWinner(i) {
        if (i == "tie") {
            console.log("it's a tie!");
        }
        if (Gameboard.board[i] == Player.symbol) {
            console.log("You won!");
        } else {
            console.log("You lost...");
        }
        
    }

    // Add dom methods to add results screen //////////////////////
})();