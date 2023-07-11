import { useEffect } from "react";

function CombatEngine(props: { value: number; setValue: (v: number) => void }) {
  useEffect(() => {
    setTimeout(() => {
      if (props.value < 20) {
        props.setValue(props.value + 1);
      }
    }, 100);
  }, [props]);

  return <></>;
}

export default CombatEngine;
