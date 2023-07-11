import { useState } from "react";
import Header from "./Layout/Header/Header";
import HomePage from "./Pages/HomePage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import CombatEngine from "./Combat/CombatEngine";

function PoEIdleGame() {
  const [value, setValue] = useState(0);
  function getPage() {
    const route = window.location.pathname;
    if (route === "/page1") {
      return <Page1 />;
    } else if (route === "/page2") {
      return <Page2 />;
    } else {
      return <HomePage value={value} />;
    }
  }

  return (
    <>
      <Header />
      <CombatEngine value={value} setValue={setValue} />
      {getPage()}
    </>
  );
}

export default PoEIdleGame;
