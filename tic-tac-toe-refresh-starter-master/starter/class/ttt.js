const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("t", "test command (remove)", TTT.testCommand);

    Screen.render();
  }

  static checkWin(grid) {
    if (
      grid.some((row) => row.every((piece) => piece === "X")) ||
      (grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === "X") ||
      (grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === "X") ||
      (grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === "X") ||
      (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") ||
      (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X")
    ) {
      return "X";
    } else if (
      grid.some((row) => row.every((piece) => piece === "O")) ||
      (grid[0][0] === "O" && grid[1][0] === "O" && grid[2][0] === "O") ||
      (grid[0][1] === "O" && grid[1][1] === "O" && grid[2][1] === "O") ||
      (grid[0][2] === "O" && grid[1][2] === "O" && grid[2][2] === "O") ||
      (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") ||
      (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O")
    ) {
      return "O";
    } else if (grid.every((row) => row.every((position) => position !== " "))) {
      return "T";
    } else {
      return false;
    }
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
