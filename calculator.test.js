import * as calculator from "./calculator";

test("addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtraction", () => {
  expect(calculator.subract(25, 5)).toBe(20);
});

test("multiplication", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

test("division", () => {
  expect(calculator.divide(12, 3)).toBe(4);
});
