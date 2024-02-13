class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit = () => this.hits++;
  isSunked = () => (this.sunk = this.hits < this.length ? false : true);
}

export { Ship };
