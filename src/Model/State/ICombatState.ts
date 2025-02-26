export default interface ICombatState {
  isInCombat: boolean;
  setIsInCombat: (isInCombat: boolean) => void;
  isStartingCombat: boolean;
  setIsStartingCombat: (isStartingCombat: boolean) => void;
}