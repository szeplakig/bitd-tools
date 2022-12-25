import React from "react";
import savedElement from "./savedElement";
import save from "./save";

const useSessionStoredState = (storedName, defaultValue) => {
  // Check if we have a stored value with this name already, because they will overwrite each other's data probably
  const stateNames = savedElement("sessionStateNames", sessionStorage) || [];
  if (
    typeof storedName !== "string" ||
    storedName.length == 0 ||
    stateNames.includes(storedName)
  ) {
    console.error(`There is a stored state named ${storedName}`);
  }

  // Decide whether we should use the defaultValue or an existing loadedValue
  let value = defaultValue;
  const loadedValue = savedElement(storedName, sessionStorage);
  if (
    loadedValue !== undefined &&
    loadedValue !== null &&
    loadedValue !== defaultValue &&
    typeof loadedValue === typeof defaultValue
  ) {
    value = loadedValue;
  }

  // Create the state and wrap the setter so we can store the variable as well as set it
  const [state, setState] = React.useState(value);
  const setterWrapper = (newValue) => {
    setState(newValue);
    save(storedName, newValue, sessionStorage);
    if (storedName === "characterInventory") {
      console.log(newValue);
    }
  };

  return [state, setterWrapper];
};

export default useSessionStoredState;
