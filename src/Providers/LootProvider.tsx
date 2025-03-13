import React, { PropsWithChildren } from 'react';
import useLoot from '../Hooks/loot/useLoot';
import IUseLoot from '../Hooks/loot/useLoot.type';

export function LootProvider({ children }: Readonly<PropsWithChildren>) {
  return <Loot.Provider value={useLoot()}>{children}</Loot.Provider>;
}

export const Loot = React.createContext<IUseLoot>(undefined as unknown as IUseLoot);
