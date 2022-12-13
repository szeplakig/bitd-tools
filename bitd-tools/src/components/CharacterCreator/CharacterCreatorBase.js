import React, { useState } from "react";
import "../../styles/CharacterCreator.css";
import example_char_portrait from "../../assets/images/example.png";
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

const CharacterCreator = () => {
  const keyBase = "character_";
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
  let [characterName, setCharacterName] = useState("");
  let [characterAlias, setCharacterAlias] = useState("");
  let [selectedClass, setSelectedClass] = useState("");
  let [selectedHeritage, setSelectedHeritage] = useState("");
  let [selectedBackground, setSelectedBackground] = useState("");
  let [selectedVice, setSelectedVice] = useState("");
  let [selectedAbilities, setSelectedAbilities] = useState([]);
  let [characterFriendsOrRivals, setCharacterFriendsOrRivals] = useState({});
  let [characterActions, setCharacterActions] = useState(
    Object.assign({}, default_actions)
  );
  let [characterInventory, setCharacterInventory] = useState([]);
  let [selectedTargetLoad, setSelectedTargetLoad] = useState(0);

  let [savedCharacters, setSavedCharacters] = useState(0);
  let [selectedMenuScreen, setSelectedMenuScreen] = useState(0);

  const showRollMenu = (rollType, rollArgs) => {
    setShowRollModal(true);
    setRollType(rollType);
    setRollArgs(rollArgs);
  };

  const saveCurrentCharacter = () => {
    if (characterName.length === 0) {
      alert(`Cannot save character without name!`);
      return;
    }
    const characterKey = keyBase + characterName;
    const characterExists = savedKeyExists(characterKey);
    if (
      characterExists &&
      !window.confirm(
        `A character with name ${characterName} already exists, do you want to overwrite it?`
      )
    ) {
      return;
    }
    const characterData = {
      characterName,
      characterAlias,
      selectedClass,
      selectedHeritage,
      selectedBackground,
      selectedVice,
      selectedAbilities,
      characterFriendsOrRivals,
      characterActions,
      characterInventory,
      selectedTargetLoad,
    };
    save(characterKey, characterData);
    setSavedCharacters(savedCount(keyBase));
  };
  const loadCharacter = (data) => {
    if (
      window.confirm("Do you really want to overwrite your current character?")
    ) {
      setCharacterName(data.characterName);
      setCharacterAlias(data.characterAlias);
      setSelectedClass(data.selectedClass);
      setSelectedHeritage(data.selectedHeritage);
      setSelectedBackground(data.selectedBackground);
      setSelectedVice(data.selectedVice);
      setSelectedAbilities(data.selectedAbilities);
      setCharacterFriendsOrRivals(data.characterFriendsOrRivals);
      setCharacterActions(data.characterActions);
      setCharacterInventory(data.characterInventory);
      setSelectedTargetLoad(data.selectedTargetLoad);
    }
  };
  const remove_character = (characterName) => {
    if (window.confirm(`Do you really want to remove ${characterName}`)) {
      remove(keyBase + characterName);
      setSavedCharacters(savedCount(keyBase));
    }
  };

  const setCharacterActionsHelper = (className) => {
    if (className !== "") {
      let actions = {};
      for (const actionGroupName in default_actions) {
        actions[actionGroupName] = Object.assign(
          {},
          default_actions[actionGroupName],
          classes[className].actions[actionGroupName]
        );
      }
      setCharacterActions(actions);
    } else {
      setCharacterActions(Object.assign({}, default_actions));
    }
  };

  const setCharacterFriendsOrRivalsHelper = (className) => {
    if (className !== "") {
      const friendsOrRivals = {};
      for (const fr of classes[className].friends_or_rivals) {
        friendsOrRivals[fr.name] = null;
      }
      setCharacterFriendsOrRivals(friendsOrRivals);
    } else {
      setCharacterFriendsOrRivals({});
    }
  };

  const setSelectedClassHelper = (className) => {
    setSelectedClass(className);
    setSelectedAbilities([]);
    setCharacterActionsHelper(className);
    setCharacterFriendsOrRivalsHelper(className);
  };

  // const transform = (obj) => {
  //   if (Array.isArray(obj)) {
  //     console.log("Array", obj);
  //     if (obj[0].name !== undefined) {
  //       const obj2 = {};
  //       for (const el of obj) {
  //         obj2[el.name] = transform(el);
  //       }
  //       return obj2;
  //     } else {
  //       const obj2 = [];
  //       for (const el of obj) {
  //         obj2.push(transform(el));
  //       }
  //       return obj2;
  //     }
  //   } else if (!["string", "number"].includes(typeof obj)) {
  //     console.log("Keyed", obj, typeof obj);
  //     const obj2 = {};
  //     for (const key of Object.keys(obj)) {
  //       obj2[key] = transform(obj[key]);
  //     }
  //     return obj2;
  //   } else {
  //     console.log("Other", obj);
  //     return obj;
  //   }
  // };

  return (
    <div>
      <RollModal
        showRollModal={showRollModal}
        setShowRollModal={setShowRollModal}
        rollType={rollType}
        rollArgs={rollArgs}
      ></RollModal>
      <div className="flex justify-center items-start align-top">
        <div
          className="outerDiv bg-bitdBlack z-10
                  flex fixed overflow-y-hidden overflow-x-auto w-full h-16 
                  lg:h-[90vh] sm:overflow-y-auto sm:overflow-x-hidden
                  sm:flex-col sm:static sm:h-full
                  lg:max-w-[275px] rounded shadow-lg"
        >
          <div className="w-full">
            <ul className="w-full">
              <li>
                <span
                  className="inline-flex cursor-pointer"
                  onClick={() => saveCurrentCharacter()}
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
              {savedElements(keyBase).map((value) => (
                <li className="inline-flex cursor-pointer" key={`li-${value}`}>
                  <svg
                    className="w-6 h-6 m-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => loadCharacter(value)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {value.characterName}
                  <svg
                    className="w-6 h-6 m-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => remove_character(value.characterName)}
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
          </div>
        </div>
        <div
          className="outerDiv
          characterCreatorGridParent
          characterCreatorDiv
          rounded overflow-hidden
          shadow-lg bg-bitdGray text-white
          lg:w-[70%]"
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
              value={characterName}
              onChange={(event) => setCharacterName(event.target.value)}
            ></input>
          </div>
          <div className="characterCreatorAlias characterCreatorDiv rounded w-full h-full">
            <input
              className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              id="characterAlias"
              type="text"
              placeholder="Character alias"
              value={characterAlias}
              onChange={(event) => setCharacterAlias(event.target.value)}
            ></input>
          </div>
          <div className="characterCreatorClassSelect characterCreatorDiv rounded w-full h-full">
            <select
              id="characterClass"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedClass}
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
            {selectedClass && (
              <h3 className="w-full h-full">
                {classes[selectedClass].description}
              </h3>
            )}
          </div>
          <div className="characterCreatorBackgroundSelect characterCreatorDiv rounded w-full h-full">
            <select
              id="characterBackground"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedBackground}
              onChange={(event) => setSelectedBackground(event.target.value)}
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
            {selectedBackground && (
              <h3 className="w-full h-full">
                {backgrounds[selectedBackground].description}
              </h3>
            )}
          </div>
          <div className="characterCreatorHeritageSelect characterCreatorDiv rounded w-full h-full">
            <select
              id="characterHeritage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedHeritage}
              onChange={(event) => setSelectedHeritage(event.target.value)}
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
            {selectedHeritage && (
              <h3 className="w-full h-full">
                {heritages[selectedHeritage].description}
              </h3>
            )}
          </div>
          <div className="characterCreatorViceSelect characterCreatorDiv rounded w-full h-full">
            <select
              id="characterVice"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedVice}
              onChange={(event) => setSelectedVice(event.target.value)}
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
            {selectedVice && (
              <h3 className="w-full h-full">
                {vices[selectedVice].description}
              </h3>
            )}
          </div>
          <div className="characterSwitchMenu">
            <div className="flex flex-row justify-evenly">
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen == 0 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(0)}
              >
                Special Abilities
              </h1>
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen == 1 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(1)}
              >
                {selectedClass &&
                  classes[selectedClass].friends_or_rivals_type + " "}
                Friends or Rivals
              </h1>
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen == 2 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(2)}
              >
                Character Inventory
              </h1>
            </div>
            {selectedMenuScreen == 0 && (
              <div className="characterCreatorDiv rounded characterSpecialAbilitiesGrid">
                <div></div>
                <div>
                  <h2>Name</h2>
                </div>
                <div>
                  <h2>Description</h2>
                </div>
                {selectedClass &&
                  Object.keys(classes[selectedClass].special_abilities).map(
                    (special_ability_name) => {
                      return [
                        <div key={`div-${special_ability_name}`}>
                          <input
                            id={`${special_ability_name}-checkbox`}
                            type="checkbox"
                            checked={selectedAbilities.includes(
                              special_ability_name
                            )}
                            onChange={() => {
                              const abilities = [...selectedAbilities];
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
                          ></input>
                        </div>,
                        <div>
                          <label
                            htmlFor={`${special_ability_name}-checkbox`}
                            className="text-gray-900 dark:text-gray-300 break-words"
                          >
                            {special_ability_name}
                          </label>
                        </div>,
                        <div>
                          <h2 className="break-words max-h-[20vh] overflow-x-hidden overflow-y-auto">
                            {
                              classes[selectedClass].special_abilities[
                                special_ability_name
                              ].ability
                            }
                          </h2>
                        </div>,
                      ];
                    }
                  )}
              </div>
            )}
            {selectedMenuScreen == 1 && (
              <div className="characterFriendsNRivals characterCreatorDiv rounded">
                <div></div>
                <div>
                  <h2>Name</h2>
                </div>
                <div>
                  <h2>Description</h2>
                </div>
                {selectedClass &&
                  Object.keys(classes[selectedClass].friends_or_rivals).map(
                    (acquaintance) => [
                      <div key={`div-${selectedClass}-${selectedClass}`}>
                        <input
                          type="radio"
                          className="top"
                          name={selectedClass + acquaintance + "type"}
                          id={selectedClass + acquaintance + "good"}
                          onChange={(event) => {
                            const current = { ...characterFriendsOrRivals };
                            current[acquaintance] = "Friend";
                            setCharacterFriendsOrRivals(current);
                          }}
                          defaultChecked={
                            characterFriendsOrRivals[acquaintance] == "Friend"
                          }
                        />
                        <input
                          type="radio"
                          className="none"
                          name={selectedClass + acquaintance + "type"}
                          id={selectedClass + acquaintance + "none"}
                          onChange={(event) => {
                            const current = { ...characterFriendsOrRivals };
                            current[acquaintance] = null;
                            setCharacterFriendsOrRivals(current);
                          }}
                          defaultChecked={
                            characterFriendsOrRivals[acquaintance] == null
                          }
                        />
                        <input
                          type="radio"
                          className="bot"
                          name={selectedClass + acquaintance + "type"}
                          id={selectedClass + acquaintance + "bad"}
                          onChange={(event) => {
                            const current = { ...characterFriendsOrRivals };
                            current[acquaintance] = "Rival";
                            setCharacterFriendsOrRivals(current);
                          }}
                          defaultChecked={
                            characterFriendsOrRivals[acquaintance] == "Rival"
                          }
                        />
                      </div>,
                      <div>
                        <h3 className="inline-block ml-5">{acquaintance}</h3>
                      </div>,
                      <div>
                        <h3 className="inline-block ml-5">
                          {
                            classes[selectedClass].friends_or_rivals[
                              acquaintance
                            ].description
                          }
                        </h3>
                      </div>,
                    ]
                  )}
              </div>
            )}
            {selectedMenuScreen == 2 && (
              <div className="characterCreatorDiv rounded ">
                <div className="characterInventoryGrid">
                  <div></div>
                  <div>
                    <h2>Current load:</h2>
                  </div>
                  <div>
                    <h2>
                      {characterInventory.reduce((p, item) => p + item.load, 0)}
                      /{selectedTargetLoad}
                    </h2>
                  </div>
                  <div>
                    <label
                      htmlFor="target-load"
                      className="mr-2 text-gray-900 dark:text-gray-300"
                    >
                      Target load:
                    </label>
                    <input
                      id="target-load"
                      type="number"
                      min={0}
                      step={1}
                      value={selectedTargetLoad}
                      onChange={(event) =>
                        setSelectedTargetLoad(event.target.value)
                      }
                      className="text-black"
                    ></input>
                  </div>
                </div>
                <hr className="my-10" />
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
                  {Object.values({
                    ...(selectedClass ? classes[selectedClass].items : {}),
                    ...standard_items,
                  }).map((item) => [
                    <div key={`div-${item.name}`}>
                      <input
                        id={`${item.name}-checkbox`}
                        type="checkbox"
                        value={JSON.stringify({
                          name: item.name,
                          load: item.load,
                        })}
                        checked={characterInventory.includes({
                          name: item.name,
                          load: item.load,
                        })}
                        onChange={(event) => {
                          let inv = [...characterInventory];
                          const v = JSON.parse(event.target.value);
                          if (inv.includes(v)) {
                            inv = inv.splice(inv.indexOf(v), 1);
                          } else {
                            inv.push(v);
                          }
                          setCharacterInventory(inv);
                        }}
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
            {characterActions &&
              Object.keys(characterActions).map((actionGroupName) => [
                <h3 key={`h3-${actionGroupName}`}>
                  <a
                    href="javascript:;"
                    onClick={(event) =>
                      showRollMenu("Save", {
                        actionGroupName,
                        characterActions,
                      })
                    }
                  >
                    {actionGroupName}
                  </a>
                </h3>,
                Object.keys(characterActions[actionGroupName]).map(
                  (actionName) => (
                    <div
                      key={selectedClass + actionName}
                      className="flex items-center mb-4"
                    >
                      <ActionSelector
                        selectedClass={selectedClass}
                        setCharacterActions={setCharacterActions}
                        characterActions={characterActions}
                        actionGroupName={actionGroupName}
                        actionName={actionName}
                        showRollMenu={showRollMenu}
                      />
                    </div>
                  )
                ),
              ])}
            <h3>
              Total:{" "}
              {Object.values(characterActions).reduce(
                (p, c) => p + Object.values(c).reduce((p2, c2) => p2 + c2, 0),
                0
              )}
            </h3>
            <button onClick={() => setCharacterActionsHelper(selectedClass)}>
              Reset
            </button>
          </div>
          <div className="div16 characterCreatorDiv">
            <h2 className="mb-5">Empty</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
