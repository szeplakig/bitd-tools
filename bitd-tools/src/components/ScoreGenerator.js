import score_generator_data from "../data/score_generator_data";

import {
  AiOutlineUnlock as UnlockedIcon,
  AiFillLock as LockedIcon,
} from "react-icons/ai";
import { GiPerspectiveDiceSixFacesSix as DiceIcon } from "react-icons/gi";

import rollArray from "../util/rollArray";

import React from "react";

const rollClientTarget = (type) => {
  const list = score_generator_data.client_target.find((e) => e.type === type);

  if (!list) {
    return;
  }

  const el = rollArray(list.list);

  if (el.includes("(roll again)")) {
    const allClientTarget = score_generator_data.client_target
      .map((e) => {
        return e.list;
      })
      .flat(1)
      .filter((e) => {
        return !e.includes("(roll again)");
      });

    return el.replace("(roll again)", `(${rollArray(allClientTarget)})`);
  }
  return el;
};

const ScoreGenerator = () => {
  const [clientTargetType, setClientTargetType] = React.useState("");
  const [clientTargetTypeLock, setClientTargetTypeLock] = React.useState(false);
  const [clientTarget, setClientTarget] = React.useState("");
  const [clientTargetLock, setClientTargetLock] = React.useState(false);

  const [workType, setWorkType] = React.useState("");
  const [workTypeLock, setWorkTypeLock] = React.useState(false);
  const [work, setWork] = React.useState("");
  const [workLock, setWorkLock] = React.useState(false);

  const [twist, setTwist] = React.useState("");
  const [twistLock, setTwistLock] = React.useState(false);
  const [connection, setConnection] = React.useState("");
  const [connectionLock, setConnectionLock] = React.useState(false);

  React.useEffect(() => {
    setClientTarget(rollClientTarget(clientTargetType));
    setClientTargetLock(false);
  }, [clientTargetType]);

  React.useEffect(() => {
    const el = score_generator_data.work.find((e) => e.type === workType);

    if (!el) {
      return;
    }
    setWork(rollArray(el.list));
    setWorkLock(false);
  }, [workType]);

  const handleRollClick = () => {
    if (!clientTargetTypeLock) {
      setClientTargetType(
        rollArray(score_generator_data.client_target.map((e) => e.type))
      );
    } else if (!clientTargetLock) {
      setClientTarget(rollClientTarget(clientTargetType));
    }

    if (!workTypeLock) {
      setWorkType(rollArray(score_generator_data.work.map((e) => e.type)));
    } else if (!workLock) {
      const el = score_generator_data.work.find((e) => e.type === workType);
      setWork(rollArray(el.list));
    }

    setTwist(rollArray(score_generator_data.twist));
    setConnection(rollArray(score_generator_data.connection));
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={(e) => e.target.preventDefault()} className="">
        <Card
          header={
            <div className="flex items-center justify-center">
              <label htmlFor="clientTargetType" className="font-bold">
                Client / Target
              </label>
              <select
                id="clientTargetType"
                className="cursor-pointer ml-3 bg-bitdBlack"
                value={clientTargetType}
                onChange={(e) => {
                  if (clientTargetTypeLock) {
                    return;
                  }
                  if (e.target.value === "") {
                    return;
                  }
                  setClientTargetType(e.target.value);
                }}
              >
                <option key=""></option>
                {score_generator_data.client_target.map((e) => (
                  <option key={e.type}>{e.type}</option>
                ))}
              </select>
              <LockButton
                locked={clientTargetTypeLock}
                setLocked={setClientTargetTypeLock}
              />
              <DiceButton
                onClick={() => {
                  if (clientTargetTypeLock) {
                    return;
                  }
                  setClientTargetType(
                    rollArray(
                      score_generator_data.client_target.map((e) => e.type)
                    )
                  );
                }}
              />
            </div>
          }
          content={
            <div>
              <div className="mb-2 bg-bitdDarkGray flex items-center justify-center">
                <LockButton
                  locked={clientTargetLock}
                  setLocked={setClientTargetLock}
                />
                <DiceButton
                  onClick={() => {
                    if (clientTargetLock) {
                      return;
                    }
                    setClientTarget(rollClientTarget(clientTargetType));
                  }}
                />
              </div>
              <p className="block">{clientTarget || "-"}</p>
            </div>
          }
        />

        <Card
          header={
            <div className="flex items-center justify-center">
              <label htmlFor="workType" className="font-bold">
                Work
              </label>
              <select
                id="workType"
                className="cursor-pointer ml-3 bg-bitdBlack"
                value={workType}
                onChange={(e) => {
                  if (workTypeLock) {
                    return;
                  }
                  if (e.target.value === "") {
                    return;
                  }
                  setWorkType(e.target.value);
                }}
              >
                <option key=""></option>
                {score_generator_data.work.map((e) => (
                  <option key={e.type}>{e.type}</option>
                ))}
              </select>
              <LockButton locked={workTypeLock} setLocked={setWorkTypeLock} />
              <DiceButton
                onClick={() => {
                  if (workTypeLock) {
                    return;
                  }
                  setWorkType(
                    rollArray(score_generator_data.work.map((e) => e.type))
                  );
                }}
              />
            </div>
          }
          content={
            <div>
              <div className="mb-2 bg-bitdDarkGray flex items-center justify-center">
                <LockButton locked={workLock} setLocked={setWorkLock} />
                <DiceButton
                  onClick={() => {
                    if (workLock) {
                      return;
                    }
                    const el = score_generator_data.work.find(
                      (e) => e.type === workType
                    );

                    if (!el) {
                      return;
                    }
                    setWork(rollArray(el.list));
                  }}
                />
              </div>
              <p className="block">{work || "-"}</p>
            </div>
          }
        />

        <Card
          header={
            <div className="flex items-center justify-center">
              <span className="font-bold">Twist</span>
              <LockButton locked={twistLock} setLocked={setTwistLock} />
              <DiceButton
                onClick={() => {
                  if (twistLock) {
                    return;
                  }
                  setTwist(rollArray(score_generator_data.twist));
                }}
              />
            </div>
          }
          content={
            <div>
              <p className="block">{twist || "-"}</p>
            </div>
          }
        />

        <Card
          header={
            <div className="flex items-center justify-center">
              <span className="font-bold">Connection</span>
              <LockButton
                locked={connectionLock}
                setLocked={setConnectionLock}
              />
              <DiceButton
                onClick={() => {
                  if (connectionLock) {
                    return;
                  }
                  setConnection(rollArray(score_generator_data.connection));
                }}
              />
            </div>
          }
          content={
            <div>
              <p className="block">{connection || "-"}</p>
            </div>
          }
        />

        <button
          className="rounded shadow-lg 
                                bg-bitdDarkGray text-bitdLightGray
                                hover:text-bitdOrange
                                transition-all duration-200 ease-linear
                                py-2 w-[95%] my-4 mx-2
                                flex justify-center items-center"
          onClick={handleRollClick}
          type="button"
        >
          Roll
          <DiceIcon className="ml-4" size="20" />
        </button>
      </form>
    </div>
  );
};

const Card = ({ header, content }) => {
  return (
    <div
      className=" rounded overflow-hidden 
                        shadow-lg bg-bitdGray text-white
                        my-4 mx-2 min-w-[40vw]"
    >
      <div className="px-2 py-1 bg-bitdBlack w-full">{header}</div>
      <div className="px-6 py-4">{content}</div>
    </div>
  );
};

const LockButton = ({ locked, setLocked }) => {
  return (
    <div
      className=" p-2 text-bitdLightGray
                        hover:text-bitdOrange ml-2
                        transition-all duration-200 ease-linear
                        cursor-pointer"
    >
      {locked ? (
        <LockedIcon size="18" onClick={() => setLocked(false)} />
      ) : (
        <UnlockedIcon size="18" onClick={() => setLocked(true)} />
      )}
    </div>
  );
};

const DiceButton = ({ onClick }) => {
  return (
    <div
      className="p-2 text-bitdLightGray
                        hover:text-bitdOrange
                        transition-all duration-200 ease-linear
                        cursor-pointer"
      onClick={onClick}
    >
      <DiceIcon />
    </div>
  );
};

export default ScoreGenerator;
