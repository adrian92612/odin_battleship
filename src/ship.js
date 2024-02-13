class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit = () => this.hits++;
  isSunked = () => (this.hits < this.length ? false : true);
}

export { Ship };
