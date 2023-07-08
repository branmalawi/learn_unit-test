// Saat membuat unit test, lalu kita mendapatkan masalah di salah satu unit test, kadang kita ingin meng - ignore unit test tersebut terlebih dahulu
// Kita tidak perlu menambahkan komentar pada unit test tersebut
// Kita bisa menggunakan skip function, yang secara otomatis akan menjadikan unit test tersebut ter - ignore dan tidak akan di eksekusi

test('skip test 1', () => {
  expect(1 + 1).toBe(2);
});
test('skip test 2', () => {
  expect(1 + 1).toBe(2);
});

// tambahkan method skip maka code akan otomatis di ignore
test.skip('skip test 3', () => {
  expect(1 + 1).toBe(2);
});
test('skip test 4', () => {
  expect(1 + 1).toBe(2);
});
test('skip test 5', () => {
  expect(1 + 1).toBe(2);
});
