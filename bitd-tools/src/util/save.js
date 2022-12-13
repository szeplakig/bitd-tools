const save = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};
export default save;
