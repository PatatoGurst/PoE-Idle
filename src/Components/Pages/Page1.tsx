import { connect, useDispatch } from 'react-redux';
import * as testActions from '../../Redux/Actions/ClickAction';

function Page1() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => dispatch(testActions.updateIncrement(2))}>+2</button>
    </div>
  );
}

export default connect()(Page1);
