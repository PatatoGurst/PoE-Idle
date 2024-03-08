import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addExperience } from '../../Redux/Reducers/CharacterSlice';
import GlobalState from '../../Redux/Model/GlobalState';

const CLOCK_CYCLE: number = 1000;
const CLOCK_TICK: number = 50;

export default function CombatEngine() {
  const [time, setTime] = useState(Date.now());
  const [clock, setClock] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state: GlobalState) => state.click.totalValue);
  const incrementValue = useSelector((state: GlobalState) => state.click.increment);

  useEffect(() => {
    const delta = Date.now() - time;
    let newClock = clock + delta;
    const toto = setTimeout(() => {
      if (newClock >= CLOCK_CYCLE) {
        newClock -= CLOCK_CYCLE;
        if (value < 200000) {
          dispatch(addExperience(incrementValue));
        }
      }
      setClock(newClock);
    }, CLOCK_TICK);
    setTime(Date.now());
    return () => clearTimeout(toto);
  }, [clock]);

  return <></>;
}
