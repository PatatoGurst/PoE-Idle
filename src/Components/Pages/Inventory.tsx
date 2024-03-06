import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../Redux/Reducers/ClickSlice';
import GlobalState from '../../Redux/Model/GlobalState';
import { updateCurrency } from '../../Redux/Reducers/InventorySlice';

export default function Inventory() {
  const inventory = useSelector((state: GlobalState) => state.inventory);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Inventory</h1>
      <div className='currency-display' id='transmutation'>
        {inventory.transmutation}
        <button onClick={() => dispatch(updateCurrency({ type: 'transmutation', amount: 1 }))}>
          +1 transmutation
        </button>
      </div>
      <div className='currency-display' id='augmentation'>
        {inventory.augmentation}
        <button onClick={() => dispatch(updateCurrency({ type: 'augmentation', amount: 1 }))}>
          +1 augmentation
        </button>
      </div>
      <div className='currency-display' id='alteration'>
        {inventory.alteration}
        <button onClick={() => dispatch(updateCurrency({ type: 'alteration', amount: 1 }))}>
          +1 alteration
        </button>
      </div>
      <button onClick={() => dispatch(reset())}>reset / s</button>
    </div>
  );
}
