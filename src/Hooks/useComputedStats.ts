import IComputedStatsState from '@Models/ComputedStats/ComputedStatsState';
import { useEffect, useState } from 'react';
import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default function useComputedStats(computedStats?: ComputedStats): IComputedStatsState {
  const [attackDamage, setAttackDamage] = useState(1);
  const [attackSpeed, setAttackSpeed] = useState(1);
  const [health, setHealth] = useState(1);
  const [maxHealth, setMaxHealth] = useState(1);
  const [percentageHealth, setPercentageHealth] = useState(1);

  useEffect(() => {
    if (computedStats) {
      setAttackDamage(computedStats.attackDamage);
      setAttackSpeed(computedStats.attackSpeed);
      setHealth(computedStats.health);
      setMaxHealth(computedStats.maxHealth);
      setPercentageHealth(computedStats.percentageHealth);
    }
  }, [computedStats]);

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