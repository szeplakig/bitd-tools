import React, { useState } from "react";
import "../styles/CharacterCreator.css";
import example_char_portrait from "../assets/images/example.png";
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
  let [character_name, set_character_name] = useState("");
  let [character_alias, set_character_alias] = useState("");
  let [selected_class, set_selected_class] = useState("");
  let [selected_heritage, set_selected_heritage] = useState("");
  let [selected_background, set_selected_background] = useState("");
  let [selected_vice, set_selected_vice] = useState("");
  let [selected_abilities, set_selected_abilities] = useState([]);
  let [character_dots, set_character_dots] = useState({
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
  });

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
          onChange={(event) => set_selected_class(event.target.value)}
        >
          <option value="">Choose a Class</option>
          {Object.keys(classes).map((key) => {
            return <option value={key}>{key}</option>;
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
            return <option value={key}>{key}</option>;
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
            return <option value={key}>{key}</option>;
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
            return <option value={key}>{key}</option>;
          })}
        </select>
      </div>
      <div className="characterCreatorViceInfo characterCreatorDiv">
        {selected_vice && <h3>{vices[selected_vice].description}</h3>}
      </div>
      <div className="characterCreatorSpecialAbilities characterCreatorDiv">
        characterCreatorSpecialAbilities
      </div>
      <div className="characterCreatorDots characterCreatorDiv">
        characterCreatorDots
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
