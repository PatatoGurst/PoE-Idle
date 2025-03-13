export default interface MonsterManagement {
  takeDamage: (damage: number) => boolean;
  attack: () => number;
}