import { createSlice } from '@reduxjs/toolkit';
import { calculateExperienceNextLevel } from '../../Utils/Character/Experience.utils';

export const characterSlice = createSlice({
  name: 'clicks',
  initialState: {
    name: 'Unamed Exile',
    level: 1,
    experience: 0,
    experienceLevelUp: 15,
    toto: 15,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    addExperience: (state, action) => {
      state.experience += action.payload;
      if (state.experience >= state.experienceLevelUp) {
        state.level += 1;
        state.experience -= state.experienceLevelUp;
        state.experienceLevelUp = calculateExperienceNextLevel(state.level);
      }
    },
  },
});

export const { changeName, addExperience } = characterSlice.actions;

export default characterSlice.reducer;
