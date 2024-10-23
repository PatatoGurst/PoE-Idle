import ICharacterState from '../Character/CharacterState';
import IInventoryState from '../Inventory/InventoryState';

export default interface IGameState {
  character: ICharacterState;
  inventory: IInventoryState;
}
