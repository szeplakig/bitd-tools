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
  selected_class,
  set_character_actions,
  character_actions,
  action_group_name,
  action_name,
  showRollMenu,
}) => {
  return [
    [1, -1, 2, 3, 4].map((n) => {
      if (n === 0) {
        return <span>X</span>;
      } else if (n === -1) {
        return <span className="mr-1">|</span>;
      } else {
        return (
          <input
            id={`${action_name}-checkbox`}
            key={selected_class + action_name + n}
            type="checkbox"
            className="w-4 h-4 border- rounded-full text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={character_actions[action_group_name][action_name] >= n}
            onChange={() => {
              const actions = Object.assign({}, character_actions);
              let value = actions[action_group_name][action_name];
              let minValue =
                selected_class !== "" &&
                classes[selected_class].actions[action_group_name] !=
                  undefined &&
                classes[selected_class].actions[action_group_name][
                  action_name
                ] !== undefined
                  ? classes[selected_class].actions[action_group_name][
                      action_name
                    ]
                  : 0;
              if (value === n && n - 1 >= minValue) {
                value = n - 1;
              } else if (n >= minValue) {
                value = n;
              } else {
                value = minValue;
              }
              actions[action_group_name][action_name] = value;
              console.log(actions);
              set_character_actions(actions);
            }}
          ></input>
        );
      }
    }),
    <label
      htmlFor={`${action_name}-checkbox`}
      className="ml-2 text-gray-900 dark:text-gray-300"
    >
      <a
        href="javascript:;"
        onClick={(event) =>
          showRollMenu("Action", {
            action_group_name,
            action_name,
            character_actions,
          })
        }
      >
        <h4>{action_name}</h4>
      </a>
    </label>,
  ];
};

export default ActionSelector;
