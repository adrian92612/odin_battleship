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
}

console.log(new Gameboard().grid);

export { Gameboard };
