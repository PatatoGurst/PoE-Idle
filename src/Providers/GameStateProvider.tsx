import useGameState from '../Hooks/useGameState';
import IGameState from '@Models/State/IGameState';
import React, { PropsWithChildren } from 'react';

export function GameStateProvider({ children }: Readonly<PropsWithChildren>) {
  return <GameState.Provider value={useGameState()}>{children}</GameState.Provider>;
}

export const GameState = React.createContext<IGameState>(undefined as unknown as IGameState);
