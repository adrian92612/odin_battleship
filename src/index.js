import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const ship = new Ship(4);
const gb = new Gameboard();
gb.placeShip(ship, 4, 5, true);

console.log(gb.grid);

gb.receiveAttack(4, 5);

console.log(gb.grid[4][5]);
console.log(gb.grid);
