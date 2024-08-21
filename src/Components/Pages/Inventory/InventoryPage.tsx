import { useContext } from 'react';
import { GameState } from '../../../Providers/GameStateProvider';
import whetstone from '../../../Images/Currency/Blacksmith_Whetstone.png';
import transmutation from '../../../Images/Currency/transmutation.png';
import augmentation from '../../../Images/Currency/augmentation.png';
import alteration from '../../../Images/Currency/alteration.png';
import './InventoryPage.css';
import CurrencyItem from './CurrencyItem';
import { INVENTORY_HEIGHT, INVENTORY_WIDTH } from './Inventory.constants';

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
        <button onClick={() => updateInventory.addTransmutation(1)}>+1 transmutation</button>
        <button onClick={() => updateInventory.addAugmentation(1)}>+1 augmentation</button>
        <button onClick={() => updateInventory.addAlteration(1)}>+1 alteration</button>
      </div>
      <div id='inventory-grid'>
        <table>
          <tbody>
            {[...Array(INVENTORY_HEIGHT)].map((valueHeight, index) => (
              <tr>
                {[...Array(INVENTORY_WIDTH)].map((valueWidth, index) => (
                  <td className='inventory-grid-cell'>A</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
