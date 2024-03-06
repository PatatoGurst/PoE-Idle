import { useDispatch } from 'react-redux';
import { updateIncrement } from '../../Redux/Reducers/ClickSlice';

export default function Page1() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => dispatch(updateIncrement(2))}>+2</button>
    </div>
  );
}
