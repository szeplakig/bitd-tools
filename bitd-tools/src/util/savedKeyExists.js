const savedKeyExists = (key, store = localStorage) => {
  return store.getItem(key) !== null;
};

export default savedKeyExists;
