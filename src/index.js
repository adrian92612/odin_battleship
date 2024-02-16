import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const ship = new Ship(4);
const gb = new Gameboard();
gb.placeShip(ship, 9, 0, false);

gb.receiveAttack(0, 0);
console.log(gb.grid);
gb.receiveAttack(1, 0);
gb.receiveAttack(1, 2);
gb.receiveAttack(1, 2);
gb.receiveAttack(1, 2);
