import './Footer.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useContext } from 'react';
import { GameState } from '../../../Providers/GameStateProvider';

function Footer() {
  const {
    character: { character },
  } = useContext(GameState);

  return (
    <div id='footer'>
      <div id='exile-name'>{character.name}</div>
      <div id='exile-level'>{character.level}</div>
      <div id='experience-bar'>
        <ProgressBar now={(character.experience * 100) / character.experienceLevelUp} />
      </div>
    </div>
  );
}

export default Footer;
