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

const computeHexagons = (width: number, height: number) => {
  let hexagonGrid: Hexagon[][] = [];
  for (let i = -height; i <= height; ++i) {
    const lineY = i * diffY;
    let hexagonLine: Hexagon[] = [];
    for (let j = -width; j <= width; ++j) {
      let hexagonTile: Hexagon = {
        x: 0,
        y: lineY,
        radius: RADIUS,
        color: 'black',
      };
      if (i % 2 === 0) {
        hexagonTile.x = j * diffX;
      } else {
        hexagonTile.x = j * diffX + diffX / 2;
      }
      hexagonLine[j + width] = hexagonTile;
    }
    hexagonGrid[i + height] = hexagonLine;
  }
  return hexagonGrid;
};

export type { Hexagon, Tile };
export { computeHexagons };
