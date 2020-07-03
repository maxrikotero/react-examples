export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "maxi" && password === "password") resolve();
      else reject();
    }, 100);
  });
};
