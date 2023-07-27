import { useState } from 'react';

type SideMapType = {
  clickOnTile: (i: number, j: number) => void;
  showRadius: (i: number, j: number, radius: number) => void;
};

function SideMap(props: SideMapType) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [radius, setRadius] = useState(0);

  const onChangeI = (event: any) => {
    setI(event?.target.value);
  };

  const onChangeJ = (event: any) => {
    setJ(event?.target.value);
  };

  const onChangeRadius = (event: any) => {
    setRadius(event.target.value);
  };

  const clickOnTile = () => {
    props.clickOnTile(i, j);
  };

  const showRadius = () => {
    props.showRadius(i, j, radius);
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
      <p>
        radius : <input type='number' value={radius} onChange={onChangeRadius} />
      </p>
      <p>
        <button onClick={showRadius}>see Area</button>
      </p>
    </>
  );
}

export default SideMap;
