import "./styles.css";

import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player, Computer } from "./player";

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

// while (humanBoard.isGameOver || compBoard.isGameOver) {}
