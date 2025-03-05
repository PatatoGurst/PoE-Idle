import { useContext, useEffect } from 'react';
import { Timer } from '../../Providers/TimerProvider';
import { GameState } from '../../Providers/GameStateProvider';
import { CombatState } from '../../Providers/CombatStateProvider';

export default function CombatEngine() {
  const { timer } = useContext(Timer);
  const {
    character: { updateCharacter },
  } = useContext(GameState);

  const { launchCombat, isStartingCombat } = useContext(CombatState);

  useEffect(() => {
    if (isStartingCombat) {
      launchCombat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStartingCombat]);

  useEffect(() => {
    if (timer % 20 === 0) {
      tickFight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const tickFight = () => {
// TODO implement combat logic
  };

  return <></>;
}
