import Header from "./Layout/Header/Header";
import HomePage from "./Pages/HomePage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function PoEIdleGame() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/page1") {
      return <Page1 />;
    } else if (route === "/page2") {
      return <Page2 />;
    } else {
      return <HomePage />;
    }
  }

  return (
    <>
      <Header />
      {getPage()}
    </>
  );
}

export default PoEIdleGame;
