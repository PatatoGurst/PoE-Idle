import ICharacterState from './ICharacterState';
import IInventoryState from './IInventoryState';

export default interface IGameState {
  timer: number;
  character: ICharacterState;
  inventory: IInventoryState;
}
