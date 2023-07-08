export const sumAll = (...number) => {
  const result = number.reduce((total, num) => total + num, 0);
  return result;
}

export const sumAllCallback = (callback, ...number) => {
  const test1 = 'andi';
  const result = number.reduce((total, num) => total + num, 0);
  callback(result, test1);
}

export const sumAllCallbackReturn = (callback, ...number) => {
  const result = number.reduce((total, num) => total + num, 0);
  return callback(result);
}