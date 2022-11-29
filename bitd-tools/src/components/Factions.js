import faction_data from "../data/faction_data";

import clock4 from "../assets/images/4b0.png";
import clock6 from "../assets/images/6b0.png";
import clock8 from "../assets/images/8b0.png";
import clock12 from "../assets/images/12b00.png";

import React from "react";

const tiers = ["0", "I", "II", "III", "IV", "V"];

const Factions = () => {
  const [selectedFaction, setSelectedFaction] = React.useState(0);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center max-w-[890px] lg:max-w-full">
        <ul
          className="bg-bitdBlack z-10
                            flex fixed overflow-y-hidden overflow-x-auto w-full h-16 
                            sm:ml-4 sm:w-[30%] sm:my-4 sm:mx-2
                            lg:h-[90vh] sm:overflow-y-auto sm:overflow-x-hidden
                            sm:flex-col sm:static sm:h-full
                            lg:max-w-[275px]"
        >
          {faction_data.map((faction, ind) => (
            <li
              key={faction.name}
              className={`inline-block px-4 py-2 whitespace-nowrap
                                            sm:block sm:whitespace-normal
                                            cursor-pointer
                                            hover:text-bitdOrange hover:bg-bitdDarkGray
                                            transition-all duration-200 ease-linear
                                            ${
                                              ind === selectedFaction
                                                ? "bg-bitdDarkGray"
                                                : ""
                                            }`}
              onClick={() => {
                setSelectedFaction(ind);
              }}
            >
              {faction.name}
            </li>
          ))}
        </ul>
        <div
          className="rounded overflow-hidden
                                shadow-lg bg-bitdGray text-white
                                my-4 mx-2 w-[70%] mt-16 sm:mt-2"
        >
          <div className="flex justify-between bg-bitdBlack text-lg font-bold py-2 px-4 uppercase">
            <span>{faction_data[selectedFaction].name}</span>
            <span>{`Tier ${tiers[faction_data[selectedFaction].tier]}`}</span>
          </div>
          <div className="py-2 px-4">
            <p className="italic">{faction_data[selectedFaction].desc}</p>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <div>
              {faction_data[selectedFaction].clocks.map((clock) => (
                <Clock key={clock.name} name={clock.name} size={clock.size} />
              ))}
            </div>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <p>
              <span className="font-bold">Turf: </span>
              {faction_data[selectedFaction].turf}
            </p>
            <p>
              <span className="font-bold">Hold: </span>
              {faction_data[selectedFaction].hold}
            </p>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <p>
              <span className="font-bold">Quirks: </span>
              {faction_data[selectedFaction].quirks}
            </p>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <span className="font-bold">NPCs:</span>
            {faction_data[selectedFaction].npc_detail && (
              <span className="italic">
                {faction_data[selectedFaction].npc_detail}
              </span>
            )}
            <ul className="list-disc ml-10">
              {faction_data[selectedFaction].npcs.map((npc) => (
                <li key={npc}>{npc}</li>
              ))}
            </ul>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <span className="font-bold">Assets:</span>
            <ul className="list-disc ml-10">
              {faction_data[selectedFaction].assets.map((asset) => (
                <li key={asset}>{asset}</li>
              ))}
            </ul>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <span className="font-bold">Allies:</span>
            <ul className="list-disc ml-10">
              {faction_data[selectedFaction].allies.map((ally) => (
                <li key={ally}>{ally}</li>
              ))}
            </ul>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <span className="font-bold">Enemies:</span>
            <ul className="list-disc ml-10">
              {faction_data[selectedFaction].enemies.map((enemy) => (
                <li key={enemy}>{enemy}</li>
              ))}
            </ul>

            <hr className="border-t border-bitdLightGray my-2 mx-2" />

            <p>
              <span className="font-bold">Situation: </span>
              {faction_data[selectedFaction].situation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Clock = ({ name, size }) => {
  let imgSrc;

  if (size == 4) {
    imgSrc = clock4;
  }
  if (size == 6) {
    imgSrc = clock6;
  }
  if (size == 8) {
    imgSrc = clock8;
  }
  if (size == 12) {
    imgSrc = clock12;
  }

  return (
    <div className="flex justify-between md:mx-[10vw] items-center">
      <span className="inline-block">{name}</span>
      <img className="inline-block w-[40px] invert z-0" src={imgSrc} />
    </div>
  );
};

export default Factions;
