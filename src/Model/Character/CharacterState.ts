import Character from '@Models/Character/Character';
import CharacterManagement from '@Models/Character/CharacterManagement';
import { calculateExperienceNextLevel } from '../../Utils/Character/Experience.utils';

export default interface ICharacterState {
  character: Character;
  updateCharacter: CharacterManagement;
}
