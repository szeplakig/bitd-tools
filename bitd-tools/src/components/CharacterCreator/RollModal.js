import React, { useState } from "react";
import rollD from "../../util/roll";
import save from "../../util/save";

export default function RollModal({
  showRollModal,
  setShowRollModal,
  rollType,
  rollArgs,
}) {
  const [selectedPosition, setSelectedPosition] = useState("Risky");
  const [selectedEffect, setSelectedEffect] = useState("Standard");
  const [hasAssistance, setHasAssistance] = useState(false);
  const [hasPushOrBargain, setHasPushOrBargain] = useState(false);
  const [otherBonus, setOtherBonus] = useState(0);

  const position_levels = {
    Risky: {
      name: "Risky",
      levels: [
        { name: "Critical", description: "You do it with increased effect." },
        { name: "6", description: "You do it." },
        {
          name: "4/5",
          description:
            "You do it, but there’s a consequence: you suffer harm, a complication occurs, you have reduced effect, you end up in a desperate position.",
        },
        {
          name: "1-3",
          description:
            "Things go badly. You suffer harm, a complication occurs, you end up in a desperate position, you lose this opportunity.",
        },
      ],
    },
    Controlled: {
      name: "Controlled",
      levels: [
        { name: "Critical", description: "You do it with increased effect." },
        { name: "6", description: "You do it." },
        {
          name: "4/5",
          description:
            "You hesitate. Withdraw and try a different approach, or else do it with a minor consequence: a minor complication occurs, you have reduced effect, you suffer lesser harm, you end up in a risky position.",
        },
        {
          name: "1-3",
          description:
            "You falter. Press on by seizing a risky opportunity, or withdraw and try a different approach.",
        },
      ],
    },
    Desperate: {
      name: "Desperate",
      levels: [
        { name: "Critical", description: "You do it with increased effect." },
        { name: "6", description: "You do it." },
        {
          name: "4/5",
          description:
            "You do it, but there’s a consequence: you suffer severe harm, a serious complication occurs, you have reduced effect.",
        },
        {
          name: "1-3",
          description:
            "It’s the worst outcome. You suffer severe harm, a serious complication occurs, you lose this opportunity for action.",
        },
      ],
    },
  };
  const effect_levels = ["Standard", "Great", "Limited"];
  let character_action_dice = 0;
  if (rollType === "Action") {
    const { character_actions, action_name, action_group_name } = rollArgs;
    character_action_dice = character_actions[action_group_name][action_name];
  } else if (rollType === "Save") {
    const { character_actions, action_group_name } = rollArgs;
    character_action_dice = Object.values(
      character_actions[action_group_name]
    ).reduce((p, c) => (c > 0 ? p + 1 : p), 0);
  }
  const resetState = () => {
    setSelectedPosition("Risky");
    setSelectedEffect("Standard");
    setHasAssistance(false);
    setHasPushOrBargain(false);
    setOtherBonus(0);
  };
  const doRoll = (dice_count, position, effect) => {
    let rolls = [];
    for (let i = 0; i < dice_count; i++) {
      rolls.push(rollD());
    }
    const rollObj = {
      rollType,
      position,
      effect,
      dice_count,
      rolls,
      min_roll: Math.min(...rolls),
      max_roll: Math.max(...rolls),
      is_critical: rolls.filter((v) => v == 6).length >= 2,
      created_at: Date.now(),
    };

    window.notify(
      <div>
        <h1>
          {rollObj.rollType} roll:{" "}
          <span
            className={
              {
                Risky: "text-yellow-300",
                Desperate: "text-red-500",
                Controlled: "text-green-600",
              }[rollObj.position]
            }
          >
            {rollObj.position}
          </span>
          /
          <span
            className={
              {
                Standard: "text-yellow-300",
                Limited: "text-red-500",
                Great: "text-green-600",
              }[rollObj.effect]
            }
          >
            {rollObj.effect}
          </span>
        </h1>
        {rollObj.is_critical && <h1 className="text-red-500">Critical!</h1>}
        <p>
          Rolls:&nbsp;
          {rollObj.rolls.map((r, i, a) => [
            <span
              className={
                r < 4
                  ? "text-red-500"
                  : r < 6
                  ? "text-yellow-300"
                  : "text-green-600"
              }
            >
              {r}
            </span>,
            i < a.length - 1 && ",",
          ])}
        </p>
        <p>
          Min:&nbsp;{rollObj.min_roll}, Max:&nbsp;{rollObj.max_roll}
        </p>
      </div>
    );
    // save("rolls_" + rollObj.created_at, rollObj);
  };
  return (
    <>
      {showRollModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowRollModal(false)}
          >
            <div className="relative w-auto min-w-[15vw] my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bitdGray outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-bitdBlack rounded-t">
                  <h3 className="text-3xl font-semibold">{rollType} roll</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="assistance-checkbox"
                      className="mr-2 text-gray-900 dark:text-gray-300"
                    >
                      Assistance:
                    </label>
                    <input
                      id="assistance-checkbox"
                      type="checkbox"
                      checked={hasAssistance}
                      onChange={() => setHasAssistance(!hasAssistance)}
                    ></input>
                  </div>
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="push-or-bargain-checkbox"
                      className="mr-2 text-gray-900 dark:text-gray-300"
                    >
                      Push yourself or Devil's bargain:
                    </label>
                    <input
                      id="push-or-bargain-checkbox"
                      type="checkbox"
                      checked={hasPushOrBargain}
                      onChange={() => setHasPushOrBargain(!hasPushOrBargain)}
                    ></input>
                  </div>
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="other-bonus-number"
                      className="mr-2 text-gray-900 dark:text-gray-300"
                    >
                      Other Bonus:
                    </label>
                    <input
                      id="other-bonus-number"
                      type="number"
                      step={1}
                      value={otherBonus}
                      onChange={(event) =>
                        setOtherBonus(parseInt(event.target.value))
                      }
                      className="text-black"
                    ></input>
                  </div>
                  <hr className="mb-3" />
                  <div>
                    <label htmlFor="position">Position:</label>
                    <select
                      id="position"
                      name="position"
                      className="shadow appearance-none border w-full max-h-[50px] rounded py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
                      value={selectedPosition}
                      onChange={(event) =>
                        setSelectedPosition(event.target.value)
                      }
                    >
                      {Object.values(position_levels).map((position) => (
                        <option value={position.name}>{position.name}</option>
                      ))}
                    </select>
                  </div>
                  <hr className="mt-5 mb-3" />
                  <div>
                    <label htmlFor="effect">Effect:</label>
                    <select
                      id="effect"
                      name="effect"
                      className="shadow appearance-none border w-full max-h-[50px] rounded py-2 px-3 text-white focus:outline-none focus:shadow-outline hover:text-bitdOrange bg-bitdDarkGray"
                      value={selectedEffect}
                      onChange={(event) =>
                        setSelectedEffect(event.target.value)
                      }
                    >
                      {effect_levels.map((effect) => (
                        <option value={effect}>{effect}</option>
                      ))}
                    </select>
                  </div>
                  <hr className="mt-5 mb-2" />
                  <div>
                    Dice:{" "}
                    {(hasAssistance ? 1 : 0) +
                      (hasPushOrBargain ? 1 : 0) +
                      character_action_dice +
                      otherBonus}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid bg-bitdBlack rounded-b">
                  <button
                    className="bg-bitdGray text-red-400 hover:bg-red-600 hover:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      resetState();
                      setShowRollModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-bitdGray text-emerald-400 hover:bg-emerald-600 hover:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      const dc =
                        (hasAssistance ? 1 : 0) +
                        (hasPushOrBargain ? 1 : 0) +
                        character_action_dice +
                        otherBonus;
                      if (dc > 0) {
                        doRoll(dc, selectedPosition, selectedEffect);
                        resetState();
                        setShowRollModal(false);
                      } else if (dc == 0) {
                        doRoll(2, selectedPosition, selectedEffect);
                        resetState();
                        setShowRollModal(false);
                      } else {
                        window.error("Cannot roll less 0 dice!");
                      }
                    }}
                  >
                    Roll
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
