import { getPlayerName } from "./dom";
import { Player, Computer } from "./player";
import { Ship } from "./ship";
import * as dom from './dom'

function setPlayers(human, comp) {
  human = new Player("Adrian");
  comp = new Computer();
  const humanBoard = human.gameboard;
  const compBoard = comp.gameboard;
  setShips(humanBoard);
  setShips(compBoard);
}

async function start() {
  const name = await getPlayerName()
  const human = new Player(name)
  const comp = new Computer()
  const humanBoard = human.gameboard;
  const compBoard = comp.gameboard;
  
  setShips(humanBoard);
  setShips(compBoard);
  const humanBoardContainer = document.querySelector('#human-board')
  const compBoardContainer = document.querySelector('#computer-board')
  humanBoard.renderBoard(humanBoardContainer)
  compBoard.renderBoard(compBoardContainer)
  dom.addClickAttackEvent(human,comp)
}

function setShips(board) {
  board.placeShip(new Ship(4), 0, 0);
  board.placeShip(new Ship(3), 5, 0, false);
  board.placeShip(new Ship(3), 1, 5);
  board.placeShip(new Ship(2), 7, 7, false);
  board.placeShip(new Ship(1), 6, 5);
}

function startTurn(human,comp,cell) {
  human.attack(comp.gameboard,cell.dataset.x,cell.dataset.y)
  comp.attackPlayer(human.gameboard)
  if (comp.gameboard.gameOver || human.gameboard.gameOver) {
      window.setTimeout(()=>{
        alert('end!')
      window.location.reload()},0)
  }
}

export { setPlayers,startTurn,start };
