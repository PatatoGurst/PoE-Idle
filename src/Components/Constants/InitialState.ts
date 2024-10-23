import Character from '@Models/Character/Character';
import Inventory from '@Models/Inventory/Inventory';
import ISaveState from '@Models/State/SaveState';
import { calculateExperienceNextLevel } from '../../Utils/Character/Experience.utils';

const initialInventory: Inventory = {
  alteration: 0,
  augmentation: 0,
  transmutation: 0,
};

const initialCharacter: Character = {
  level: 1,
  experience: 0,
  experienceLevelUp: calculateExperienceNextLevel(1),
  name: 'Unamed Exile',
};

export const initialSave: ISaveState = {
  version: '1.0',
  character: initialCharacter,
  inventory: initialInventory,
};