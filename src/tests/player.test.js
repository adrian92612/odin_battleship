import { Player, Computer } from "../player";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("Player and computer", () => {
  let player;
  let comp;
  beforeEach(() => {
    player = new Player();
    comp = new Computer();
  });

  it("be able to place ships", () => {
    player.gameboard.placeShip(new Ship(3), 0, 0, true);
    comp.gameboard.placeShip(new Ship(3), 0, 0, true);
    expect(player.gameboard.grid[0][0] instanceof Ship).toBe(true);
    expect(comp.gameboard.grid[0][0] instanceof Ship).toBe(true);
  });
});
