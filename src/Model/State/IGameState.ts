import ICharacterState from '../Character/ICharacterState';
import IInventoryState from '../Inventory/IInventoryState';

export default interface IGameState {
  character: ICharacterState;
  inventory: IInventoryState;
}
