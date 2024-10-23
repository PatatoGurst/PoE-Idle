import Inventory from '@Models/Inventory/Inventory';
import InventoryManagement from '@Models/Inventory/InventoryManagement';

export default interface IInventoryState {
  inventory: Inventory;
  updateInventory: InventoryManagement;
}
