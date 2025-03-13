import { useContext, useState } from 'react';
import ICombatState from '@Models/State/ICombatState';
import MapState from '@Models/Map/MapState';
import useMonster from './useMonster';
import { GameState } from '../Providers/GameStateProvider';

export default function useCombatState(): ICombatState {
  const [isInCombat, setIsInCombat] = useState(false);
  const [isStartingCombat, setIsStartingCombat] = useState(false);
  const [map, setMap] = useState<MapState | undefined>(undefined);
  const [monsterIndex, setMonsterIndex] = useState(0);
  const { monster, changeMonster } = useMonster();
  const { character: { character } } = useContext(GameState);

  const startCombat = (map: MapState) => {
    setIsStartingCombat(true);
    setMap(map);
    setMonsterIndex(0);
  };

  const launchCombat = () => {
    setIsInCombat(true);
    setIsStartingCombat(false);
    changeMonster(map?.monsters[monsterIndex]);
  };

  const endCombat = () => {
    setIsInCombat(false);
    setMap(undefined);
    setMonsterIndex(0);
  };

  const attack = () => {
    const isMonsterDead = monster?.updateMonster.takeDamage(character.computedStats.attackDamage);
    if (isMonsterDead) {
      nextMonsterOrEndCombat();
    }
  };

  const nextMonsterOrEndCombat = () => {
    const currentMap = map!;
    const newMonsterIndex = monsterIndex + 1;
    if (currentMap.monsters.length <= newMonsterIndex) {
      endCombat();
    } else {
      setMonsterIndex(newMonsterIndex);
      changeMonster(currentMap.monsters[newMonsterIndex]);
      // TODO: notification
    }
  };

  return { isInCombat, isStartingCombat, startCombat, launchCombat, endCombat, map, monster: monster?.monster, attack };
}