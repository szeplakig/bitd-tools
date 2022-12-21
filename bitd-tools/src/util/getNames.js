const getNames = (named_elements) => {
  const names = [];
  for (const element of named_elements) {
    names.push(element.name);
  }
  return names;
};

export default getNames;
