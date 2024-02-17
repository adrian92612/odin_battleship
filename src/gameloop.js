import { Player, Computer } from "./player";

function setPlayers() {
  const human = new Player("Adrian");
  const comp = new Computer();
  const humanBoard = human.gameboard;
  const compBoard = comp.gameboard;
}
