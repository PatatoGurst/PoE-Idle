import Character from '@Models/Character';
import CharacterManagement from '@Models/CharacterManagement';

export default interface ICharacterState {
  character: Character;
  updateCharacter: CharacterManagement;
}
