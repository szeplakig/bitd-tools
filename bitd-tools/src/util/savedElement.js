const savedElement = (key, store = localStorage) => {
  return JSON.parse(store.getItem(key));
};

export default savedElement;
