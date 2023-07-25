import { connect, useDispatch } from 'react-redux';
import * as testActions from '../../Redux/Actions/ClickAction';

function HomePage(props: any) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page {props.value}</h1>
      <button
        onClick={() => {
          dispatch(testActions.updateIncrement(1));
        }}>
        +1
      </button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.clicks.totalValue,
  };
};

export default connect(mapStateToProps)(HomePage);
