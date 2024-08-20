export default interface InventoryManagement {
  addTransmutation: (amount: number) => void;
  addAugmentation: (amount: number) => void;
  addAlteration: (amount: number) => void;
}
