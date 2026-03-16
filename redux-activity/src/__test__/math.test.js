import { add, subtract, multiply } from "../utils/math";

// Test the add function
describe("add function", () => {

  test("adds two positive numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and negative number correctly", () => {
    expect(add(5, -2)).toBe(3);
  });

  test("adds two zeros correctly", () => {
    expect(add(0, 0)).toBe(0);
  });

});

// Test the subtract function
describe("subtract function", () => {

  test("subtracts two numbers correctly", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller number", () => {
    expect(subtract(3, 7)).toBe(-4);
  });

});

// Test the multiply function
describe("multiply function", () => {

  test("multiplies two numbers correctly", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies a number by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });

});