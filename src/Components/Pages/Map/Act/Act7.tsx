import { useContext } from 'react';
import { CombatState } from '../../../../Providers/CombatStateProvider';
import useAct1 from '../../../../Hooks/act/useAct1';

export default function Act7() {

  const { startCombat } = useContext(CombatState);
  const act1 = useAct1();

  return (<><h2>Act 7</h2>
    <button onClick={() => startCombat(act1)}>Start Combat</button>
  </>);
}