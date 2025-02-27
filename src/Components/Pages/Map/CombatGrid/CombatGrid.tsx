import { useContext, useState } from 'react';
import HealthBar from './HealthBar/HealthBar';
import { CombatState } from '../../../../Providers/CombatStateProvider';

export default function CombatGrid() {
  const [health, setHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const { setIsInCombat } = useContext(CombatState);

  return (
    <div id="combat-grid-container">
      <div id="player">Player
        <HealthBar healthPercentage={health} />
        <button onClick={() => setHealth(health - 10)}>Prendre des dégâts</button>
      </div>
      <div id="enemies">Enemies<HealthBar healthPercentage={enemyHealth} />
        <button onClick={() => setEnemyHealth(enemyHealth - 10)}>Prendre des dégâts</button>
      </div>
      <div id="actions">
        <button onClick={() => setIsInCombat(false)}>Flee</button>
      </div>
    </div>
  );
}