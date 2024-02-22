import * as dom from "./dom";
import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.size = 10;
    this.grid = this.createGrid();
    this.cells = []
    this.gameOver = false;
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

  isGameOver() {
    for (const columns of this.grid) {
      for (const cell of columns) {
        if (cell instanceof Ship) return;
      }
    }
    this.gameOver = true;
  }

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
      this.isGameOver();
    }
  }

  renderBoard(container,player) {
    for (const [x,row] of this.grid.entries()) {
      for (const [y,cell] of row.entries()) {
        dom.addGridItem(container,x,y,this.grid)
      }
    }
  }
}

function startTurn(human,comp,cell) {
  human.attack(comp.gameboard,cell.dataset.x,cell.dataset.y)
  comp.attackPlayer(human.gameboard)
  if (comp.gameboard.gameOver || human.gameboard.gameOver) {
      window.setTimeout(()=>{
        alert('end!')
      window.location.reload()},0)
  }
}

export { Gameboard,startTurn };
