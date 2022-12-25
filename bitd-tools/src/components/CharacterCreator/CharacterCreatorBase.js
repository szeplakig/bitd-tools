import React from "react";
import "../../styles/CharacterCreator.css";
import HiddenInput from "./HiddenInput";
import example_char_portrait from "../../assets/images/example.png";
import savedElements from "../../util/savedElements";
import useSessionStoredState from "../../util/sessionState";
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
  const [showLoadInput, setShowLoadInput] = React.useState(false)

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
  let [characterName, setCharacterName] = useSessionStoredState(
    "characterName",
    ""
  );
  let [characterAlias, setCharacterAlias] = useSessionStoredState(
    "characterAlias",
    ""
  );
  let [selectedClass, setSelectedClass] = useSessionStoredState(
    "selectedClass",
    ""
  );
  let [selectedHeritage, setSelectedHeritage] = useSessionStoredState(
    "selectedHeritage",
    ""
  );
  let [selectedBackground, setSelectedBackground] = useSessionStoredState(
    "selectedBackground",
    ""
  );
  let [selectedVice, setSelectedVice] = useSessionStoredState(
    "selectedVice",
    ""
  );
  let [selectedAbilities, setSelectedAbilities] = useSessionStoredState(
    "selectedAbilities",
    []
  );
  let [characterFriendsOrRivals, setCharacterFriendsOrRivals] =
    useSessionStoredState("characterFriendsOrRivals", {});
  let [characterActions, setCharacterActions] = useSessionStoredState(
    "characterActions",
    Object.assign({}, default_actions)
  );
  let [characterInventory, setCharacterInventory] = useSessionStoredState(
    "characterInventory",
    []
  );
  let [selectedTargetLoad, setSelectedTargetLoad] = useSessionStoredState(
    "selectedTargetLoad",
    0
  );

  let [savedCharacters, setSavedCharacters] = useSessionStoredState(
    "savedCharacters",
    0
  );
  let [selectedMenuScreen, setSelectedMenuScreen] = useSessionStoredState(
    "selectedMenuScreen",
    0
  );

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
      if (data.characterName) setCharacterName(data.characterName);
      if (data.characterAlias) setCharacterAlias(data.characterAlias);
      if (data.selectedClass) setSelectedClass(data.selectedClass);
      if (data.selectedHeritage) setSelectedHeritage(data.selectedHeritage);
      if (data.selectedBackground)
        setSelectedBackground(data.selectedBackground);
      if (data.selectedVice) setSelectedVice(data.selectedVice);
      if (data.selectedAbilities) setSelectedAbilities(data.selectedAbilities);
      if (data.characterFriendsOrRivals)
        setCharacterFriendsOrRivals(data.characterFriendsOrRivals);
      if (data.characterActions) setCharacterActions(data.characterActions);
      if (data.characterInventory)
        setCharacterInventory(data.characterInventory);
      if (data.selectedTargetLoad)
        setSelectedTargetLoad(data.selectedTargetLoad);
    }
  };

  const remove_character = (characterName, store = localStorage) => {
    if (window.confirm(`Do you really want to remove ${characterName}`)) {
      remove(keyBase + characterName, store);
      setSavedCharacters(savedCount(keyBase, store));
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
      for (const fr in classes[className].friends_or_rivals) {
        friendsOrRivals[fr] = null;
      }
      setCharacterFriendsOrRivals(friendsOrRivals);
    } else {
      setCharacterFriendsOrRivals({});
    }
  };

  let currentItems = { ...standard_items };

  const setSelectedClassHelper = (className) => {
    setSelectedClass(className);
    setSelectedAbilities([]);
    setCharacterActionsHelper(className);
    setCharacterFriendsOrRivalsHelper(className);
    currentItems = {
      ...(className ? classes[className].items : {}),
      ...standard_items,
    };
  };

  return (
    <div>
      <RollModal
        showRollModal={showRollModal}
        setShowRollModal={setShowRollModal}
        rollType={rollType}
        rollArgs={rollArgs}
      ></RollModal>
      <div className="flex justify-center items-start align-top flex-col sm:flex-row">
        <div
          className="m-[5px] p-[5px] bg-bitdBlack
                  flex overflow-y-scroll overflow-x-auto w-full max-h-[200px]
                  lg:h-[90vh] sm:overflow-y-auto sm:overflow-x-hidden
                  sm:flex-col sm:static sm:h-[90vh]
                  lg:max-w-[275px] rounded shadow-lg"
        >
          <div className="w-full">
            <ul className="w-full flex flex-col">
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
              {savedElements(keyBase, localStorage).map((value) => (
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
          className="m-[5px] p-[5px] 
          md:grid md:grid-cols-10 md:row-auto md:gap-[10px]
          characterCreatorDiv
          rounded overflow-hidden
          shadow-lg bg-bitdGray text-white
          lg:w-[70%]"
        >
          <div
            className="min-h-[4ovh] overflow-hidden 
                        md:row-start-1 md:col-start-1 md:row-end-5 md:col-end-3
                        characterCreatorDiv rounded"
          >
            <img src={example_char_portrait}></img>
          </div>
          <div
            className="md:col-start-3 md:col-end-7
                        characterCreatorDiv rounded w-full h-full"
          >
            <input
              className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              id="characterName"
              type="text"
              placeholder="Character name"
              value={characterName}
              onChange={(event) => setCharacterName(event.target.value)}
            ></input>
          </div>
          <div className="md:col-start-7 md:col-end-11 overflow-auto characterCreatorDiv rounded w-full h-full">
            <input
              className="shadow appearance-none border rounded w-full h-full py-2 px-3 text-white-bold focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              id="characterAlias"
              type="text"
              placeholder="Character alias"
              value={characterAlias}
              onChange={(event) => setCharacterAlias(event.target.value)}
            ></input>
          </div>
          <div
            className="md:row-start-2 md:col-start-3 md:row-end-3 md:col-end-5 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            <select
              id="characterClass"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedClass}
              onChange={(event) => {
                setSelectedClassHelper(event.target.value);
              }}
            >
              <option value="">Class</option>
              {Object.keys(classes).map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="md:row-start-2 md:col-start-5 md:row-end-3 md:col-end-11 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            {selectedClass && (
              <h3 className="w-full h-full">
                {classes[selectedClass].description}
              </h3>
            )}
          </div>
          <div
            className="md:row-start-3 md:col-start-3 md:row-end-4 md:col-end-5 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            <select
              id="characterBackground"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedBackground}
              onChange={(event) => setSelectedBackground(event.target.value)}
            >
              <option value="">Background</option>
              {Object.keys(backgrounds).map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="md:row-start-3 md:col-start-5 md:row-end-4 md:col-end-11 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            {selectedBackground && (
              <h3 className="w-full h-full">
                {backgrounds[selectedBackground].description}
              </h3>
            )}
          </div>
          <div
            className="md:row-start-4 md:col-start-3 md:row-end-5 md:col-end-5 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            <select
              id="characterHeritage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedHeritage}
              onChange={(event) => setSelectedHeritage(event.target.value)}
            >
              <option value="">Heritage</option>
              {Object.keys(heritages).map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="md:row-start-4 md:col-start-5 md:row-end-5 md:col-end-11 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            {selectedHeritage && (
              <h3 className="w-full h-full">
                {heritages[selectedHeritage].description}
              </h3>
            )}
          </div>
          <div
            className="md:row-start-5 md:col-start-3 md:row-end-6 md:col-end-5 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            <select
              id="characterVice"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
              value={selectedVice}
              onChange={(event) => setSelectedVice(event.target.value)}
            >
              <option value="">Vice</option>
              {Object.keys(vices).map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="md:row-start-5 md:col-start-5 md:row-end-6 md:col-end-11 overflow-auto
                        characterCreatorDiv rounded w-full h-full"
          >
            {selectedVice && (
              <h3 className="w-full h-full">
                {vices[selectedVice].description}
              </h3>
            )}
          </div>
          <div className="md:row-start-6 md:col-start-1 md:row-end-7 md:col-end-8 overflow-auto">
            <div className="flex flex-row justify-evenly">
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen === 0 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(0)}
              >
                Special Abilities
              </h1>
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen === 1 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(1)}
              >
                {selectedClass &&
                  classes[selectedClass].friends_or_rivals_type + " "}
                Friends or Rivals
              </h1>
              <h1
                className={`mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black ${
                  selectedMenuScreen === 2 ? "bg-bitdDarkGray" : "bg-bitdBlack"
                }`}
                onClick={() => setSelectedMenuScreen(2)}
              >
                Character Inventory
              </h1>
            </div>
            {selectedMenuScreen === 0 && (
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
                        <div key={`div-0-${special_ability_name}`}>
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
                        <div key={`div-1-${special_ability_name}`}>
                          <label
                            htmlFor={`${special_ability_name}-checkbox`}
                            className="text-grey-900 break-words"
                          >
                            {special_ability_name}
                          </label>
                        </div>,
                        <div key={`div-3-${special_ability_name}`}>
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
            {selectedMenuScreen === 1 && (
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
                      <div key={`div-0-${selectedClass}-${selectedClass}`}>
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
                            characterFriendsOrRivals[acquaintance] === "Friend"
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
                            characterFriendsOrRivals[acquaintance] === "Rival"
                          }
                        />
                      </div>,
                      <div key={`div-1-${selectedClass}-${selectedClass}`}>
                        <h3 className="inline-block ml-5">{acquaintance}</h3>
                      </div>,
                      <div key={`div-2-${selectedClass}-${selectedClass}`}>
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
            {selectedMenuScreen === 2 && (
              <div className="characterCreatorDiv rounded ">
                <div className="characterInventoryGrid">
                  <div></div>
                  <div></div>
                  <div>
                    <h2>Load:</h2>
                  </div>
                  <div>
                    <h2>
                      {characterInventory.reduce(
                        (p, itemName) =>
                          p +
                          (currentItems[itemName] !== undefined
                            ? currentItems[itemName].load
                            : 0),
                        0
                      )}
                      /<HiddenInput
                      show={showLoadInput}
                      value={selectedTargetLoad}
                      handleChange={(event) =>
                        {
                          if (event.target.value !== ""){
                            setSelectedTargetLoad(event.target.value);
                          }
                        }
                      }
                      handleBlur={() => setShowLoadInput(false)}
                      handleClick={() => setShowLoadInput(true)}
                    ></HiddenInput>
                    </h2>
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
                  {Object.values(currentItems).map((item) => [
                    <div key={`div-0-${item.name}`}>
                      <input
                        id={`${item.name}-checkbox`}
                        type="checkbox"
                        value={item.name}
                        checked={characterInventory.includes(item.name)}
                        onChange={(event) => {
                          let inv = [...characterInventory];
                          const v = event.target.value;
                          if (inv.includes(v)) {
                            inv.splice(inv.indexOf(v), 1);
                          } else {
                            inv.push(v);
                          }
                          setCharacterInventory(inv);
                        }}
                        className="w-[20px] h-[20px] text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>,
                    <div key={`div-1-${item.name}`}>{item.name}</div>,
                    <div key={`div-2-${item.name}`}>{item.load}</div>,
                    <div key={`div-3-${item.name}`}>{item.description}</div>,
                  ])}
                </div>
              </div>
            )}
          </div>
          <div
            className="md:row-start-6 md:col-start-8 md:row-end-7 md:col-end-11 overflow-auto
                        characterCreatorDiv rounded"
          >
            <h1 className="mb-5">Character Actions</h1>
            {characterActions &&
              Object.keys(characterActions).map((actionGroupName) => [
                <h3 key={`h3-${actionGroupName}`}>
                  <span
                    className="cursor-pointer"
                    onClick={(event) =>
                      showRollMenu("Save", {
                        actionGroupName,
                        characterActions,
                      })
                    }
                  >
                    {actionGroupName}
                  </span>
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
              {characterActions &&
                Object.values(characterActions).reduce(
                  (p, c) => p + Object.values(c).reduce((p2, c2) => p2 + c2, 0),
                  0
                )}
            </h3>
            <button onClick={() => setCharacterActionsHelper(selectedClass)}>
              Reset
            </button>
          </div>
          <div
            className="md:row-start-5 md:col-start-1 md:row-end-6 md:col-end-3
                        h-[8vh] overflow-auto
                        characterCreatorDiv"
          >
            <h2 className="mb-5">Empty</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
