import { useState } from 'react';
import HealthBar from './HealthBar/HealthBar';

export default function CombatGrid() {
  const [health, setHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  return (
    <div>
      <div id="combat-grid-container">
        <div id="player">Player
          <HealthBar healthPercentage={health} />
          <button onClick={() => setHealth(health - 10)}>Prendre des dégâts</button>
        </div>
        <div id="enemies">Enemies<HealthBar healthPercentage={enemyHealth} />
          <button onClick={() => setEnemyHealth(enemyHealth - 10)}>Prendre des dégâts</button>
        </div>
      </div>
    </div>
  );
}