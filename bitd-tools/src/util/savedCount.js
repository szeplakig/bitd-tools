const savedCount = (key_base, store = localStorage) => {
  return Object.keys(store).filter((key) => key.startsWith(key_base)).length;
};

export default savedCount;
