import Character from '@Models/Character/Character';
import Inventory from '@Models/Inventory/Inventory';

export default interface ISaveState {
  version: string;
  character: Character;
  inventory: Inventory;
}
