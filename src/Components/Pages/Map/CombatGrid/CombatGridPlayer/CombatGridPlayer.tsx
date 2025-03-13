import CombatGridPlayerProps from './CombatGridPlayer.type';
import HealthBar from '../HealthBar/HealthBar';

export default function CombatGridPlayer({ character, attack }: Readonly<CombatGridPlayerProps>) {
  return (<div id="player">Player
    <p>{character.name}</p>
    <p>Attack damage : {character.computedStats.attackDamage}</p>
    <p>Attack speed : {character.computedStats.attackSpeed}</p>
    <p>HP : {character.computedStats.health} / {character.computedStats.maxHealth}</p>
    <HealthBar healthPercentage={character.computedStats.percentageHealth} />
    <button onClick={() => attack()}>Attack</button>
  </div>);
}