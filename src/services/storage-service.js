const getData = (key) => {
  return window.localStorage.getItem(key);
};

const saveData = (key, data) => {
  window.localStorage.setItem(key, data);
};

const removeData = (key) => {
  window.localStorage.removeItem(key);
};

export default {
  getData,
  saveData,
  removeData,
};
