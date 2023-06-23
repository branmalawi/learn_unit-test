// toBeNull untuk memastikan nilai expected adalah null
test("test toBeNull", () => {
  const data = null;
  expect(data).toBeNull();
});

// toBeUndefined untuk memastikan expected tidak memiliki nilai
test("test toBeUndefined", () => {
  let data;
  expect(data).toBeUndefined();
});

// toBeDefined ada kebalikan dari toBeUndefined
test("test toBeDefined", () => {
  const data = "data";
  expect(data).toBeDefined();
});

// toBeTruthy untuk memastikan nilai expected bernilai truthy
test("test toBeTruthy", () => {
  const data = 10;
  expect(data).toBeTruthy();
});

// toBeFalsy untuk memastikan nilai expected bernilai falsy
test("test toBeFalsy", () => {
  const data = 0;
  expect(data).toBeFalsy();
});
