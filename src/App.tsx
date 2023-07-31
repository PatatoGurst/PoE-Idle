import { useState } from 'react';
import './App.css';
import CombatEngine from './Components/Combat/CombatEngine';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import SideBar from './Components/Layout/Sidebar/SideBar';
import PoEIdleGame from './Components/PoEIdleGame';

function App() {
  const [value, setValue] = useState(0);
  const [increment, setIncrement] = useState(1);

  const updateIncrement = (newIncrement: number) => setIncrement(increment + newIncrement);

  return (
    <div id='App'>
      <Header />
      <SideBar />
      <div id='main'>
        <CombatEngine value={value} setValue={setValue} increment={increment} />
        <PoEIdleGame value={value} updateIncrement={updateIncrement} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
