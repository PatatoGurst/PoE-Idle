import { useState } from 'react';
import './App.css';
import CombatEngine from './Components/Combat/CombatEngine';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import SideBar from './Components/Layout/Sidebar/SideBar';
import PoEIdleGame from './Components/PoEIdleGame';

function App() {
  return (
    <div id='App'>
      <Header />
      <SideBar />
      <div id='main'>
        <CombatEngine />
        <PoEIdleGame />
      </div>
      <Footer />
    </div>
  );
}

export default App;
