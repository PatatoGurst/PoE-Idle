import IMonsterState from '@Models/Monster/MonsterState';
import Monster from '@Models/Monster/Monster';

export default interface IUseMonster {
  monster: IMonsterState | undefined;
  changeMonster: (monster: Monster | undefined) => void;
}
