const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("t", "test command (remove)", ConnectFour.testCommand);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkWin(grid) {
    if (this._isWinner(grid, "X")) {
      return "X";
    } else if (this._isWinner(grid, "O")) {
      return "O";
    } else if (grid.every((row) => row.every((piece) => piece !== " "))) {
      return "T";
    } else {
      return false;
    }
  }

  static _isWinner(grid, piece) {
    return grid.some(
      (row, rowIndex) =>
        row.some(
          (position, index) =>
            position === piece &&
            row[index + 1] === piece &&
            row[index + 2] === piece &&
            row[index + 3] === piece
        ) ||
        row.some(
          (position, index) =>
            position === piece &&
            grid[rowIndex + 1] &&
            grid[rowIndex + 1][index] === piece &&
            grid[rowIndex + 2] &&
            grid[rowIndex + 2][index] === piece &&
            grid[rowIndex + 3] &&
            grid[rowIndex + 3][index] === piece
        ) ||
        row.some(
          (position, index) =>
            position === piece &&
            grid[rowIndex + 1] &&
            grid[rowIndex + 1][index + 1] === piece &&
            grid[rowIndex + 2] &&
            grid[rowIndex + 2][index + 2] === piece &&
            grid[rowIndex + 3] &&
            grid[rowIndex + 3][index + 3] === piece
        ) ||
        row.some(
          (position, index) =>
            position === piece &&
            grid[rowIndex - 1] &&
            grid[rowIndex - 1][index + 1] === piece &&
            grid[rowIndex - 2] &&
            grid[rowIndex - 2][index + 2] === piece &&
            grid[rowIndex - 3] &&
            grid[rowIndex - 3][index + 3] === piece
        )
    );
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

module.exports = ConnectFour;
