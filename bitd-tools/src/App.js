import React from 'react';
import CharacterCreator from './components/CharacterCreator';
import Factions from './components/Factions';
import Homepage from './components/Homepage';
import ScoreGenerator from './components/ScoreGenerator';
import Sidebar from './components/Sidebar';

const pages = [
  <Homepage />,
  <CharacterCreator />,
  <Factions />,
  <ScoreGenerator />,
];

function App() {
  const [openTab,setOpenTab] = React.useState(0);

  return (
      <div
        className='flex min-h-screen bg-gradient-to-b from-bitdDarkGray to-bitdGray text-white'
      >
        <Sidebar setCurrentPage={setOpenTab}/>
        <div
          className='px-[15%] pt-2'
        >
          {pages[openTab]}
        </div>
      </div>
  );
}

export default App;
