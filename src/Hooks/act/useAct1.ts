import MapState from '@Models/Map/MapState';

export default function useAct1(): MapState {
  return {
    monsters: [{
      rarity: 'common',
      name: 'Goblin',
      computedStats: {
        health: 10,
        attackDamage: 1,
        attackSpeed: 1,
      },
    }, {
      rarity: 'magic',
      name: 'Orc',
      computedStats: {
        health: 20,
        attackDamage: 2,
        attackSpeed: 2,
      },
    }],
  };
}