import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player, Computer } from "./player";

// const ship = new Ship(4);
// const ship2 = new Ship(4);
// const gb = new Gameboard();
// gb.placeShip(ship, 9, 0, false);
// gb.placeShip(ship2, 6, 0, true);

// gb.receiveAttack(0, 0);
// console.log(gb.grid);
// gb.receiveAttack(1, 0);
// gb.receiveAttack(1, 2);
// gb.receiveAttack(1, 2);
// gb.receiveAttack(1, 2);

const human = new Player("Human");
const comp = new Computer();
const humanBoard = human.gameboard;
const compBoard = comp.gameboard;

setShips(humanBoard);
setShips(compBoard);

function setShips(board) {
  board.placeShip(new Ship(4), 0, 0);
  board.placeShip(new Ship(3), 5, 0, false);
  board.placeShip(new Ship(3), 1, 5);
  board.placeShip(new Ship(2), 7, 7, false);
  board.placeShip(new Ship(1), 6, 5);
  console.log(board);
}

while (humanBoard.isGameOver || compBoard.isGameOver) {}
