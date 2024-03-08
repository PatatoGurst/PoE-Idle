import { useSelector } from 'react-redux';
import './Footer.css';
import GlobalState from '../../../Redux/Model/GlobalState';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Footer() {
  const character = useSelector((state: GlobalState) => state.character);

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
