import { useState } from 'react';
import './App.css';
import CombatEngine from './Components/Combat/CombatEngine';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import SideBar from './Components/Layout/Sidebar/SideBar';
import PoEIdleGame from './Components/PoEIdleGame';

function App() {
  const [value, setValue] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const toggleSideBar = () => setIsOpened(!isOpened);

  return (
    <div className='App'>
      <Header sideBarIsOpened={isOpened} toggleSideBar={toggleSideBar} />
      <div className='container'>
        <SideBar isOpened={isOpened} />
        <div className='main'>
          <CombatEngine value={value} setValue={setValue} />
          <PoEIdleGame value={value} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
