import { reset } from '../../Redux/Reducers/ClickSlice';
import { updateCurrency } from '../../Redux/Reducers/InventorySlice';
import { useContext } from 'react';
import { GameState } from '../../Providers/GameStateProvider';

export default function InventoryPage() {
  const {
    inventory: { inventory, updateInventory },
  } = useContext(GameState);

  return (
    <div>
      <h1>Inventory</h1>
      <div className='currency-display' id='transmutation'>
        {inventory.transmutation}
        <button onClick={() => updateInventory.addTransmutation(1)}>+1 transmutation</button>
      </div>
      <div className='currency-display' id='augmentation'>
        {inventory.augmentation}
        <button onClick={() => updateInventory.addAugmentation(1)}>+1 augmentation</button>
      </div>
      <div className='currency-display' id='alteration'>
        {inventory.alteration}
        <button onClick={() => updateInventory.addAlteration(1)}>+1 alteration</button>
      </div>
    </div>
  );
}
