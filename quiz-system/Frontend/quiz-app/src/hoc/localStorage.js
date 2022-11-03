export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadData = key => {
  return JSON.parse(localStorage.getItem(key));
};
