// toBe digunakan untuk membandingkan spesifik
test("test toBe", () => {
  const name = "syibran";
  const timeOfDay = "morning";
  const sayHello = `Hello ${name}, good ${timeOfDay}`;

  expect(sayHello).toBe("Hello syibran, good morning");
});

// toEqual digunakan untuk membandingkan nilai yg kompleks
test("test toEqual obj", () => {
  const data = { name: "syibran" };
  data.age = 19;
  data.gender = "male";

  expect(data).toEqual({
    name: "syibran",
    age: 19,
    gender: "male",
  });
});
test("test toEqual arr", () => {
  const data = ["one", "two"];
  data.push("three");

  expect(data).toEqual(["one", "two", "three"]);
});
