import useGameState from '../Hooks/useGameState';
import Game from '@Models/Game';
import IGameState from '@Models/State/IGameState';
import React, { PropsWithChildren } from 'react';
const defaultState = {
  timer: 0,
  character: {
    name: 'Unamed Exile',
    level: 1,
    experience: 0,
    experienceLevelUp: 15,
  },
  inventory: {
    transmutation: 0,
    alteration: 1,
    augmentation: 1,
  },
};
export function GameStateProvider({ children }: Readonly<PropsWithChildren>) {
  return <GameState.Provider value={useGameState()}>{children}</GameState.Provider>;
}

export const GameState = React.createContext<IGameState>(undefined as unknown as IGameState);
