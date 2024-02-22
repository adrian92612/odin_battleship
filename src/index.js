import "./styles.css";

import { Ship } from "./ship";
import { Player, Computer } from "./player";
import * as dom from './dom'

const human = new Player("Human");
const comp = new Computer();
const humanBoard = human.gameboard;
const compBoard = comp.gameboard;

const humanBoardContainer = document.querySelector('#human-board')
const compBoardContainer = document.querySelector('#computer-board')
humanBoard.renderBoard(humanBoardContainer)
compBoard.renderBoard(compBoardContainer)
dom.addClickAttackEvent(human,comp)
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



function startGame() {

}

export {human,comp}

// while (humanBoard.isGameOver || compBoard.isGameOver) {}
