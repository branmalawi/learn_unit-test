import { sumAll } from "../src/sum";
// Salah satu kesalahan yang biasa dilakukan adalah membuat unit test yang duplicate
// Biasanya alasan melakukan duplicate unit test, hanya karena data yang di test nya saja berbeda

// contoh duplicate test 
// perbedaan hanya terdapat pada angkanya saja
it('duplicate test sumAll(20, 30) should result 50', () => {
  expect(sumAll(20, 30)).toBe(50);
});

it('duplicate test sumAll(20, 30, 40) should result 90', () => {
  expect(sumAll(20, 30, 40)).toBe(90);
});

// untuk mengatasi ini sangat direkomendasikan menggunakan Each Function di Jest
// Each Function memungkinkan kita menggunakan data dalam bentuk array, yang akan di iterasi ke dalam kode unit test yang sama

const table = [
  { parameter: [10, 20, 30], expected: 60 },
  { parameter: [10, 20, 30, 40], expected: 100 },
  { parameter: [10, 20, 30, 40, 50], expected: 150 },
  { parameter: [10, 20, 30, 40, 50, 60], expected: 210 },
]

test.each(table)('each test sumAll($parameter) should result $expected', ({ parameter, expected }) => {
  expect(sumAll(...parameter)).toBe(expected);
});

