class Gameboard {
  constructor() {
    this.size = 10;
    this.grid = this.createGrid();
  }

  createGrid() {
    return Array.from({ length: this.size }).fill(
      Array.from({ length: this.size }).fill(null)
    );
  }

  isValidCoordinate = (x, y) =>
    x > -1 && x <= this.size && y > -1 && y <= this.size;
}

// console.log(new Gameboard().grid);

export { Gameboard };
