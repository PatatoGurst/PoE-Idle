import IMonsterState from '@Models/Monster/MonsterState';
import { useState } from 'react';
import Monster from '@Models/Monster/Monster';
import IUseMonster from './useMonster.type';
import useComputedStats from './useComputedStats';

export default function useMonster(): IUseMonster {
  const [currentMonster, setcurrentMonster] = useState<Monster | undefined>(undefined);
  const { computedStats, updateComputedStats } = useComputedStats(currentMonster?.computedStats);

  const attack = () => {
    const damageAmount = 12;
    console.log('attack');
    return damageAmount;
  };

  const takeDamage = (damage: number): boolean => {
    const newHealth = computedStats.health - damage;
    updateComputedStats.updateHealth(newHealth);
    return newHealth <= 0;
  };


  const monsterReturn: IMonsterState | undefined = currentMonster ? {
    monster: { ...currentMonster, computedStats },
    updateMonster: { attack, takeDamage },
  } : undefined;

  const switchMonster = (monster: Monster | undefined) => {
    setcurrentMonster(monster);
  };

  return { monster: monsterReturn, changeMonster: switchMonster };
}