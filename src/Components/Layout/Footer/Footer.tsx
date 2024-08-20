import './Footer.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useContext, useState } from 'react';
import { GameState } from '../../../Providers/GameStateProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isChangingName, setIsChangingName] = useState(false);
  const {
    character: { character, updateCharacter },
  } = useContext(GameState);

  const changeName = (e: any) => {
    updateCharacter.changeName(e.target.value);
  };

  return (
    <div id='footer'>
      <div id='exile-name'>
        {isChangingName ? (
          <input defaultValue={character.name} onChange={changeName} />
        ) : (
          character.name
        )}
        &nbsp;
        {isChangingName ? (
          <FontAwesomeIcon color='pink' icon={faCheck} onClick={() => setIsChangingName(false)} />
        ) : (
          <FontAwesomeIcon color='pink' icon={faPencil} onClick={() => setIsChangingName(true)} />
        )}
      </div>
      <div id='exile-level'>{character.level}</div>
      <div id='experience-bar'>
        <ProgressBar now={(character.experience * 100) / character.experienceLevelUp} />
      </div>
    </div>
  );
}

export default Footer;
