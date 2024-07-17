import React, { PropsWithChildren } from 'react';
import useTimer from '../Hooks/useTimer';

interface ITimer {
  timer: number;
}

export function TimerProvider({ children }: Readonly<PropsWithChildren>) {
  return <Timer.Provider value={useTimer()}>{children}</Timer.Provider>;
}

export const Timer = React.createContext<ITimer>(undefined as unknown as ITimer);
