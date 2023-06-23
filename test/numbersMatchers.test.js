// toBeGreaterThan(n) digunakan untuk memastikan nilai expexted lebih besar dari nilai n
test("test toBeGreaterThan", () => {
  const number = 10;
  expect(number).toBeGreaterThan(5);
});
// toBeGreaterThanOrEqual(n) digunakan untuk memastikan nilai expexted lebih besar atau sama dengan dari nilai n
test("test toBeGreaterThanOrEqual", () => {
  const number = 5;
  expect(number).toBeGreaterThanOrEqual(5);
});
// toBeLessThan(n) digunakan untuk memastikan nilai expexted lebih kecil dari nilai n
test("test toBeLessThan", () => {
  const number = 1;
  expect(number).toBeLessThan(5);
});
// toBeLessThanOrEqual(n) digunakan untuk memastikan nilai expexted lebih kecil atau sama dengan dari nilai n
test("test toBeLessThanOrEqual", () => {
  const number = 5;
  expect(number).toBeLessThanOrEqual(5);
});
