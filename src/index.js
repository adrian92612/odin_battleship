import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

const ship = new Ship(1);
const gb = new Gameboard();
gb.placeShip(ship, 9, 9, true);

console.log(gb.grid);
