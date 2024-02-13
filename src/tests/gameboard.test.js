import { Gameboard } from "../gameboard";

describe("Gameboard", () => {
  //   let gb;
  //   beforeEach(() => (gb = new Gameboard()));
  const gb = new Gameboard();

  it("should be 10x10", () => {
    expect(gb.grid.length).toBe(10);
    gb.grid.forEach((row) => expect(row.length).toBe(10));
  });
});
