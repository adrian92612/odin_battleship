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

  placeShip(ship, x, y, isXAxis = true) {
    if (
      this.isValidCoordinate(x, y) &&
      this.isOverBoard(ship.length - 1, isXAxis, x, y)
    ) {
      for (let i = 0; i < ship.length; i++) {
        isXAxis ? (this.grid[x + i][y] = ship) : (this.grid[x][y + i] = ship);
      }
    }
  }

  receiveAttack(x, y) {}
}

export { Gameboard };
