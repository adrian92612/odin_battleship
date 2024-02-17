import { Player, Computer } from "../player";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("Player and computer", () => {
  let player;
  let comp;
  let playerBoard;
  let compBoard;
  beforeEach(() => {
    player = new Player();
    comp = new Computer();
    playerBoard = player.gameboard;
    compBoard = comp.gameboard;
    playerBoard.placeShip(new Ship(3), 0, 0, true);
    compBoard.placeShip(new Ship(3), 0, 0, true);
  });

  it("be able to place ships", () => {
    expect(playerBoard.grid[0][0] instanceof Ship).toBe(true);
    expect(compBoard.grid[0][0] instanceof Ship).toBe(true);
  });

  it("can attack each other", () => {
    player.attack(compBoard, 0, 0);
    comp.attack(playerBoard, 0, 0);
    expect(playerBoard.grid[0][0] instanceof Ship).toBe(false);
    expect(compBoard.grid[0][0] instanceof Ship).toBe(false);
  });

  it("comp can attack entire board w/o repeating", () => {});
});
