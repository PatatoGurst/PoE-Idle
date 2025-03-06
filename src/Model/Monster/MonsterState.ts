import Monster from '@Models/Monster/Monster';
import MonsterManagement from '@Models/Monster/MonsterManagement';

export default interface IMonsterState {
  monster: Monster;
  updateMonster: MonsterManagement;
}