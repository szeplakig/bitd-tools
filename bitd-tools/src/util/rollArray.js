const rollArray = (arr) => {
  if (!Array.isArray(arr)) {
    return;
  }

  return arr[Math.floor(Math.random() * arr.length)];
};

export default rollArray;
