import IComputedStatsState from '@Models/ComputedStats/ComputedStatsState';
import { useState } from 'react';
import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default function useComputedStats(computedStats?: ComputedStats): IComputedStatsState {
  const [attackDamage, setAttackDamage] = useState(computedStats?.attackDamage || 1);
  const [attackSpeed, setAttackSpeed] = useState(computedStats?.attackSpeed || 1);
  const [health, setHealth] = useState(computedStats?.health || 1);

  return {
    computedStats: {
      health,
      attackDamage,
      attackSpeed,
    },
    updateComputedStats: {
      setHealth,
      setAttackDamage,
      setAttackSpeed,
    },
  };
}