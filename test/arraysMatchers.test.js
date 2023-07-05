const names = ["syibran", "malawi"];
const person = [{ name: "syibran" }, { name: "malawi" }];

// toContain digunakan apakah nilai dari parameter terdapat didakam array expected
test("test toContain", () => {
  expect(names).toContain("malawi");
});

// toContainEqual memiliki fungsi yg sama dnegaj toContain tapi data yg dicek lebih compleks
test("test toContainEqual", () => {
  expect(person).toContainEqual({ name: "syibran" });
});
