import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const ship = new Ship(4);
const gb = new Gameboard();
gb.placeShip(ship, 4, 5, true);

console.log(gb.grid);

gb.grid[4][5].hit();
gb.grid[4][5].hit();
gb.grid[4][5].hit();
gb.grid[4][5].hit();
console.log(gb.grid[4][5]);
