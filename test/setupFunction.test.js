let number = 0;

// beforeAll akan dijalankan sekali sebelum semua funsi test dilakukan
beforeAll(() => {
  console.log('hello guys')
});

// beforeEach akan dijalankan sebelum setiap funsi test dilakukan
beforeEach(() => {
  number++;
});

test('test setup function angka ganjil', () => {
  expect(number).toBe(1);
});

test('test setup function angka genap', () => {
  expect(number).toBe(2);
});

// afterEach akan dijalankan sebelum setiap funsi test dilakukan
afterEach(() => {
  number % 2 == 0 ? console.log('angka genap') : console.log('angkanya ganjil');
});

// afterALl akan dijalankan sekali sesudah semua funsi test dilakukan
afterAll(() => {
  console.log('bye guys')
});