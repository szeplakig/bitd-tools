import React from "react";

import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../../data/characters_data";

// import { TextField, MenuItem, Box } from "@mui/material";

const ActionSelector = ({
  selectedClass,
  setCharacterActions,
  characterActions,
  actionGroupName,
  actionName,
  showRollMenu,
}) => {
  return [
    [1, -1, 2, 3, 4].map((n) => {
      if (n === 0) {
        return <span key={`span-${n}`}>X</span>;
      } else if (n === -1) {
        return (
          <span key={`span-${n}`} className="mr-1">
            |
          </span>
        );
      } else {
        return (
          <input
            id={`${actionName}-checkbox`}
            key={selectedClass + actionName + n}
            type="checkbox"
            className="w-4 h-4 border- rounded-full text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={characterActions[actionGroupName][actionName] >= n}
            onChange={() => {
              const actions = Object.assign({}, characterActions);
              let value = actions[actionGroupName][actionName];
              let minValue =
                selectedClass !== "" &&
                classes[selectedClass].actions[actionGroupName] != undefined &&
                classes[selectedClass].actions[actionGroupName][actionName] !==
                  undefined
                  ? classes[selectedClass].actions[actionGroupName][actionName]
                  : 0;
              if (value === n && n - 1 >= minValue) {
                value = n - 1;
              } else if (n >= minValue) {
                value = n;
              } else {
                value = minValue;
              }
              actions[actionGroupName][actionName] = value;
              setCharacterActions(actions);
            }}
          ></input>
        );
      }
    }),
    <label
      htmlFor={`${actionName}-checkbox`}
      className="ml-2 text-gray-900 dark:text-gray-300"
    >
      <a
        href="javascript:;"
        onClick={(event) =>
          showRollMenu("Action", {
            actionGroupName,
            actionName,
            characterActions,
          })
        }
      >
        <h4>{actionName}</h4>
      </a>
    </label>,
  ];
};

export default ActionSelector;
