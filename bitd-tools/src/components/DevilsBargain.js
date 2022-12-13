import React from 'react';
import devils_bargains_data from "../data/devils_bargains_data";
import rollArray from "../util/rollArray";
import { GiPerspectiveDiceSixFacesSix as DiceIcon } from "react-icons/gi";
import {
  AiOutlineUnlock as UnlockedIcon,
  AiFillLock as LockedIcon,
} from "react-icons/ai";

const bargainTypeList = Array.from(new Set(devils_bargains_data.map(e => e.type)));

const DevilsBargain = () => {
    const [selectedBargain, setSelectedBargain] = React.useState(rollArray(devils_bargains_data));

    const [bargainType, setBargainType] = React.useState();
    const [bargainTypeLock, setBargainTypeLock] = React.useState(false);

    React.useEffect(() => {
        setBargainType(selectedBargain.type);
    }, [selectedBargain]);

    const rollBargain = () => {
        if (bargainTypeLock) {
            rollBargainType(bargainType);
            return;
        }
        setSelectedBargain(rollArray(devils_bargains_data));
    }

    const rollBargainType = (type) => {
        const bargainsOfType = devils_bargains_data.filter(e => e.type === type);
        setSelectedBargain(rollArray(bargainsOfType));
    }

    return (
        <div className="px-4 sm:px-[30%]
                        flex items-center justify-center w-full">
            <form onSubmit={(e) => e.target.preventDefault()} className="">
                <button
                    type="button"
                    className="rounded shadow-lg 
                    bg-bitdDarkGray text-bitdLightGray
                    hover:text-bitdOrange
                    transition-all duration-200 ease-linear
                    py-2 w-[95%] my-4 mx-2
                    flex justify-center items-center"
                    onClick={() => {
                        rollBargain();
                    }}
                >
                    Roll
                    <DiceIcon className="ml-4" size="20"/>
                </button>

                <div
                    className="rounded overflow-hidden
                    shadow-lg bg-bitdGray text-white
                    my-4 mx-2 min-w-[40vw]"
                >
                    <div className="px-2 py-1 bg-bitdBlack w-full">
                        <div className="flex justify-between items-center">
                            <label htmlFor="bargainTypeSelect" className="font-bold">
                                {selectedBargain.name}
                            </label>
                            <select
                                id="bargainTypeSelect"
                                className="w-fit cursor-pointer ml-3 bg-bitdBlack"
                                value={bargainType}
                                onChange={(e) => {
                                    if (bargainTypeLock) {
                                        setBargainTypeLock(false);
                                    }
                                    if (e.target.value === "") {
                                        return;
                                    }
                                    setBargainType(e.target.value);
                                    rollBargainType(e.target.value);
                                }}
                            >
                                <option key=""></option>
                                {bargainTypeList.map(e => (
                                    <option key={e}>{e}</option> 
                                ))}
                            </select>
                            <div
                                className=" p-2 text-bitdLightGray
                                hover:text-bitdOrange ml-2
                                transition-all duration-200 ease-linear
                                cursor-pointer"
                            >
                                {bargainTypeLock ? (
                                    <LockedIcon size="18" onClick={() => {setBargainTypeLock(false)}}/>
                                ) : (
                                        <UnlockedIcon size="18" onClick={() => {setBargainTypeLock(true)}}/>
                                    )}
                            </div>
                        </div>
                    </div>
                    <p className="px-6 py-4">{selectedBargain.desc}</p>
                </div>
            </form>
        </div>
    );
};

export default DevilsBargain;
