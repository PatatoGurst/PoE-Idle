type Page2Type = {
  updateIncrement: () => void;
};

const Page2 = (props: Page2Type) => (
  <div>
    <h1>Page 2</h1>
    <button onClick={() => props.updateIncrement()}>-5 / s</button>
  </div>
);

export default Page2;
