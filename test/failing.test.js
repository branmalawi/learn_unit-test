import { callMyName } from "../src/exceptionsMatchers";
// fungsi failing digunakan untuk membuat skenario pengetesan menjadi gagal
// contoh misal ketika kita mengirim data tidak valid, maka kita berharap kalo kode nya terjadi error

test('callMyName success', () => {
  expect(callMyName('syibran')).toBe('ok');
})

test.failing('callMyName error', () => {
  callMyName('others name');
})