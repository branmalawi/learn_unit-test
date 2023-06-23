// toMatch(regex) digunakan untuk mencocokkkan nilai expected dengan pola dari regex yg ada

test("test toMatch", () => {
  const name = "syibran";
  const number = "8945";

  expect(name).toMatch(/bran/);
  expect(name).toMatch(/s*n/);
  expect(number).toMatch(/[0-9]{4}/);
});
