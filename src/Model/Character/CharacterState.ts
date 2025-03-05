import Character from '@Models/Character/Character';
import CharacterManagement from '@Models/Character/CharacterManagement';

export default interface ICharacterState {
  character: Character;
  updateCharacter: CharacterManagement;
}
