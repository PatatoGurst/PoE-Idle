import { useContext, useEffect } from 'react';
import { Timer } from '../../Providers/TimerProvider';
import { GameState } from '../../Providers/GameStateProvider';
import { CombatState } from '../../Providers/CombatStateProvider';

export default function CombatEngine() {
  const { timer } = useContext(Timer);
  const {
    character: { updateCharacter },
  } = useContext(GameState);

  const { setIsInCombat, isStartingCombat, setIsStartingCombat } = useContext(CombatState);

  useEffect(() => {
    if (isStartingCombat) {
      launchCombat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStartingCombat]);

  useEffect(() => {
    if (timer % 20 === 0) {
      updateCharacter.addExperience(132);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const launchCombat = () => {
    setIsInCombat(true);
    setIsStartingCombat(false);
  };

  return <></>;
}
