import { useContext } from 'react';
import HealthBar from './HealthBar/HealthBar';
import { CombatState } from '../../../../Providers/CombatStateProvider';
import { GameState } from '../../../../Providers/GameStateProvider';

export default function CombatGrid() {
  const { endCombat, monster } = useContext(CombatState);
  const { character: { character } } = useContext(GameState);
  const remainingHealth = character.computedStats.health / character.computedStats.maxHealth;
  const remainingMonsterHealth = monster?.computedStats.health ?? 0 / (monster?.computedStats.maxHealth ?? 1);

  return (
    <div id="combat-grid-container">
      <div id="player">Player
        <p>{character.name}</p>
        <p>Attack damage : {character.computedStats.attackDamage}</p>
        <p>Attack speed : {character.computedStats.attackSpeed}</p>
        <p>HP : {character.computedStats.health} / {character.computedStats.maxHealth}</p>
        <HealthBar healthPercentage={remainingHealth} />
        <button>Take damage</button>
      </div>
      <div id="enemies">Enemies
        <p>{monster?.name}</p>
        <p>Attack damage : {monster?.computedStats.attackDamage}</p>
        <p>Attack speed : {monster?.computedStats.attackSpeed}</p>
        <p>HP : {monster?.computedStats.health} / {monster?.computedStats.maxHealth}</p>
        <HealthBar healthPercentage={remainingMonsterHealth} />
        <button>Attack</button>
      </div>
      <div id="actions">
        <button onClick={() => endCombat()}>Flee</button>
      </div>
    </div>
  );
}