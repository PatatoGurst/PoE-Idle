import React from 'react';
import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './MapPage.css';
import HexagonGrid from './HexagonGrid';
import { Hexagon, Tile, rectanglemap, hexagonemap, custommap, map1, HALF_HEIGHT } from './MapUtils';
import SideMap from './SideMap';

function MapPage() {
  const divRef = React.useRef<HTMLInputElement>(null);
  //const [hexagonGrid, setHexagonGrid] = useState<any>(rectanglemap(HALF_HEIGHT));
  //const [hexagonGrid, setHexagonGrid] = useState<any>(hexagonemap(HALF_HEIGHT));
  const [hexagonGrid, setHexagonGrid] = useState<any>(custommap(map1, HALF_HEIGHT));
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
    setHexagonGrid({ ...hexagonGrid });
  };

  const clickOnTile = (i: number, j: number) => {
    colorTiles([{ x: i, y: j }], 'yellow');
    updateGrid();
  };

  const colorTiles = (tiles: Tile[], color: string = 'pink') => {
    tiles.forEach((t: Tile) => {
      hexagonGrid[t.x][t.y].color = color;
    });
  };

  const showRadius = (i: number, j: number, radius: number) => {
    colorTiles([{ x: i, y: j }], 'rgba(50,200,100,1)');
    updateGrid();
    // Rien pour le moment
  };

  const clicked = (i: number, j: number) => {
    var tilePile = [[i, j]];
    var distance = 0;
    const adjacent = [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, 0], [1, 1]];

    while (tilePile.length != 0) {
      var newPile: number[][] = [];
      tilePile.forEach(([n, m]) => {
        var h: Hexagon = hexagonGrid[n][m];
        if (h.token) {
          h.token = false;
          h.a = distance;
          adjacent.forEach(([k, l]) => {
            if ((n + k) in hexagonGrid) {
              if ((m + l) in hexagonGrid[n + k]) {
                newPile = newPile.concat([[n + k, m + l]]);
              }
            }
          });
        }
      });
      tilePile = newPile;
      ++distance;
    }

    Object.keys(hexagonGrid).map((lineKey: string) => {
      const line: any = hexagonGrid[lineKey];
      return Object.keys(line).map((hexagonKey: string) => {
        const h: Hexagon = line[hexagonKey];
        const tempi = h.i - i;
        const tempj = h.j - j;
        h.b = Math.max(Math.abs(tempi), Math.abs(tempj), (Math.abs(tempi - tempj)));
        h.color = 'black';
        h.token = true;
      });
    })

    hexagonGrid[i][j].color = 'blue';
    updateGrid();
  }

  const resetMap = () => {
    Object.keys(hexagonGrid).map((lineKey: string) => {
      const line: any = hexagonGrid[lineKey];
      return Object.keys(line).map((hexagonKey: string) => {
        const h: Hexagon = line[hexagonKey];
        h.a = h.i
        h.b = h.j;
        h.color = 'black';
        h.token = true;
      });
    })
    updateGrid();
  }

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
            <HexagonGrid grid={hexagonGrid} updateGrid={() => updateGrid()} clicked={clicked} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default MapPage;
