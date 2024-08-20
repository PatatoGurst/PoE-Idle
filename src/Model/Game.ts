import Character from './Character/Character';
import Inventory from './Inventory/Inventory';

export default interface Game {
  timer: number;
  character: Character;
  inventory: Inventory;
}
