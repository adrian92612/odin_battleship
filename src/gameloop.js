import { Player, Computer } from "./player";
import { Ship } from "./ship";

function setPlayers(human, comp) {
  human = new Player("Adrian");
  comp = new Computer();
  const humanBoard = human.gameboard;
  const compBoard = comp.gameboard;
  setShips(humanBoard);
  setShips(compBoard);
}

function setShips(board) {
  board.placeShip(new Ship(4), 0, 0);
  board.placeShip(new Ship(3), 5, 0, false);
  board.placeShip(new Ship(3), 1, 5);
  board.placeShip(new Ship(2), 7, 7, false);
  board.placeShip(new Ship(1), 6, 5);
  console.log(board);
}

export { setPlayers };
