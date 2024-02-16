import { experiments } from "webpack";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("Gameboard", () => {
  let gb;
  beforeEach(() => {
    gb = new Gameboard();
  });

  it("should be 10x10", () => {
    expect(gb.grid.length).toBe(10);
    gb.grid.forEach((row) => expect(row.length).toBe(10));
  });

  it("should validate valid coordinates", () => {
    expect(gb.isValidCoordinate(5, 5)).toBe(true);
    expect(gb.isValidCoordinate(0, 0)).toBe(true);
    expect(gb.isValidCoordinate(9, 9)).toBe(true);
  });

  it("should invalidate invalid coordinates", () => {
    expect(gb.isValidCoordinate(-1, 5)).toBe(false);
    expect(gb.isValidCoordinate(0, 11)).toBe(false);
    expect(gb.isValidCoordinate(-2, 9)).toBe(false);
  });

  it("place ship on right coordinate", () => {
    const ship = new Ship(1);
    gb.placeShip(ship, 0, 0);
    expect(gb.grid[0][0]).toBe(ship);
    gb.placeShip(ship, 2, 5);
    expect(gb.grid[2][5]).toBe(ship);
    gb.placeShip(ship, 6, 6);
    expect(gb.grid[6][6]).toBe(ship);
  });

  it("place ship length 2 x-axis on right coordinate", () => {
    const ship = new Ship(2);
    gb.placeShip(ship, 0, 0);
    expect(gb.grid[0][0]).toBe(ship);
    expect(gb.grid[1][0]).toBe(ship);
    expect(gb.grid[2][0]).toBe(null);
  });

  it("place ship length 3 y-axis on right coordinate", () => {
    const ship = new Ship(3);
    gb.placeShip(ship, 0, 0, false);
    expect(gb.grid[0][0]).toBe(ship);
    expect(gb.grid[0][1]).toBe(ship);
    expect(gb.grid[0][2]).toBe(ship);
  });

  it("should not place ship if length is over board", () => {
    const ship = new Ship(3);
    gb.placeShip(ship, 8, 0, true);
    expect(gb.grid[8][0]).toBe(null);
    expect(gb.grid[9][0]).toBe(null);
  });

  it("should hit coordinate w/ ship", () => {
    const ship = new Ship(4);
    gb.placeShip(ship, 0, 0);
    gb.receiveAttack(0, 0);
    gb.receiveAttack(0, 3);
    expect(gb.grid[0][0]).toBe(true);
    expect(ship.hits).toBe(1);
    expect(gb.receiveAttack(0, 0)).toBe(undefined);
    expect(gb.receiveAttack(6, 2)).toBe(undefined);
    expect(gb.grid[0][3]).toBe(false);
  });

  it("should not place ship if occupied", () => {
    const ship = new Ship(4);
    const ship2 = new Ship(4);
    gb.placeShip(ship, 0, 0);
    gb.placeShip(ship2, 0, 0, false);
    expect(gb.grid[0][0]).toBe(ship);
    expect(gb.grid[0][1]).toBe(null);
  });

  it("should end the game", () => {
    const ship = new Ship(1);
    gb.placeShip(ship, 0, 0);
    gb.receiveAttack(0, 0);
    expect(gb.gameOver).toBe(true);
  });

  it("should not end the game", () => {
    const ship = new Ship(3);
    gb.placeShip(ship, 0, 0);
    gb.receiveAttack(0, 0);
    gb.receiveAttack(1, 0);
    expect(gb.gameOver).toBe(false);
  });
});
