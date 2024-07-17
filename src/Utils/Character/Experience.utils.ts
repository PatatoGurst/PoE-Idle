const EXPERIENCE_PER_LEVEL = new Map<number, number>([
  [1, 15],
  [2, 34],
  [3, 60],
  [4, 100],
]);
export function calculateExperienceNextLevel(level: number): number {
  const experienceToNextLevel = EXPERIENCE_PER_LEVEL.get(level);
  if (!experienceToNextLevel) {
    return level * 200;
  }
  return experienceToNextLevel;
}
