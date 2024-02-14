import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.size = 10;
    this.grid = this.createGrid();
  }

  createGrid = () =>
    Array.from({ length: this.size }, () => Array(this.size).fill(null));

  isValidCoordinate(x, y, length = 0, isXAxis = true) {
    if (x < 0 && x <= this.size && y < 0 && y <= this.size) {
      return isXAxis ? x + length <= this.size : y + length <= this.size;
    }
    return false;
  }

  placeShip(ship, x, y, isXAxis = true) {
    if (this.isValidCoordinate(x, y, ship.length, isXAxis)) {
      for (let i = 0; i < ship.length; i++) {
        isXAxis ? (this.grid[x + i][y] = ship) : (this.grid[x][y + i] = ship);
      }
    }
  }
}

export { Gameboard };
