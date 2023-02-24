import reverseString from "./reverseString";

test("reverses normal sentence", () => {
  expect(reverseString("Stay strong little rooty!")).toBe(
    "!ytoor elttil gnorts yatS"
  );
});

test("works with names", () => {
  expect(reverseString("Corbin Cargil")).toBe("ligraC nibroC");
});

test("returns empty strings", () => {
  expect(reverseString("")).toBe("");
});
