import useCharacter from './useCharacter';
import useInventory from './useInventory';

export default function useGameState() {
  const character = useCharacter();
  const inventory = useInventory();

  return { character: character, inventory };
}
