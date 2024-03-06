import { connect, useDispatch } from 'react-redux';
import { reset } from '../../Redux/Reducers/ClickSlice';

function Page2() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => dispatch(reset())}>reset / s</button>
    </div>
  );
}

export default connect()(Page2);
