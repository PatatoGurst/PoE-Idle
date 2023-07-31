import { connect, useDispatch } from 'react-redux';
import * as testActions from '../../Redux/Actions/ClickAction';

function Page2() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => dispatch(testActions.reset())}>reset / s</button>
    </div>
  );
}

export default connect()(Page2);
