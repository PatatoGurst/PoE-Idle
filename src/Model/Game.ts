import Character from './Character';
import Inventory from './Inventory';

export default interface Game {
  timer: number;
  character: Character;
  inventory: Inventory;
}
