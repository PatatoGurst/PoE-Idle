import MapState from '@Models/Map/MapState';

export default function useAct1(): MapState {
  return {
    monsters: [{
      rarity: 'common',
      name: 'Goblin',
      computedStats: {
        maxHealth: 10,
        health: 10,
        percentageHealth: 100,
        attackDamage: 1,
        attackSpeed: 1,
      },
    }, {
      rarity: 'magic',
      name: 'Orc',
      computedStats: {
        maxHealth: 20,
        health: 20,
        percentageHealth: 100,
        attackDamage: 2,
        attackSpeed: 2,
      },
    }],
  };
}