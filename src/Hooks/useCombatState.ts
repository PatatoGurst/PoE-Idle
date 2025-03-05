import { useState } from 'react';
import ICombatState from '@Models/State/ICombatState';
import MapState from '@Models/Map/MapState';
import Monster from '@Models/Monster/Monster';

export default function useCombatState(): ICombatState {
  const [isInCombat, setIsInCombat] = useState(false);
  const [isStartingCombat, setIsStartingCombat] = useState(false);
  const [map, setMap] = useState<MapState | undefined>(undefined);
  const [currentEnemy, setCurrentEnemy] = useState<Monster | undefined>(undefined);

  const startCombat = (map: MapState) => {
    setIsStartingCombat(true);
    setMap(map);
  };

  const launchCombat = () => {
    setIsInCombat(true);
    setIsStartingCombat(false);
  };

  const endCombat = () => {
    setIsInCombat(false);
    setMap(undefined);
  };

  return { isInCombat, isStartingCombat, startCombat, launchCombat, endCombat, map };
}