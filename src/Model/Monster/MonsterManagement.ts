export default interface MonsterManagement {
  damage: (damage: number) => void;
  attack: () => number;
}