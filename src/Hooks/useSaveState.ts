import ISaveState from '@Models/State/SaveState';
import { initialSave } from '../Components/Constants/InitialState';

const LSK: string = 'PoEIdleSave';

export default function useSaveState() {
  const hasSaveInStorage = (): boolean => {
    return !!localStorage.getItem(LSK);
  };

  const getSave = (): ISaveState => {
    const value = localStorage.getItem(LSK);
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
    return initialSave;
  };

  return {
    save: () => {
      console.log('Save !');
    },
    reset: () => {
      console.log('Reset !');
    },
    hasSaveInStorage,
    getSave,
  };
}
