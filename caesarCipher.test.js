import caesarCipher from "./caesarCipher";

test("encrypts words", () => {
  expect(caesarCipher("hello")).toBe("jgnnq");
});

test("encrypts names", () => {
  expect(caesarCipher("Corbin Cargil")).toBe("eqtdkp ectikn");
});

test("encrypts sentences", () => {
  expect(caesarCipher("Does this still work?")).toBe("fqgu vjku uvknn yqtm?");
});

test("punctation remains the same", () => {
  expect(caesarCipher(". ! ? , - / \" '")).toBe(". ! ? , - / \" '");
});
