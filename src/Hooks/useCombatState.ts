import { useState } from 'react';
import ICombatState from '@Models/State/ICombatState';
import MapState from '@Models/Map/MapState';
import useMonster from './useMonster';

export default function useCombatState(): ICombatState {
  const [isInCombat, setIsInCombat] = useState(false);
  const [isStartingCombat, setIsStartingCombat] = useState(false);
  const [map, setMap] = useState<MapState | undefined>(undefined);
  const { monster, changeMonster } = useMonster();

  const startCombat = (map: MapState) => {
    setIsStartingCombat(true);
    setMap(map);
  };

  const launchCombat = () => {
    setIsInCombat(true);
    setIsStartingCombat(false);
    changeMonster(map?.monsters[0]);
  };

  const endCombat = () => {
    setIsInCombat(false);
    setMap(undefined);
  };

  const attack = () => {
    monster?.updateMonster.takeDamage(12);
  };

  return { isInCombat, isStartingCombat, startCombat, launchCombat, endCombat, map, monster: monster?.monster, attack };
}