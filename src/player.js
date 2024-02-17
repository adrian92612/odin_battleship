import { Gameboard } from "./gameboard";

class Player {
  constructor(name) {
    this.name;
    this.gameboard = new Gameboard();
  }

  attack(enemyGameboard, x, y) {
    enemyGameboard.receiveAttack(x, y);
  }
}

class Computer extends Player {
  constructor() {
    super("Computer");
    this.prevAttacks = [];
  }

  attackPlayer(playerGameboard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * playerGameboard.size);
      y = Math.floor(Math.random() * playerGameboard.size);
    } while (this.prevAttacks.includes(`${x},${y}`));
    this.prevAttacks.push(`${x},${y}`);
    super.attack(playerGameboard, x, y);
  }
}

export { Player, Computer };
