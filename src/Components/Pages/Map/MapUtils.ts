import Map from '@Models/Map';
import Monster from '@Models/Monster';
import Player from '@Models/Player';

type Hexagon = {
  x: number;
  y: number;
  radius: number;
  color: string;
  i: number;
  j: number;
  a: number;
  b: number;
  token: boolean;
};

type Tile = {
  x: number;
  y: number;
};

const RADIUS = 40;
const diffX = (RADIUS * 3) / 2;
const diffY = Math.ceil(Math.sqrt((3 * RADIUS * RADIUS) / 4));
const HALF_HEIGHT = 4;

const tileWidth: Tile = {
  x: diffX,
  y: -diffY,
};

const tileHeight: Tile = {
  x: -diffX,
  y: -diffY,
};

const createRectangleMap = (): Map => {
  const p: Player = {
    name: 'toto',
  };
  const monster: Monster = {
    rarity: 'normal',
  };
  return {
    monsters: [monster],
    player: p,
    grid: rectanglemap(HALF_HEIGHT),
  };
};

const rectanglemap = (halfheight: number) => {
  let hexagonGrid: any = {};
  for (let i = -halfheight * 2; i <= halfheight * 2; ++i) {
    let hexagonLine: any = {};
    for (let j = -halfheight * 2; j <= halfheight * 2; ++j) {
      if (Math.abs(i) + Math.abs(j) <= halfheight * 2) {
        let hexagonTile: Hexagon = {
          x: j * tileWidth.x + i * tileHeight.x,
          y: j * tileWidth.y + i * tileHeight.y,
          radius: RADIUS,
          color: 'black',
          i: i,
          j: j,
          a: i,
          b: j,
          token: true,
        };
        hexagonLine[j] = hexagonTile;
      }
    }
    hexagonGrid[i] = hexagonLine;
  }
  return hexagonGrid;
};

const custommap = (map: Array<Array<number>>, halfheight: number) => {
  let hexagonGrid: any = {};
  for (let i = -halfheight * 2; i <= halfheight * 2; ++i) {
    let hexagonLine: any = {};
    for (let j = -halfheight * 2; j <= halfheight * 2; ++j) {
      if (map[i + 2 * halfheight][j + 2 * halfheight] === 1) {
        let hexagonTile: Hexagon = {
          x: j * tileWidth.x + i * tileHeight.x,
          y: j * tileWidth.y + i * tileHeight.y,
          radius: RADIUS,
          color: 'black',
          i: i,
          j: j,
          a: i,
          b: j,
          token: true,
        };
        hexagonLine[j] = hexagonTile;
      }
    }
    hexagonGrid[i] = hexagonLine;
  }
  return hexagonGrid;
};

const hexagonemap = (halfheight: number) => {
  let hexagonGrid: any = {};
  for (let i = -halfheight; i <= halfheight; ++i) {
    let hexagonLine: any = {};
    for (let j = -halfheight; j <= halfheight; ++j) {
      if (Math.abs(i - j) <= halfheight) {
        let hexagonTile: Hexagon = {
          x: j * tileWidth.x + i * tileHeight.x,
          y: j * tileWidth.y + i * tileHeight.y,
          radius: RADIUS,
          color: 'black',
          i: i,
          j: j,
          a: i,
          b: j,
          token: true,
        };
        hexagonLine[j] = hexagonTile;
      }
    }
    hexagonGrid[i] = hexagonLine;
  }
  return hexagonGrid;
};

export type { Hexagon, Tile };
export { HALF_HEIGHT, createRectangleMap, hexagonemap, custommap };
