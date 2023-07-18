type HomePageType = {
  value: number;
  updateIncrement: () => void;
};

function HomePage(props: HomePageType) {
  return (
    <div>
      <h1>Home Page {props.value}</h1>
      <button onClick={() => props.updateIncrement()}>+1 / s</button>
    </div>
  );
}

export default HomePage;
