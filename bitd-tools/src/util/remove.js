const remove = (key, store = localStorage) => {
  store.removeItem(key);
};
export default remove;
