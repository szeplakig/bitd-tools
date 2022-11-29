import React from "react";
import {
  HiUserGroup as FactionIcon,
  HiUser as CharacterIcon,
} from "react-icons/hi";
import { GiTakeMyMoney as ScoreIcon } from "react-icons/gi";

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div
      className="fixed m-0 flex
            top-0 left-0 w-screen h-16 flex-row
            sm:top-0 sm:left-0 sm:h-screen sm:w-16 sm:flex-col
            bg-bitdBlack text-white shadow-lg"
    >
      <SideBarIcon
        icon={<CharacterIcon size="30" />}
        text="Character Creator"
        onClick={() => setCurrentPage(1)}
      />
      <SideBarIcon
        icon={<FactionIcon size="30" />}
        text="Factions"
        onClick={() => setCurrentPage(2)}
      />
      <SideBarIcon
        icon={<ScoreIcon size="30" />}
        text="Score Generator"
        onClick={() => setCurrentPage(3)}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip", onClick = () => {} }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
