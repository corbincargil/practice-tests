import caesarCipher from "./caesarCipher";

test("encrypts words", () => {
  expect(caesarCipher("hello")).toBe("jgnnq");
});

test("encrypts names", () => {
  expect(caesarCipher("Corbin Cargil")).toBe("eqtdkp ectikn");
});

test("encrypts sentences", () => {
  expect(caesarCipher("You are so dumb...")).toBe("aqw ctg uq fwod...");
});

test("punctation remains the same", () => {
  expect(caesarCipher(". ! ? , - / \" '")).toBe(". ! ? , - / \" '");
});
