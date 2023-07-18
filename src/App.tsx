import { ReactComponentElement, useState } from 'react';
import './App.css';
import CombatEngine from './Components/Combat/CombatEngine';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import SideBar from './Components/Layout/Sidebar/SideBar';
import PoEIdleGame from './Components/PoEIdleGame';

function App() {
  const [value, setValue] = useState(0);
  const [isOpened, setIsOpened] = useState(true);
  const [increment, setIncrement] = useState(1);

  const toggleSideBar = () => setIsOpened(!isOpened);
  const updateIncrement = (newIncrement: number) => setIncrement(increment + newIncrement);

  return (
    <div className='App'>
      <Header sideBarIsOpened={isOpened} toggleSideBar={toggleSideBar} />
      <div className='container'>
        <SideBar isOpened={isOpened} />
        <div className='main'>
          <CombatEngine value={value} setValue={setValue} increment={increment} />
          <PoEIdleGame value={value} updateIncrement={updateIncrement} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
