import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const ship = new Ship(3);
const gb = new Gameboard();
gb.placeShip(ship, 7, 8, false);

console.log(gb.grid);
