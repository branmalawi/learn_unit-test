// not matchrs digunakan untuk memastikan nilai expected tidak sama dengan nilai matchersnya
// berlaku untuk semua jenis matcher,, cukup menambahkan Not sebelum matchers

test("test notMatchres", () => {
  const number = 10;
  const string = "hallo every body";

  expect(string).not.toBe("my Name")
  expect(number).not.toBeGreaterThan(15)
});
