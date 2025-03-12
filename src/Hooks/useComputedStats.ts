import IComputedStatsState from '@Models/ComputedStats/ComputedStatsState';
import { useState } from 'react';
import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default function useComputedStats(computedStats?: ComputedStats): IComputedStatsState {
  const [attackDamage, setAttackDamage] = useState(computedStats?.attackDamage || 1);
  const [attackSpeed, setAttackSpeed] = useState(computedStats?.attackSpeed || 1);
  const [health, setHealth] = useState(computedStats?.health || 1);
  const [maxHealth, setMaxHealth] = useState(computedStats?.maxHealth || 1);
  const [percentageHealth, setPercentageHealth] = useState(computedStats?.health || 1);

  const updateMaxHealth = (newMaxHealth: number) => {
    setMaxHealth(newMaxHealth);
    setPercentageHealth((health / maxHealth) * 100);
  };

  const updateHealth = (newHealth: number) => {
    setHealth(newHealth);
    setPercentageHealth((newHealth / maxHealth) * 100);
  };

  return {
    computedStats: {
      maxHealth,
      health,
      percentageHealth,
      attackDamage,
      attackSpeed,
    },
    updateComputedStats: {
      updateMaxHealth,
      updateHealth,
      setAttackDamage,
      setAttackSpeed,
    },
  };
}