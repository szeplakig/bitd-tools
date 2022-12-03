import React, { useState } from "react";
import "../../styles/CharacterCreator.css";
import example_char_portrait from "../../assets/images/example.png";
import getNames from "../../util/getNames";
import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../../data/characters_data";
import ActionSelector from "./ActionSelector";

// import { TextField, MenuItem, Box } from "@mui/material";

const CharacterCreator = () => {
  const default_actions = {
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
  let [character_friends_or_rivals, set_character_friends_or_rivals] = useState(
    {}
  );
  let [character_actions, set_character_actions] = useState(
    Object.assign({}, default_actions)
  );

  const show_roll_menu = (roll_name) => {
    // placeholder
    alert(roll_name + " roll");
  };

  return (
    <div className="flex justify-center items-center">
      <div></div>
      <div
        className="
        characterCreatorGridParent
        characterCreatorDiv
        rounded overflow-hidden
        shadow-lg bg-bitdGray text-white
        my-4 mx-2 w-[70%] mt-16 sm:mt-2"
      >
        <div className="characterCreatorPortrait characterCreatorDiv rounded">
          <img src={example_char_portrait}></img>
        </div>
        <div className="characterCreatorName characterCreatorDiv rounded">
          <input
            className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            id="characterName"
            type="text"
            placeholder="Character name"
            value={character_name}
            onChange={(event) => set_character_name(event.target.value)}
          ></input>
        </div>
        <div className="characterCreatorAlias characterCreatorDiv rounded">
          <input
            className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            id="characterAlias"
            type="text"
            placeholder="Character alias"
            value={character_alias}
            onChange={(event) => set_character_alias(event.target.value)}
          ></input>
        </div>
        <div className="characterCreatorClassSelect characterCreatorDiv rounded">
          <select
            id="characterClass"
            className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            value={selected_class}
            onChange={(event) => {
              set_selected_class(event.target.value);
              set_selected_abilities([]);
              if (event.target.value !== "") {
                set_character_actions(
                  Object.assign(
                    {},
                    default_actions,
                    classes[event.target.value].actions
                  )
                );
                const friends_or_rivals = {};
                for (const fr of classes[event.target.value]
                  .friends_or_rivals) {
                  console.log(fr.name);
                  friends_or_rivals[fr.name] = null;
                }
                set_character_friends_or_rivals(friends_or_rivals);
              } else {
                set_character_actions(Object.assign({}, default_actions));
                set_character_friends_or_rivals({});
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
        <div className="characterCreatorClassInfo characterCreatorDiv rounded">
          {selected_class && <h3>{classes[selected_class].description}</h3>}
        </div>
        <div className="characterCreatorBackgroundSelect characterCreatorDiv rounded">
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
        <div className="characterCreatorBackgroundInfo characterCreatorDiv rounded">
          {selected_background && (
            <h3>{backgrounds[selected_background].description}</h3>
          )}
        </div>
        <div className="characterCreatorHeritageSelect characterCreatorDiv rounded">
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
        <div className="characterCreatorHeritageInfo characterCreatorDiv rounded">
          {selected_heritage && (
            <h3>{heritages[selected_heritage].description}</h3>
          )}
        </div>
        <div className="characterCreatorViceSelect characterCreatorDiv rounded">
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
        <div className="characterCreatorViceInfo characterCreatorDiv rounded">
          {selected_vice && <h3>{vices[selected_vice].description}</h3>}
        </div>
        <div className="characterCreatorSpecialAbilities characterCreatorDiv rounded">
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
        <div className="characterCreatorActions characterCreatorDiv rounded">
          {character_actions &&
            Object.keys(character_actions).map((action_name) => {
              const headers = {
                Hunt: "Insight",
                Finesse: "Prowess",
                Attune: "Resolve",
              };
              const header =
                headers[action_name] !== undefined ? (
                  <h3>
                    <a
                      href="javascript:;"
                      onClick={(event) => show_roll_menu(headers[action_name])}
                    >
                      {headers[action_name]}
                    </a>
                  </h3>
                ) : (
                  ""
                );
              return [
                header,
                <div
                  key={selected_class + action_name}
                  className="flex items-center mb-4"
                >
                  <ActionSelector
                    selected_class={selected_class}
                    set_character_actions={set_character_actions}
                    character_actions={character_actions}
                    action_name={action_name}
                    show_roll_menu={show_roll_menu}
                  />
                </div>,
              ];
            })}
        </div>
        <div className="characterCreatorFriends characterCreatorDiv rounded">
          <p>
            {selected_class &&
              classes[selected_class].friends_or_rivals_type + " "}
            Friends or Rivals
          </p>
          {selected_class &&
            getNames(classes[selected_class].friends_or_rivals).map(
              (acquaintance) => (
                <span>
                  <span className="inline-flex flex-col">
                    <input
                      type="radio"
                      className="top"
                      name={selected_class + acquaintance + "type"}
                      id={selected_class + acquaintance + "good"}
                      onChange={(event) => {
                        const current = { ...character_friends_or_rivals };
                        current[acquaintance] = "Friend";
                        set_character_friends_or_rivals(current);
                      }}
                    />
                    <input
                      type="radio"
                      className="none"
                      name={selected_class + acquaintance + "type"}
                      id={selected_class + acquaintance + "none"}
                      onChange={(event) => {
                        const current = { ...character_friends_or_rivals };
                        current[acquaintance] = null;
                        set_character_friends_or_rivals(current);
                      }}
                      defaultChecked
                    />
                    <input
                      type="radio"
                      className="bot"
                      name={selected_class + acquaintance + "type"}
                      id={selected_class + acquaintance + "bad"}
                      onChange={(event) => {
                        const current = { ...character_friends_or_rivals };
                        current[acquaintance] = "Rival";
                        set_character_friends_or_rivals(current);
                      }}
                    />
                  </span>
                  <h3 className="inline-block ml-5">{acquaintance}</h3>
                  <br />
                </span>
              )
            )}
        </div>
        <div className="characterCreatorInventory characterCreatorDiv rounded">
          characterCreatorInventory
        </div>
        <div className="div16">empty</div>
      </div>
      <div></div>
    </div>
  );
};

export default CharacterCreator;
