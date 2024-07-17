export default interface CharacterManagement {
  changeName: (name: string) => void;
  addExperience: (amount: number) => void;
}
