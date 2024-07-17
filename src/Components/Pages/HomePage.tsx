import { useContext } from 'react';
import { GameState } from '../../Providers/GameStateProvider';
import { Timer } from '../../Providers/TimerProvider';

export default function HomePage() {
  const {
    character: { updateCharacter },
  } = useContext(GameState);

  const { timer } = useContext(Timer);

  return (
    <div>
      <h1>Home Page + {timer}</h1>
      <button
        onClick={() => {
          updateCharacter.addExperience(150);
        }}>
        Add exp
      </button>
    </div>
  );
}
