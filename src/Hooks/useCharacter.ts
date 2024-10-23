import { useState } from 'react';
import { calculateExperienceNextLevel } from '../Utils/Character/Experience.utils';
import ICharacterState from '@Models/Character/CharacterState';
import Character from '@Models/Character/Character';

export default function useCharacter(saveCharacter: Character): ICharacterState {
  const [name, setName] = useState(saveCharacter.name);
  const [level, setLevel] = useState(saveCharacter.level);
  const [experience, setExperience] = useState(saveCharacter.experience);
  const [experienceLevelUp, setExperienceLevelUp] = useState(saveCharacter.experienceLevelUp);

  const changeName = (newName: string) => {
    setName(newName);
  };

  const addExperience = (newExperience: number) => {
    let tmpExperience = experience + newExperience;
    let tmpLevel = level;
    let tmpExperienceLevelUp = experienceLevelUp;
    while (tmpExperience >= tmpExperienceLevelUp) {
      tmpLevel++;
      tmpExperience -= tmpExperienceLevelUp;
      tmpExperienceLevelUp = calculateExperienceNextLevel(tmpLevel);
    }
    setLevel(tmpLevel);
    setExperience(tmpExperience);
    setExperienceLevelUp(tmpExperienceLevelUp);
  };

  return {
    character: {
      name,
      level,
      experience,
      experienceLevelUp,
    },
    updateCharacter: {
      changeName,
      addExperience,
    },
  };
}
