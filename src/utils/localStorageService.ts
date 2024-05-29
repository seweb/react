export const getItem = (name: string) => {
  return localStorage.getItem(name);
};

export const setItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const removeItem = (name: string) => {
  localStorage.removeItem(name);
};
