const savedKeyExists = (key) => {
  return localStorage.getItem(key) !== null;
};

export default savedKeyExists;
