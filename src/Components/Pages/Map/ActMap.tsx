import { useContext } from 'react';
import { CombatState } from '../../../Providers/CombatStateProvider';

export default function ActMap() {

  const { setIsStartingCombat } = useContext(CombatState);


  return (
    <div>
      <h2>Act Map</h2>
      <button onClick={() => setIsStartingCombat(true)}>Start Combat</button>
    </div>
  );
}