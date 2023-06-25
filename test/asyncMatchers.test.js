import { sayHello } from "../src/async";

// untuk melakukan async pada jest bisa dengan menggunakan async await
test('test async function', async () => {
  const hello = await sayHello('syibran');
  expect(hello).toBe('hello syibran, good morning')
});

// jest juga menyediakan funsi untuk mengelola async pada coda tanpa harus menerapkan async await
// caranya dalah dengan menambahkan resolves atau rejects setelah expect

test('test async matchers resolves', () => {
  expect(sayHello("syibran")).resolves.toBe('hello syibran, good morning');
});

test('test async matchers rejects', () => {
  expect(sayHello()).rejects.toBe('name is empty');
});