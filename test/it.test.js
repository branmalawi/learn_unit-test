import { sumAll } from "../src/sum";
// di jest terdapat alias untuk test(), yaitu it()
// Sebenarnya tidak ada bedanya dengan function test(), hanya saja, kadang ada programmer yang lebih suka menggunakan function it() agar unit test yang dibuat mirip dengan cerita ketika dibaca kodenya

describe('when call sumAll(10,20,30,40)', () => {
  it('should calculate all and get 100', () => {
    expect(sumAll(10, 20, 30, 40)).toBe(100);
  });

});
