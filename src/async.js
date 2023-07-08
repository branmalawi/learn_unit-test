export const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`hello ${name}, good morning`);
      } else {
        reject('name is empty');
      }
    }, 2000);
  });
};

export const getBalance = async (name, from) => {
  const balance = await from();
  return { name, balance };
}