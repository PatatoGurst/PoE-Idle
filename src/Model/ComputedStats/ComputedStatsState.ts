import ComputedStatsManagement from '@Models/ComputedStats/ComputedStatsManagement';
import ComputedStats from '@Models/ComputedStats/ComputedStats';

export default interface IComputedStatsState {
  computedStats: ComputedStats;
  updateComputedStats: ComputedStatsManagement;
}