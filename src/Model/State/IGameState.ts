import ICharacterState from './ICharacterState';
import IInventoryState from './IInventoryState';

export default interface IGameState {
  character: ICharacterState;
  inventory: IInventoryState;
}
