const savedCount = (key_base) => {
  return Object.keys(localStorage).filter((key) => key.startsWith(key_base))
    .length;
};

export default savedCount;
