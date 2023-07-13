import { useState } from 'react';
import Header from './Layout/Header/Header';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import CombatEngine from './Combat/CombatEngine';

function PoEIdleGame(props: { value: number }) {
  function getPage() {
    const route = window.location.pathname;
    if (route === '/page1') {
      return <Page1 />;
    } else if (route === '/page2') {
      return <Page2 />;
    } else {
      return <HomePage value={props.value} />;
    }
  }

  return <>{getPage()}</>;
}

export default PoEIdleGame;
