import { sayHello } from "../src/async";
// Secara default, semua unit test akan dijalankan secara sequential, dan unit test selanjutnya akan dijalankan ketiak unit test sebelumnya telah selesai
// Jest juga mendukung concurrent unit test, dimana kita bisa menandai sebuah unit test agar jalan secara concurrent atau async sehingga tidak perlu ditunggu
// Saat dibuatnya materi ini, fitur concurrent sendiri masih experimental atau belum stabil


test.concurrent('concurrent 1', async () => {
  await expect(sayHello("syibran")).resolves.toBe('hello syibran, good morning');
});
test.concurrent('concurrent 2', async () => {
  await expect(sayHello("syibran")).resolves.toBe('hello syibran, good morning');
});
test.concurrent('concurrent 3', async () => {
  await expect(sayHello("syibran")).resolves.toBe('hello syibran, good morning');
});
test.concurrent('concurrent 4', async () => {
  await expect(sayHello("syibran")).resolves.toBe('hello syibran, good morning');
});