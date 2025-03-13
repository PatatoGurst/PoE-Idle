import { useContext } from 'react';
import { CombatState } from '../../../../Providers/CombatStateProvider';
import { GameState } from '../../../../Providers/GameStateProvider';
import CombatGridPlayer from './CombatGridPlayer/CombatGridPlayer';
import CombatGridMonster from './CombatGridMonster/CombatGridMonster';

export default function CombatGrid() {
  const { endCombat, monster, attack } = useContext(CombatState);
  const { character: { character } } = useContext(GameState);

  return (
    <div id="combat-grid-container">
      <CombatGridPlayer character={character} attack={attack} />
      <CombatGridMonster monster={monster!} />
      <div id="actions">
        <button onClick={() => endCombat()}>Flee</button>
      </div>
    </div>
  );
}