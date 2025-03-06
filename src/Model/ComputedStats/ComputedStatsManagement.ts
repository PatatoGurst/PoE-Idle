export default interface ComputedStatsManagement {
  setHealth: (heath: number) => void;
  setMaxHealth: (heath: number) => void;
  setAttackDamage: (attackDamage: number) => void;
  setAttackSpeed: (attackSpeed: number) => void;
}