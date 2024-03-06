import CharacterState from './CharacterState';
import ClickState from './ClickState';
import InventoryState from './Inventory/InventoryState';

export default interface GlobalState {
  click: ClickState;
  character: CharacterState;
  inventory: InventoryState;
}
