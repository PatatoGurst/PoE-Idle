import { useEffect, useState } from 'react';

type dataCombatEngineType = {
  value: number;
  increment: number;
  setValue: (v: number) => void;
};

const CLOCK_CYCLE: number = 1000;
const CLOCK_TICK: number = 50;

function CombatEngine(props: dataCombatEngineType) {
  const [time, setTime] = useState(Date.now());
  const [clock, setClock] = useState(0);
  useEffect(() => {
    const delta = Date.now() - time;
    let newClock = clock + delta;
    const toto = setTimeout(() => {
      if (newClock >= CLOCK_CYCLE) {
        newClock -= CLOCK_CYCLE;
        if (props.value < 200000) {
          props.setValue(props.value + props.increment);
        }
      }
      setClock(newClock);
    }, CLOCK_TICK);
    setTime(Date.now());
    return () => clearTimeout(toto);
  }, [props, clock]);

  return <></>;
}

export default CombatEngine;
