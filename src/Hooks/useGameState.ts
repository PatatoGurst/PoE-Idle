import useCharacter from './useCharacter';
import useInventory from './useInventory';
import ISaveState from '@Models/State/SaveState';

export default function useGameState(save: ISaveState) {
  const character = useCharacter(save.character);
  const inventory = useInventory(save.inventory);

  return { character: character, inventory };
}
