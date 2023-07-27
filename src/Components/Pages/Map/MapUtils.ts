type Hexagon = {
  x: number;
  y: number;
  radius: number;
  color: string;
};

type Tile = {
  x: number;
  y: number;
};

const RADIUS = 40;
const diffX = Math.ceil(Math.sqrt(3 * RADIUS * RADIUS));
const diffY = (RADIUS * 3) / 2;
const HALF_WIDTH = 5;
const HALF_HEIGHT = 5;

const tileWidth: Tile = {
  x: diffX,
  y: 0,
};

const tileHeight: Tile = {
  x: -diffX / 2,
  y: -diffY,
};

const computeHexagons = (width: number, height: number) => {
  let hexagonGrid: any = {};
  for (let i = -height; i <= height; ++i) {
    let hexagonLine: any = {};
    for (
      let j = -width - Math.round((height - i) / 2);
      j <= width + Math.round((i + height) / 2);
      ++j
    ) {
      let hexagonTile: Hexagon = {
        x: j * tileWidth.x + i * tileHeight.x,
        y: j * tileWidth.y + i * tileHeight.y,
        radius: RADIUS,
        color: 'black',
      };
      hexagonLine[j] = hexagonTile;
    }
    hexagonGrid[i] = hexagonLine;
  }
  return hexagonGrid;
};

export type { Hexagon, Tile };
export { HALF_WIDTH, HALF_HEIGHT, computeHexagons };
