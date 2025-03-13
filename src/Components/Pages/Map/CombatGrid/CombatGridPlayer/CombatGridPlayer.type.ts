import Character from '@Models/Character/Character';

export default interface CombatGridPlayerProps {
  character: Character;
  attack: () => void;
}