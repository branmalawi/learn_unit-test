import { sumAllCallback, sumAllCallbackReturn } from "../src/sum";
import { getBalance } from "../src/async";

import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";
// Dalam pemrograman, Mock Object adalah object tiruan yang kita buat, yang tingkah lakunya menyerupai dengan object aslinya
// Salah satu fitur dalam Mock Object adalah, kita bisa memberitahu tingkah laku dari object tersebut sesuai dengan yang kita inginkan
// Mock Object ini menjadi sangat cocok untuk kita gunakan ketika melakukan unit test yang berhubungan dengan sistem lain, sehingga kita tidak perlu berinteraksi dengan sistem lain tersebut

// Jest mendukung banyak jenis Mock, diantaranya
// Mock Function, yang bisa kita gunakan untuk membuat tiruan dari sebuah function
// Mock Class, yang bisa kita gunakan untuk membuat tiruan dari object Class
// Mock Modules, yang bisa kita gunakan untuk membuat tiruan dari Modules


test("test mock fn", () => {
  const callback = jest.fn();

  sumAllCallback(callback, 10, 20, 30, 40);
  sumAllCallback(callback, 10, 20, 30, 40, 50);

  expect(callback.mock.calls[0][0]).toBe(100);
  expect(callback.mock.calls[1][0]).toBe(150);

  // [1] = merepresentesikan fungsi keberapa, misal saya menggunakan mock.fn sebanyak 2 kali maka [1] adalah representasi dari fungsi ke-2
  // [0] = merepresentasikan argumen yang digunakan dalam fungsi
});


// mock return value
test("test mock return value", () => {
  const callback = jest.fn();

  // mockReturnValueOnce digunakan untuk mengatur nilai yang akan dikembalikan secara default
  callback.mockReturnValueOnce(80);
  callback.mockReturnValueOnce(100);

  expect(sumAllCallbackReturn(callback, 10, 20, 30, 40)).toBe(80);
  expect(sumAllCallbackReturn(callback, 10, 20, 30, 40, 50)).toBe(100);

  expect(callback.mock.results[0].value).toBe(80);
  expect(callback.mock.results[1].value).toBe(100);

});


// mock implementation
test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(sumAllCallbackReturn(callback, 10, 20, 30, 40)).toBe(200);
  expect(sumAllCallbackReturn(callback, 10, 20, 30, 40, 50)).toBe(300);

  expect(callback.mock.results[0].value).toBe(200);
  expect(callback.mock.results[1].value).toBe(300);
});


// mock async function
// async resolved
test("test mock async function resolved", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("syibran", from)).resolves.toEqual({ name: "syibran", balance: 1000 });
});

// async rejected
test.failing("test mock async function rejected", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error('ups'));
  await getBalance("syibran", from);
});


// mock matchers
// Jest sendiri menyediakan fitur Matchers untuk mock, dimana kita bisa melakukan matchers dengan lebih mudah dibandingkan secara manual

test("test mock matchers", () => {
  const callback = jest.fn();

  sumAllCallback(callback, 10, 20, 30, 40);
  sumAllCallback(callback, 10, 20, 30, 40, 50);

  // toHaveBeenCalled() = Memastikan mock pernah dipanggil
  expect(callback).toHaveBeenCalled();

  // toHaveBeenCalledTimes(number) = Memastikan mock pernah dipanggil sebanyak number
  expect(callback).toHaveBeenCalledTimes(2);

  // toHaveBeenCalledWith(arg1, arg2, ...) = Memastikan mock pernah dipanggil dengan parameter
  // parameter yang dimasukkan harus lengkap sesuai dengan parameter yang digunakan
  expect(callback).toHaveBeenCalledWith(100, "andi");

});

// mock module
// Untuk melakukan mock modules, kita bisa gunakan function jest.mock(module)
// Secara otomatis ketika kita import dari module tersebut, maka jest akan melakukan mock

jest.mock('../src/database.js')
test("test mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return { id, name: "syibran malawi" }
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({ id: 1, name: "syibran malawi" });
})

test("test mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "syibran malawi" },
    { id: 2, name: "andi handono" }
  ]

  getAllProducts.mockReturnValue(products);
  expect(ProductService.findAll()).toEqual(products);
})


