const save = (key, object, store = localStorage) => {
  store.setItem(key, JSON.stringify(object));
};
export default save;
