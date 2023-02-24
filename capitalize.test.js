const { exportAllDeclaration } = require("@babel/types");
import capitalize from "./capitalize";

test("capitalizes normal sentence", () => {
  expect(capitalize("hello, john.")).toBe("Hello, John.");
});

test("captitalize names", () => {
  expect(capitalize("corbin cargil")).toBe("Corbin Cargil");
});

test("handles whitespace", () => {
  expect(capitalize("   hello, there!   ")).toBe("Hello, There!");
});

test("already capitalized", () => {
  expect(capitalize("To Whom It May Concern")).toBe("To Whom It May Concern");
});

test("returns empty string", () => {
  expect(capitalize("")).toBe("");
});
