import { useContext } from 'react';
import { CombatState } from '../../../Providers/CombatStateProvider';
import ActMap from './ActMap';
import CombatGrid from './CombatGrid/CombatGrid';
import './MapPage.css';

export default function MapPage() {

  const { isInCombat } = useContext(CombatState);

  return (
    <div>
      <h1>Map Page</h1>
      {isInCombat ? (<CombatGrid />) : (<ActMap />)}
    </div>
  );
}
