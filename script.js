const TicTacToe = (function() {
    // DOM
    const cells = document.querySelectorAll(".cell");
    const xButton = document.querySelector("#selectX");
    const oButton = document.querySelector("#selectO");

    // Game objects
    const Gameboard = {
        board: ["","","","","","","","",""],
        listen: function() {
            cells.forEach((cell, i) => {
                cell.addEventListener("click", () => {
                    addSymbol(i);
                    render();
                });
            });
        },
        reset: function() {
            this.board = ["","","","","","","","",""];
            render();
        },
    }

    const Player = {
        symbol: "X",
        listen: function() {
            xButton.addEventListener("click", () => {
                this.symbol = "X";
                Gameboard.reset();
            });
            oButton.addEventListener("click", () => {
                this.symbol = "O";
                Gameboard.reset();
            });
        }
    }
    
    const CPU = {
        symbol: function() {
            if (Player.symbol == "X") {
                return "O";
            } else return "X";
        },
        setDifficulty: function() {

        },
    }

    // Initialization
    start();

    // Functions
    function start() {
        render();
        Player.listen();
        Gameboard.listen();
    }

    function render() {
        cells.forEach((cell, i) => {
            cell.innerHTML = Gameboard.board[i];
        });
        checkForWin();
    }

    function addSymbol(i) {
        Gameboard.board.splice(i, 1, Player.symbol);
    }

    function checkForWin() {
        if (Gameboard.board[0] == Gameboard.board[1] &&
            Gameboard.board[0] == Gameboard.board[2] &&
            Gameboard.board[0] != "") {
                declareWinner();
            } else
        if (Gameboard.board[3] == Gameboard.board[4] &&
            Gameboard.board[3] == Gameboard.board[5] &&
            Gameboard.board[3] != "") {
                declareWinner();
            } else
        if (Gameboard.board[6] == Gameboard.board[7] &&
            Gameboard.board[6] == Gameboard.board[8] &&
            Gameboard.board[6] != "") {
                declareWinner();
            } else
        if (Gameboard.board[0] == Gameboard.board[3] &&
            Gameboard.board[0] == Gameboard.board[6] &&
            Gameboard.board[0] != "") {
                declareWinner();
            } else
        if (Gameboard.board[1] == Gameboard.board[4] &&
            Gameboard.board[1] == Gameboard.board[7] &&
            Gameboard.board[1] != "") {
                declareWinner();
            } else
        if (Gameboard.board[2] == Gameboard.board[5] &&
            Gameboard.board[2] == Gameboard.board[8] &&
            Gameboard.board[2] != "") {
                declareWinner();
            } else
        if (Gameboard.board[0] == Gameboard.board[4] &&
            Gameboard.board[0] == Gameboard.board[8] &&
            Gameboard.board[0] != "") {
                declareWinner();
            } else
        if (Gameboard.board[2] == Gameboard.board[4] &&
            Gameboard.board[2] == Gameboard.board[6] &&
            Gameboard.board[2] != "") {
                declareWinner();
            } else
        if (!Gameboard.board.includes("")) {
                declareTie();
            }
    }

    function declareWinner() {
        console.log("someone won!");
    }

    function declareTie() {
        console.log("it's a tie!");
    }
})();