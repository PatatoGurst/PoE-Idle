import { useContext, useEffect } from 'react';
import { Timer } from '../../Providers/TimerProvider';
import { GameState } from '../../Providers/GameStateProvider';

export default function CombatEngine() {
  const { timer } = useContext(Timer);
  const {
    character: { updateCharacter },
  } = useContext(GameState);

  useEffect(() => {
    if (timer % 20 === 0) {
      updateCharacter.addExperience(132);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return <></>;
}
