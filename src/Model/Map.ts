import Monster from './Monster';
import Player from './Player';

export default interface Map {
  monsters: Monster[];
  player: Player;
  grid: any;
}
