const savedElements = (key_base, store = localStorage) => {
  return Object.entries(store)
    .filter((entry) => entry[0].startsWith(key_base))
    .map((entry) => JSON.parse(entry[1]));
};

export default savedElements;
