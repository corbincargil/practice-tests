import analyzeArray from "./analyzeArray";

it("calculates the average", () => {
  expect(analyzeArray([6, 12])).toEqual(
    expect.objectContaining({ average: 9 })
  );
});

it("calculates the minimum", () => {
  expect(analyzeArray([1, 2, 3])).toEqual(expect.objectContaining({ min: 1 }));
});

it("calculates the minimum", () => {
  expect(analyzeArray([1, 2, 3])).toEqual(expect.objectContaining({ max: 3 }));
});

it("calculates the length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual(
    expect.objectContaining({ length: 7 })
  );
});
