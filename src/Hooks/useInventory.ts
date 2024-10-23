import { useState } from 'react';
import IInventoryState from '@Models/Inventory/InventoryState';
import Inventory from '@Models/Inventory/Inventory';

export default function useInventory(saveInventory: Inventory): IInventoryState {
  const [transmutation, setTransmutation] = useState(saveInventory.transmutation);
  const [augmentation, setAugmentation] = useState(saveInventory.augmentation);
  const [alteration, setAlteration] = useState(saveInventory.alteration);

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
