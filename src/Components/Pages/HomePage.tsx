import { useDispatch, useSelector } from 'react-redux';
import { updateIncrement } from '../../Redux/Reducers/ClickSlice';

export default function HomePage() {
  const value = useSelector((state: any) => state.clicks.totalValue);
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
