import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default interface Character {
  name: string;
  level: number;
  experience: number;
  experienceLevelUp: number;
  computedStats: ComputedStats;
}
