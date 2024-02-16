import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.size = 10;
    this.grid = this.createGrid();
  }

  createGrid = () => {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  };

  isValidCoordinate = (x, y) => {
    return x > -1 && y > -1 && x < this.size && y < this.size;
  };

  isOverBoard = (length, isXAxis = true, startX, startY) => {
    return isXAxis ? startX + length < this.size : startY + length < this.size;
  };

  noOtherShip = (length, isXAxis = true, startX, startY) => {
    if (isXAxis) {
      for (let i = 0; i < length; i++) {
        if (this.grid[startX + i][startY] != null) return false;
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (this.grid[startX][startY + i] != null) return false;
      }
    }
    return true;
  };

  // update placeShip not place ship if another ship is in
  placeShip(ship, x, y, isXAxis = true) {
    if (
      this.isValidCoordinate(x, y) &&
      this.isOverBoard(ship.length - 1, isXAxis, x, y) &&
      this.noOtherShip(ship.length, isXAxis, x, y)
    ) {
      for (let i = 0; i < ship.length; i++) {
        isXAxis ? (this.grid[x + i][y] = ship) : (this.grid[x][y + i] = ship);
      }
    }
  }

  receiveAttack(x, y) {
    if (!this.isValidCoordinate(x, y)) return;
    if (this.grid[x][y] instanceof Ship) {
      this.grid[x][y].hit();
      this.grid[x][y] = true;
    } else if (this.grid[x][y] == null) {
      this.grid[x][y] = false;
    }
  }

  //  ------------------- Check if no ships are left in the board--------------------------
}

export { Gameboard };
