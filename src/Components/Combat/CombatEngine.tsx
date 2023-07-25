import { connect, useDispatch } from 'react-redux';
import * as testActions from '../../Redux/Actions/ClickAction';
import { useEffect, useState } from 'react';

const CLOCK_CYCLE: number = 1000;
const CLOCK_TICK: number = 50;

function CombatEngine(props: any) {
  const [time, setTime] = useState(Date.now());
  const [clock, setClock] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const delta = Date.now() - time;
    let newClock = clock + delta;
    const toto = setTimeout(() => {
      if (newClock >= CLOCK_CYCLE) {
        newClock -= CLOCK_CYCLE;
        if (props.value < 200000) {
          dispatch(testActions.increment());
        }
      }
      setClock(newClock);
    }, CLOCK_TICK);
    setTime(Date.now());
    return () => clearTimeout(toto);
  }, [clock]);

  return <></>;
}

const mapStateToProps = (state: any) => {
  return {
    value: state.clicks.totalValue,
  };
};

export default connect(mapStateToProps)(CombatEngine);
