import MapState from '@Models/Map/MapState';

export default interface ICombatState {
  isInCombat: boolean;
  isStartingCombat: boolean;
  startCombat: (map: MapState) => void;
  launchCombat: () => void;
  endCombat: () => void;
  map: MapState | undefined;
}