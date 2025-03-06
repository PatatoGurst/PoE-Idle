import IMonsterState from '@Models/Monster/MonsterState';
import { useState } from 'react';
import Monster from '@Models/Monster/Monster';
import IUseMonster from './useMonster.type';

export default function useMonster(): IUseMonster {
  const [currentMonster, setcurrentMonster] = useState<Monster | undefined>(undefined);
  const attack = () => {
    const damageAmount = 12;
    console.log('attack');
    return damageAmount;
  };

  const damage = (damage: number) => {
    console.log('damage : ', damage);
  };

  const monsterReturn: IMonsterState | undefined = currentMonster ? {
    monster: currentMonster,
    updateMonster: { attack, damage },
  } : undefined;

  const changeMonster = (monster: Monster | undefined) => {
    setcurrentMonster(monster);
  };

  return { monster: monsterReturn, changeMonster };
}