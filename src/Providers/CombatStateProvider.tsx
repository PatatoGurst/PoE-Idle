import React, { PropsWithChildren } from 'react';
import useCombatState from '../Hooks/useCombatState';
import ICombatState from '@Models/State/ICombatState';

export function CombatStateProvider({ children }: Readonly<PropsWithChildren>) {
  useCombatState();
  return <CombatState.Provider value={useCombatState()}>{children}</CombatState.Provider>;
}

export const CombatState = React.createContext<ICombatState>(undefined as unknown as ICombatState);
