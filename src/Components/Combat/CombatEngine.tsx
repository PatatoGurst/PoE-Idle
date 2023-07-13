import { useEffect } from 'react';

interface dataCombatEngineInterface {
  value: number;
  setValue: (v: number) => void;
}

function CombatEngine(props: dataCombatEngineInterface) {
  useEffect(() => {
    setTimeout(() => {
      if (props.value < 20) {
        props.setValue(props.value + 1);
      }
    }, 1000);
  }, [props]);

  return <></>;
}

export default CombatEngine;
