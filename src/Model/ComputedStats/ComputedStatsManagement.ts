export default interface ComputedStatsManagement {
  updateHealth: (heath: number) => void;
  updateMaxHealth: (heath: number) => void;
  setAttackDamage: (attackDamage: number) => void;
  setAttackSpeed: (attackSpeed: number) => void;
}