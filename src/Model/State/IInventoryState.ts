import Inventory from '@Models/Inventory';
import InventoryManagement from '@Models/InventoryManagement';

export default interface IInventoryState {
  inventory: Inventory;
  updateInventory: InventoryManagement;
}
