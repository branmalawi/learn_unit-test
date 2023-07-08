// Ketika kita melakukan proses debugging di unit test di dalam sebuah file yang unit test nya banyak, kadang kita ingin fokus ke unit test tertentu
// Jika kita menggunakan skip unit test yang lain, maka akan sulit jika terlalu banyak
// Kita bisa menggunakan Only Function, untuk memaksa dalam file tersebut, hanya unit test yang ditandai dengan Only yang di eksekusi


test('only test 1', () => {
  expect(1 + 1).toBe(2);
});
test('only test 2', () => {
  expect(1 + 1).toBe(2);
});

// tambahkan method only maka code yg akan otomatis di ignore dan hanya menjalankan function yg memiliki method only
test.only('only test 3', () => {
  expect(1 + 1).toBe(2);
});
test('only test 4', () => {
  expect(1 + 1).toBe(2);
});
test('only test 5', () => {
  expect(1 + 1).toBe(2);
});