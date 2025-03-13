import HealthBar from '../HealthBar/HealthBar';
import CombatGridMonsterProps from './CombatGridMonster.type';

export default function CombatGridMonster({ monster }: Readonly<CombatGridMonsterProps>) {
  return (
    <div id="enemies">Enemies
      <p>{monster?.name}</p>
      <p>Attack damage : {monster?.computedStats.attackDamage}</p>
      <p>Attack speed : {monster?.computedStats.attackSpeed}</p>
      <p>HP : {monster?.computedStats.health} / {monster?.computedStats.maxHealth}</p>
      <HealthBar healthPercentage={monster!.computedStats.percentageHealth} />
    </div>
  );
}