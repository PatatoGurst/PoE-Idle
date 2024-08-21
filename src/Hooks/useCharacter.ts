import { useState } from 'react';
import { calculateExperienceNextLevel } from '../Utils/Character/Experience.utils';
import ICharacterState from '@Models/Character/ICharacterState';
import useInventory from './useInventory';

export default function useCharacter(): ICharacterState {
  const [name, setName] = useState('Unamed Exile');
  const [level, setLevel] = useState(0);
  const [experience, setExperience] = useState(0);
  const [experienceLevelUp, setExperienceLevelUp] = useState(0);

  const inventory = useInventory();

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
