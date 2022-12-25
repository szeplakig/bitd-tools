import React from "react";

import { classes } from "../../data/characters_data";

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
            className="ml-2 w-4 h-4 border- rounded-full text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
    <label htmlFor={`${actionName}-checkbox`} className="ml-2 text-grey-900">
      <span
        className="cursor-pointer"
        onClick={(event) =>
          showRollMenu("Action", {
            actionGroupName,
            actionName,
            characterActions,
          })
        }
      >
        <h4>{actionName}</h4>
      </span>
    </label>,
  ];
};

export default ActionSelector;
