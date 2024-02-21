import { Gameboard } from "./gameboard";
import * as dom from './dom'

class Player {
  constructor(name) {
    this.name;
    this.gameboard = new Gameboard();
  }

  attack(enemyGameboard, x, y, c = 'computer-board') {
    enemyGameboard.receiveAttack(x, y);
    const cell = document.querySelector(`div[data-x="${x}"][data-y="${y}"][data-c="${c}"]`)
    dom.updateCell(cell)
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
    super.attack(playerGameboard, x, y,'human-board');
  }
}

export { Player, Computer };

class Player2 {
  constructor(humanName = 'some dude') {
    this.players = [humanName, 'Admiral AI']
    this.players[0].gameboard = new Gameboard()
    this.players[1].gameboard = new Gameboard()
  }
}
