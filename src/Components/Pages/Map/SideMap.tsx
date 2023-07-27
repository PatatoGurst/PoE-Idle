import { useState } from 'react';

function SideMap(props: { clickOnTile: (i: number, j: number) => void }) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  const onChangeI = (event: any) => {
    setI(event?.target.value);
  };

  const onChangeJ = (event: any) => {
    setJ(event?.target.value);
  };

  const clickOnTile = () => {
    props.clickOnTile(i, j);
  };

  return (
    <>
      <p>
        I : <input type='number' value={i} onChange={onChangeI} />
      </p>
      <p>
        J : <input type='number' value={j} onChange={onChangeJ} />
      </p>
      <p>
        <button onClick={clickOnTile}>identify</button>
      </p>
    </>
  );
}

export default SideMap;
