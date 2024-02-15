import { Ship } from "../ship";

describe("ship", () => {
  //   let bShip;
  //   beforeEach(() => (bShip = new Ship(4)));
  const bShip = new Ship(4);

  test("length set correctly", () => {
    expect(bShip.length).toBe(4);
  });

  test("ship should still be floating", () => {
    bShip.hit();
    bShip.hit();
    expect(bShip.sunk).toBe(false);
  });

  test("ship has sunk", () => {
    bShip.hit();
    bShip.hit();
    bShip.hit();
    bShip.hit();
    expect(bShip.sunk).toBe(true);
  });
});
