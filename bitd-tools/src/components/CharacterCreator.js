import React, { useState } from "react";
import "../styles/CharacterCreator.css";
import example_char_portrait from "../assets/images/example.png";
import getNames from "../util/getNames";
import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../data/characters_data";

// import { TextField, MenuItem, Box } from "@mui/material";

const CharacterCreator = () => {
  const default_dots = {
    Hunt: 0,
    Study: 0,
    Survey: 0,
    Tinker: 0,
    Finesse: 0,
    Prowl: 0,
    Skirmish: 0,
    Wreck: 0,
    Attune: 0,
    Command: 0,
    Consort: 0,
    Sway: 0,
  };
  let [character_name, set_character_name] = useState("");
  let [character_alias, set_character_alias] = useState("");
  let [selected_class, set_selected_class] = useState("");
  let [selected_heritage, set_selected_heritage] = useState("");
  let [selected_background, set_selected_background] = useState("");
  let [selected_vice, set_selected_vice] = useState("");
  let [selected_abilities, set_selected_abilities] = useState([]);
  let [character_dots, set_character_dots] = useState(
    Object.assign({}, default_dots)
  );

  return (
    <div className="characterCreatorGridParent characterCreatorDiv">
      <div className="characterCreatorPortrait characterCreatorDiv">
        <img src={example_char_portrait}></img>
      </div>
      <div className="characterCreatorName characterCreatorDiv">
        <input
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          id="characterName"
          type="text"
          placeholder="Character name"
          value={character_name}
          onChange={(event) => set_character_name(event.target.value)}
        ></input>
      </div>
      <div className="characterCreatorAlias characterCreatorDiv">
        <input
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          id="characterAlias"
          type="text"
          placeholder="Character alias"
          value={character_alias}
          onChange={(event) => set_character_alias(event.target.value)}
        ></input>
      </div>
      <div className="characterCreatorClassSelect characterCreatorDiv">
        <select
          id="characterClass"
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          value={selected_class}
          onChange={(event) => {
            set_selected_class(event.target.value);
            set_selected_abilities([]);
            if (event.target.value !== "") {
              set_character_dots(
                Object.assign(
                  {},
                  default_dots,
                  classes[event.target.value].dots
                )
              );
            } else {
              set_character_dots(Object.assign({}, default_dots));
            }
          }}
        >
          <option value="">Choose a Class</option>
          {Object.keys(classes).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <div className="characterCreatorClassInfo characterCreatorDiv">
        {selected_class && <h3>{classes[selected_class].description}</h3>}
      </div>
      <div className="characterCreatorBackgroundSelect characterCreatorDiv">
        <select
          id="characterBackground"
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          value={selected_background}
          onChange={(event) => set_selected_background(event.target.value)}
        >
          <option value="">Choose a Background</option>
          {Object.keys(backgrounds).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <div className="characterCreatorBackgroundInfo characterCreatorDiv">
        {selected_background && (
          <h3>{backgrounds[selected_background].description}</h3>
        )}
      </div>
      <div className="characterCreatorHeritageSelect characterCreatorDiv">
        <select
          id="characterHeritage"
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          value={selected_heritage}
          onChange={(event) => set_selected_heritage(event.target.value)}
        >
          <option value="">Choose a Heritage</option>
          {Object.keys(heritages).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <div className="characterCreatorHeritageInfo characterCreatorDiv">
        {selected_heritage && (
          <h3>{heritages[selected_heritage].description}</h3>
        )}
      </div>
      <div className="characterCreatorViceSelect characterCreatorDiv">
        <select
          id="characterVice"
          className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
          value={selected_vice}
          onChange={(event) => set_selected_vice(event.target.value)}
        >
          <option value="">Choose a Vice</option>
          {Object.keys(vices).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <div className="characterCreatorViceInfo characterCreatorDiv">
        {selected_vice && <h3>{vices[selected_vice].description}</h3>}
      </div>
      <div className="characterCreatorSpecialAbilities characterCreatorDiv">
        {selected_class &&
          getNames(classes[selected_class].special_abilities).map(
            (special_ability_name) => {
              return (
                <div
                  key={selected_class + special_ability_name}
                  className="flex items-center mb-4"
                >
                  <input
                    id={`${special_ability_name}-checkbox`}
                    type="checkbox"
                    value={selected_abilities.includes(special_ability_name)}
                    onChange={() => {
                      const abilities = [...selected_abilities];
                      if (abilities.includes(special_ability_name)) {
                        abilities.splice(
                          abilities.indexOf(special_ability_name),
                          1
                        );
                      } else {
                        abilities.push(special_ability_name);
                      }
                      set_selected_abilities(abilities);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label
                    htmlFor={`${special_ability_name}-checkbox`}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {special_ability_name}
                  </label>
                </div>
              );
            }
          )}
      </div>
      <div className="characterCreatorDots characterCreatorDiv">
        {character_dots &&
          Object.keys(character_dots).map((dot_name) => {
            const headers = {
              Hunt: "Insight",
              Finesse: "Prowess",
              Attune: "Resolve",
            };
            const header =
              headers[dot_name] !== undefined ? (
                <h3>{headers[dot_name]}</h3>
              ) : (
                ""
              );
            return [
              header,
              <div
                key={selected_class + dot_name}
                className="flex items-center mb-4"
              >
                {[1, -1, 2, 3, 4].map((n) => {
                  if (n === -1) {
                    return <span>|</span>;
                  } else {
                    return (
                      <input
                        id={`${dot_name}-checkbox`}
                        key={selected_class + dot_name + n}
                        type="checkbox"
                        className="w-4 h-4 border- rounded-full text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={character_dots[dot_name] >= n}
                        onChange={() => {
                          const dots = { ...character_dots };
                          let value = dots[dot_name];
                          let minValue =
                            selected_class !== "" &&
                            classes[selected_class].dots[dot_name] !== undefined
                              ? classes[selected_class].dots[dot_name]
                              : 0;
                          if (value === n && n - 1 >= minValue) {
                            value = n - 1;
                          } else if (n >= minValue) {
                            value = n;
                          } else {
                            value = minValue;
                          }
                          dots[dot_name] = value;

                          set_character_dots(dots);
                        }}
                      ></input>
                    );
                  }
                })}
                <label
                  htmlFor={`${dot_name}-checkbox`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {dot_name}
                </label>
              </div>,
            ];
          })}
      </div>
      <div className="characterCreatorFriends characterCreatorDiv">
        characterCreatorFriends
      </div>
      <div className="characterCreatorInventory characterCreatorDiv">
        characterCreatorInventory
      </div>
    </div>
  );
};

export default CharacterCreator;
