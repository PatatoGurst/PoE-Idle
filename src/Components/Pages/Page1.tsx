type Page1Type = {
  updateIncrement: () => void;
};

const Page1 = (props: Page1Type) => (
  <div>
    <h1>Page 1</h1>
    <button onClick={() => props.updateIncrement()}>+2 / s</button>
  </div>
);

export default Page1;
