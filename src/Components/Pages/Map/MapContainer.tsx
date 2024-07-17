import React from 'react';
import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './MapContainer.css';
import HexagonGrid from './HexagonGrid';
import { Hexagon, Tile, createRectangleMap, hexagonemap, custommap, HALF_HEIGHT } from './MapUtils';
import SideMap from './SideMap';
import { map1 } from './Custom/map1';
import Map from '@Models/Map';

function MapContainer() {
  const divRef = React.useRef<HTMLInputElement>(null);
  const [hexagonMap, setHexagonMap] = useState<Map>(createRectangleMap());
  const [hexagonGrid2, setHexagonGrid2] = useState<Map>(hexagonemap(HALF_HEIGHT));
  const [hexagonGrid3, setHexagonGrid3] = useState<Map>(custommap(map1, HALF_HEIGHT));
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  // We cant set the h & w on Stage to 100% it only takes px values so we have to
  // find the parent container's w and h and then manually set those !
  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  const updateGrid = () => {
    setHexagonMap({ ...hexagonMap });
  };

  const clickOnTile = (i: number, j: number) => {
    colorTiles([{ x: i, y: j }], 'yellow');
    updateGrid();
  };

  const colorTiles = (tiles: Tile[], color: string = 'pink') => {
    tiles.forEach((t: Tile) => {
      hexagonMap.grid[t.x][t.y].color = color;
    });
  };

  const showRadius = (i: number, j: number, radius: number) => {
    colorTiles([{ x: i, y: j }], 'rgba(50,200,100,1)');
    updateGrid();
    // Rien pour le moment
  };

  const clicked = (i: number, j: number) => {
    let tilePile = [[i, j]];
    let distance = 0;
    const adjacent = [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
      [1, 1],
    ];

    while (tilePile.length !== 0) {
      let newPile: number[][] = [];
      const tmpDistance = distance;
      tilePile.forEach(([n, m]) => {
        let h: Hexagon = hexagonMap.grid[n][m];
        if (h.token) {
          h.token = false;
          h.a = tmpDistance;
          adjacent.forEach(([k, l]) => {
            if (n + k in hexagonMap) {
              if (m + l in hexagonMap.grid[n + k]) {
                newPile = newPile.concat([[n + k, m + l]]);
              }
            }
          });
        }
      });
      tilePile = newPile;
      ++distance;
    }

    Object.keys(hexagonMap).map((lineKey: string) => {
      const line: any = hexagonMap.grid[lineKey];
      return Object.keys(line).map((hexagonKey: string) => {
        const h: Hexagon = line[hexagonKey];
        const tempi = h.i - i;
        const tempj = h.j - j;
        h.b = Math.max(Math.abs(tempi), Math.abs(tempj), Math.abs(tempi - tempj));
        h.color = 'black';
        h.token = true;
      });
    });

    hexagonMap.grid[i][j].color = 'blue';
    updateGrid();
  };

  const resetMap = () => {
    Object.keys(hexagonMap).map((lineKey: string) => {
      const line: any = hexagonMap.grid[lineKey];
      return Object.keys(line).map((hexagonKey: string) => {
        const h: Hexagon = line[hexagonKey];
        h.a = h.i;
        h.b = h.j;
        h.color = 'black';
        h.token = true;
      });
    });
    updateGrid();
  };

  return (
    <div className='map-container'>
      <div className='side'>
        <SideMap clickOnTile={clickOnTile} showRadius={showRadius} resetMap={resetMap} />
      </div>
      <div className='map' ref={divRef}>
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          offsetX={-dimensions.width / 2}
          offsetY={-dimensions.height / 2}>
          <Layer>
            <HexagonGrid grid={hexagonMap} updateGrid={() => updateGrid()} clicked={clicked} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default MapContainer;
