const rollArray = (arr) => {
  if (!Array.isArray(arr)) {
    return;
  }

  const selected = arr[Math.floor(Math.random() * arr.length)];
  return selected;
};

export default rollArray;
