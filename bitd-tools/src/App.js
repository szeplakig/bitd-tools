import React from "react";
import CharacterCreatorBase from "./components/CharacterCreator/CharacterCreatorBase";
import Factions from "./components/Factions";
import Homepage from "./components/Homepage";
import ScoreGenerator from "./components/ScoreGenerator";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pages = [
  <Homepage />,
  <CharacterCreatorBase />,
  <Factions />,
  <ScoreGenerator />,
];

function App() {
  const toastConfig = {
    position: "bottom-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
  };
  window.notify = (message) => {
    toast(message, toastConfig);
  };
  window.error = (message) => {
    toast.error(message, toastConfig);
  };
  const [openTab, setOpenTab] = React.useState(0);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-bitdDarkGray to-bitdGray text-white">
      <Sidebar setCurrentPage={setOpenTab} />
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar={true}
        draggable
        theme="dark"
      />
      <div className="sm:pl-20 sm:pt-2 w-full pt-16">{pages[openTab]}</div>
    </div>
  );
}

export default App;
