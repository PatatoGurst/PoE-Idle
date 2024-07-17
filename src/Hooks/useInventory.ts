import { useState } from 'react';
import IInventoryState from '@Models/State/IInventoryState';

export default function useInventory(): IInventoryState {
  const [transmutation, setTransmutation] = useState(0);
  const [augmentation, setAugmentation] = useState(1);
  const [alteration, setAlteration] = useState(1);

  const addTransmutation = (amount: number) => {
    setTransmutation((t) => t + amount);
  };

  const addAugmentation = (amount: number) => {
    setAugmentation((t) => t + amount);
  };

  const addAlteration = (amount: number) => {
    setAlteration((t) => t + amount);
  };

  return {
    inventory: { transmutation, augmentation, alteration },
    updateInventory: {
      addTransmutation,
      addAugmentation,
      addAlteration,
    },
  };
}
