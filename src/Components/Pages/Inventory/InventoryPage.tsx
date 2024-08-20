import { useContext } from 'react';
import { GameState } from '../../../Providers/GameStateProvider';
import whetstone from '../../../Images/Currency/Blacksmith_Whetstone.png';
import transmutation from '../../../Images/Currency/transmutation.png';
import augmentation from '../../../Images/Currency/augmentation.png';
import alteration from '../../../Images/Currency/alteration.png';
import './InventoryPage.css';
import CurrencyItem from './CurrencyItem';

export default function InventoryPage() {
  const {
    inventory: { inventory, updateInventory },
  } = useContext(GameState);

  return (
    <div id='inventory-page'>
      <div id='inventory-title'>
        <h1>Inventory</h1>
      </div>
      <div id='inventory-currency'>
        <CurrencyItem name='whetstone' amount={123} image={whetstone} />
        <CurrencyItem name='transmutation' amount={inventory.transmutation} image={transmutation} />
        <CurrencyItem name='augmentation' amount={inventory.augmentation} image={augmentation} />
        <CurrencyItem name='alteration' amount={inventory.alteration} image={alteration} />
      </div>
      <div id='inventory-action'>
        <button onClick={() => updateInventory.addTransmutation(1)}>+1 transmutation</button>
        <button onClick={() => updateInventory.addAugmentation(1)}>+1 augmentation</button>
        <button onClick={() => updateInventory.addAlteration(1)}>+1 alteration</button>
      </div>
    </div>
  );
}
