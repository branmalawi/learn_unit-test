import { sum } from "../src/sum.js";

test("test sum function 2", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
