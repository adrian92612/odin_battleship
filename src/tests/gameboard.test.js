import { Gameboard } from "../gameboard";

describe("Gameboard", () => {
  //   let gb;
  //   beforeEach(() => (gb = new Gameboard()));
  const gb = new Gameboard();

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
});
