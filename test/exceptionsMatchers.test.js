import { callMyName } from "../src/exceptionsMatchers";

// toThrow() digunakan untuk memastikan terjadinya excaption apapun
test("test toThrow", () => {
  expect(() => callMyName("andi")).toThrow();
});

// toThrow(excaption) digunakan untuk memastikan terjadinya excaption sesuai dengan expected excaption
test("test toThrow", () => {
  expect(() => callMyName("andi")).toThrow(Error);
});

// toThrow() digunakan untuk memastikan terjadinya excaption sesuai dengan string message
test("test toThrow", () => {
  expect(() => callMyName("andi")).toThrow("Ups, you call wrong name");
});