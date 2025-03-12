export default interface MonsterManagement {
  takeDamage: (damage: number) => void;
  attack: () => number;
}