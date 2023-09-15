import Monster from '@Models/Monster';
import Player from '@Models/Player';

export default interface Map {
  monsters: Monster[];
  player: Player;
  grid: any;
}
