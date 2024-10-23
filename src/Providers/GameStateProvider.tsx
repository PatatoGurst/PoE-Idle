import useGameState from '../Hooks/useGameState';
import IGameState from '@Models/State/IGameState';
import React, { PropsWithChildren } from 'react';
import useSaveState from '../Hooks/useSaveState';

export function GameStateProvider({ children }: Readonly<PropsWithChildren>) {
  const { getSave } = useSaveState();
  return <GameState.Provider value={useGameState(getSave())}>{children}</GameState.Provider>;
}

export const GameState = React.createContext<IGameState>(undefined as unknown as IGameState);
