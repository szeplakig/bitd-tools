import React, { useState } from "react";
import "../../styles/CharacterCreator.css";
import example_char_portrait from "../../assets/images/example.png";
import getNames from "../../util/getNames";
import savedElements from "../../util/savedElements";
import savedKeyExists from "../../util/savedKeyExists";
import save from "../../util/save";
import remove from "../../util/remove";
import savedCount from "../../util/savedCount";
import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../../data/characters_data";
import ActionSelector from "./ActionSelector";
import RollModal from "./RollModal";

// import { TextField, MenuItem, Box } from "@mui/material";

const CharacterCreator = () => {
  const key_base = "character_";
  const [showRollModal, setShowRollModal] = React.useState(false);
  const [rollType, setRollType] = React.useState(undefined);
  const [rollArgs, setRollArgs] = React.useState({});

  const default_actions = {
    Insight: {
      Hunt: 0,
      Study: 0,
      Survey: 0,
      Tinker: 0,
    },
    Prowess: {
      Finesse: 0,
      Prowl: 0,
      Skirmish: 0,
      Wreck: 0,
    },
    Resolve: {
      Attune: 0,
      Command: 0,
      Consort: 0,
      Sway: 0,
    },
  };
  let [character_name, set_character_name] = useState("");
  let [character_alias, set_character_alias] = useState("");
  let [selected_class, setSelectedClass] = useState("");
  let [selected_heritage, set_selected_heritage] = useState("");
  let [selected_background, set_selected_background] = useState("");
  let [selected_vice, set_selected_vice] = useState("");
  let [selected_abilities, setSelectedAbilities] = useState([]);
  let [character_friends_or_rivals, setCharacterFriendsOrRivals] = useState({});
  let [character_actions, setCharacterActions] = useState(
    Object.assign({}, default_actions)
  );

  let [saved_characters, set_saved_characters] = useState(0);
  let [selected_menu_screen, set_selected_menu_screen] = useState(0);

  const showRollMenu = (roll_type, roll_args) => {
    setShowRollModal(true);
    setRollType(roll_type);
    setRollArgs(roll_args);
  };

  const save_current_character = () => {
    if (character_name.length === 0) {
      alert(`Cannot save character without name!`);
      return;
    }
    const character_key = key_base + character_name;
    const character_exists = savedKeyExists(character_key);
    if (
      character_exists &&
      !window.confirm(
        `A character with name ${character_name} already exists, do you want to overwrite it?`
      )
    ) {
      return;
    }
    const character_data = {
      character_name,
      character_alias,
      selected_class,
      selected_heritage,
      selected_background,
      selected_vice,
      selected_abilities,
      character_friends_or_rivals,
      character_actions,
    };
    save(character_key, character_data);
    set_saved_characters(savedCount(key_base));
  };
  const load_character = (data) => {
    if (
      window.confirm("Do you really want to overwrite your current character?")
    ) {
      set_character_name(data.character_name);
      set_character_alias(data.character_alias);
      setSelectedClass(data.selected_class);
      set_selected_heritage(data.selected_heritage);
      set_selected_background(data.selected_background);
      set_selected_vice(data.selected_vice);
      setSelectedAbilities(data.selected_abilities);
      setCharacterFriendsOrRivals(data.character_friends_or_rivals);
      setCharacterActions(data.character_actions);
    }
  };
  const remove_character = (character_name) => {
    if (window.confirm(`Do you really want to remove ${character_name}`)) {
      remove(key_base + character_name);
      set_saved_characters(savedCount(key_base));
    }
  };

  const setCharacterActionsHelper = (class_name) => {
    if (class_name !== "") {
      let actions = {};
      for (const action_group_name in default_actions) {
        actions[action_group_name] = Object.assign(
          {},
          default_actions[action_group_name],
          classes[class_name].actions[action_group_name]
        );
      }
      setCharacterActions(actions);
    } else {
      setCharacterActions(Object.assign({}, default_actions));
    }
  };

  const setCharacterFriendsOrRivalsHelper = (class_name) => {
    if (class_name !== "") {
      const friends_or_rivals = {};
      for (const fr of classes[class_name].friends_or_rivals) {
        friends_or_rivals[fr.name] = null;
      }
      setCharacterFriendsOrRivals(friends_or_rivals);
    } else {
      setCharacterFriendsOrRivals({});
    }
  };

  const setSelectedClassHelper = (class_name) => {
    setSelectedClass(class_name);
    setSelectedAbilities([]);
    setCharacterActionsHelper(class_name);
    setCharacterFriendsOrRivalsHelper(class_name);
  };

  return (
    <div className="flex justify-center items-start align-top">
      <ul
        className="bg-bitdBlack z-10
                            flex fixed overflow-y-hidden overflow-x-auto w-full h-16 
                            sm:ml-4 sm:w-[30%] sm:my-4 sm:mx-2
                            lg:h-[90vh] sm:overflow-y-auto sm:overflow-x-hidden
                            sm:flex-col sm:static sm:h-full
                            lg:max-w-[275px] rounded p-2"
      >
        <li>
          <span
            className="inline-flex cursor-pointer"
            onClick={() => save_current_character()}
          >
            <svg
              className="w-6 h-6 m-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Save character
          </span>
        </li>
        <hr className="white" />
        {savedElements(key_base).map((value) => (
          <li className="inline-flex cursor-pointer">
            <svg
              className="w-6 h-6 m-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => load_character(value)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {value.character_name}
            <svg
              className="w-6 h-6 m-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => remove_character(value.character_name)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </li>
        ))}
      </ul>
      <div
        className="
          characterCreatorGridParent
          characterCreatorDiv
          rounded overflow-hidden
          shadow-lg bg-bitdGray text-white
          my-4 mx-2 lg:w-[70%] mt-16 sm:mt-2 p-2"
      >
        <div className="characterCreatorPortrait characterCreatorDiv rounded">
          <img src={example_char_portrait}></img>
        </div>
        <div className="characterCreatorName characterCreatorDiv rounded w-full h-full">
          <input
            className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            id="characterName"
            type="text"
            placeholder="Character name"
            value={character_name}
            onChange={(event) => set_character_name(event.target.value)}
          ></input>
        </div>
        <div className="characterCreatorAlias characterCreatorDiv rounded w-full h-full">
          <input
            className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            id="characterAlias"
            type="text"
            placeholder="Character alias"
            value={character_alias}
            onChange={(event) => set_character_alias(event.target.value)}
          ></input>
        </div>
        <div className="characterCreatorClassSelect characterCreatorDiv rounded w-full h-full">
          <select
            id="characterClass"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
            value={selected_class}
            onChange={(event) => {
              setSelectedClassHelper(event.target.value);
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
        <div className="characterCreatorClassInfo characterCreatorDiv rounded w-full h-full">
          {selected_class && (
            <h3 className="w-full h-full">
              {classes[selected_class].description}
            </h3>
          )}
        </div>
        <div className="characterCreatorBackgroundSelect characterCreatorDiv rounded w-full h-full">
          <select
            id="characterBackground"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
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
        <div className="characterCreatorBackgroundInfo characterCreatorDiv rounded w-full h-full">
          {selected_background && (
            <h3 className="w-full h-full">
              {backgrounds[selected_background].description}
            </h3>
          )}
        </div>
        <div className="characterCreatorHeritageSelect characterCreatorDiv rounded w-full h-full">
          <select
            id="characterHeritage"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
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
        <div className="characterCreatorHeritageInfo characterCreatorDiv rounded w-full h-full">
          {selected_heritage && (
            <h3 className="w-full h-full">
              {heritages[selected_heritage].description}
            </h3>
          )}
        </div>
        <div className="characterCreatorViceSelect characterCreatorDiv rounded w-full h-full">
          <select
            id="characterVice"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
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
        <div className="characterCreatorViceInfo characterCreatorDiv rounded w-full h-full">
          {selected_vice && (
            <h3 className="w-full h-full">
              {vices[selected_vice].description}
            </h3>
          )}
        </div>
        <div className="characterSwitchMenu">
          <div className="flex flex-row justify-evenly">
            <h1
              className="mb-5 inline-flex cursor-pointer bg-bitdBlack p-2 rounded"
              onClick={() => set_selected_menu_screen(0)}
            >
              Special Abilities
            </h1>
            <h1
              className="mb-5 before:inline-flex cursor-pointer bg-bitdBlack p-2 rounded"
              onClick={() => set_selected_menu_screen(1)}
            >
              {selected_class &&
                classes[selected_class].friends_or_rivals_type + " "}
              Friends or Rivals
            </h1>
            <h1
              className="mb-5 inline-flex cursor-pointer bg-bitdBlack p-2 rounded"
              onClick={() => set_selected_menu_screen(2)}
            >
              Character Inventory
            </h1>
          </div>
          {selected_menu_screen == 0 && (
            <div className="characterCreatorDiv rounded characterSpecialAbilitiesGrid">
              <div></div>
              <div>
                <h2>Ability name</h2>
              </div>
              <div>
                <h2>Description</h2>
              </div>
              {selected_class &&
                Object.keys(classes[selected_class].special_abilities).map(
                  (special_ability_name) => {
                    return [
                      <input
                        id={`${special_ability_name}-checkbox`}
                        type="checkbox"
                        value={selected_abilities.includes(
                          special_ability_name
                        )}
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
                          setSelectedAbilities(abilities);
                        }}
                        className="flex-none w-[20px] h-[20px] text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>,
                      <label
                        htmlFor={`${special_ability_name}-checkbox`}
                        className="text-gray-900 dark:text-gray-300 break-words"
                      >
                        {special_ability_name}
                      </label>,
                      <h2 className="break-words max-h-[20vh] overflow-x-hidden overflow-y-auto">
                        {
                          classes[selected_class].special_abilities[
                            special_ability_name
                          ].ability
                        }
                      </h2>,
                    ];
                  }
                )}
            </div>
          )}
          {selected_menu_screen == 1 && (
            <div className="characterFriendsNRivals characterCreatorDiv rounded">
              {selected_class &&
                getNames(classes[selected_class].friends_or_rivals).map(
                  (acquaintance) => [
                    <span className="inline-flex flex-col">
                      <input
                        type="radio"
                        className="top"
                        name={selected_class + acquaintance + "type"}
                        id={selected_class + acquaintance + "good"}
                        onChange={(event) => {
                          const current = { ...character_friends_or_rivals };
                          current[acquaintance] = "Friend";
                          setCharacterFriendsOrRivals(current);
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
                          setCharacterFriendsOrRivals(current);
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
                          setCharacterFriendsOrRivals(current);
                        }}
                      />
                    </span>,
                    <h3 className="inline-block ml-5">{acquaintance}</h3>,
                  ]
                )}
            </div>
          )}
          {selected_menu_screen == 2 && (
            <div className="characterCreatorDiv rounded ">
              <div className="characterInventoryGrid">
                <div></div>
                <div>
                  <h2>Name</h2>
                </div>
                <div>
                  <h2>Load</h2>
                </div>
                <div>
                  <h2>Description</h2>
                </div>
                {selected_class &&
                  Object.values(classes[selected_class].items).map((item) => [
                    <div>
                      <input
                        id={`${item.name}-checkbox`}
                        type="checkbox"
                        value={[item.name, item.load]}
                        onChange={() => {}}
                        className="w-[20px] h-[20px] text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>,
                    <div>{item.name}</div>,
                    <div>{item.load}</div>,
                    <div>{item.description}</div>,
                  ])}
              </div>
              <hr className="my-10" />
              <div className="characterInventoryGrid">
                {Object.values(standard_items).map((item) => [
                  <div>
                    <input
                      id={`${item.name}-checkbox`}
                      type="checkbox"
                      value={[item.name, item.load]}
                      onChange={() => {}}
                      className="w-[20px] h-[20px] text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                  </div>,
                  <div>{item.name}</div>,
                  <div>{item.load}</div>,
                  <div>{item.description}</div>,
                ])}
              </div>
            </div>
          )}
        </div>
        <div className="characterCreatorActions characterCreatorDiv rounded">
          <h1 className="mb-5">Character Actions</h1>
          {character_actions &&
            Object.keys(character_actions).map((action_group_name) => [
              <h3>
                <a
                  href="javascript:;"
                  onClick={(event) =>
                    showRollMenu("Save", {
                      action_group_name,
                      character_actions,
                    })
                  }
                >
                  {action_group_name}
                </a>
              </h3>,
              Object.keys(character_actions[action_group_name]).map(
                (action_name) => (
                  <div
                    key={selected_class + action_name}
                    className="flex items-center mb-4"
                  >
                    <ActionSelector
                      selected_class={selected_class}
                      set_character_actions={setCharacterActions}
                      character_actions={character_actions}
                      action_group_name={action_group_name}
                      action_name={action_name}
                      showRollMenu={showRollMenu}
                    />
                  </div>
                )
              ),
            ])}
          <h3>
            Total:{" "}
            {Object.values(character_actions).reduce(
              (p, c) => p + Object.values(c).reduce((p2, c2) => p2 + c2, 0),
              0
            )}
          </h3>
          <button onClick={() => setCharacterActionsHelper(selected_class)}>
            Reset
          </button>
        </div>
        <div className="div16 characterCreatorDiv">
          <h2 className="mb-5">Empty</h2>
        </div>
      </div>
      <RollModal
        showRollModal={showRollModal}
        setShowRollModal={setShowRollModal}
        rollType={rollType}
        rollArgs={rollArgs}
      ></RollModal>
    </div>
  );
};

export default CharacterCreator;
