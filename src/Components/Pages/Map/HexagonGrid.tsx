import { RegularPolygon } from 'react-konva';

type Hexagon = {
  x: number;
  y: number;
};

function HexagonGrid() {
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

  const hexagons: Hexagon[][] = computeHexagons(8, 5);

  return (
    <>
      {hexagons.map((line) => {
        return line.map((hexagon) => {
          return (
            <RegularPolygon
              sides={6}
              x={hexagon.x}
              y={hexagon.y}
              radius={RADIUS}
              fill='black'
              stroke='red'
              strokeWidth={1}
            />
          );
        });
      })}
    </>
  );
}

export default HexagonGrid;
