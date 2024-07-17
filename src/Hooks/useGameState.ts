import { useState } from 'react';
import useCharacter from './useCharacter';
import useInventory from './useInventory';

export default function useGameState() {
  const [timer, setTimer] = useState(0);
  const character = useCharacter();
  const inventory = useInventory();

  return { timer: timer, character: character, inventory };
}
