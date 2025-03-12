import MapState from '@Models/Map/MapState';
import Monster from '@Models/Monster/Monster';

export default interface ICombatState {
  isInCombat: boolean;
  isStartingCombat: boolean;
  startCombat: (map: MapState) => void;
  launchCombat: () => void;
  endCombat: () => void;
  map: MapState | undefined;
  monster: Monster | undefined;
  attack: () => void;
}