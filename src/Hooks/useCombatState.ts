import { useState } from 'react';
import ICombatState from '@Models/State/ICombatState';

export default function useCombatState(): ICombatState {
  const [isInCombat, setIsInCombat] = useState(false);
  const [isStartingCombat, setIsStartingCombat] = useState(false);
  return { isInCombat, setIsInCombat, isStartingCombat, setIsStartingCombat };
}