import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default interface Monster {
  rarity: string;
  name: string;
  computedStats: ComputedStats;
}