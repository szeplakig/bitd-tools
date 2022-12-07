const savedElements = (key_base) => {
  return Object.entries(localStorage)
    .filter((entry) => entry[0].startsWith(key_base))
    .map((entry) => JSON.parse(entry[1]));
};

export default savedElements;
