import { useDispatch, useSelector } from 'react-redux';
import { updateIncrement } from '../../Redux/Reducers/ClickSlice';
import GlobalState from '../../Redux/Model/GlobalState';

export default function HomePage() {
  const value = useSelector((state: GlobalState) => state.click.totalValue);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page {value}</h1>
      <button
        onClick={() => {
          dispatch(updateIncrement(1));
        }}>
        +1
      </button>
    </div>
  );
}
