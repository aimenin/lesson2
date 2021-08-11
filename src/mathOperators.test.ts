import { mul, div, add, minus, pow } from "./mathOperators";

describe("Standart functions", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  test("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });
});

describe("addictional functionality", () => {
  it("pow 3 ^ 2 to equal 9", () => {
    expect(pow(3, 2)).toBe(9);
  });
});
