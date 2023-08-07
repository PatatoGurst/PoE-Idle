import React from 'react';
import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './MapPage.css';
import HexagonGrid from './HexagonGrid';
import { Tile, rectanglemap, hexagonemap, custommap, map1, HALF_HEIGHT } from './MapUtils';
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

  return (
    <div className='map-container'>
      <div className='side'>
        <SideMap clickOnTile={clickOnTile} showRadius={showRadius} />
      </div>
      <div className='map' ref={divRef}>
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          offsetX={-dimensions.width / 2}
          offsetY={-dimensions.height / 2}>
          <Layer>
            <HexagonGrid grid={hexagonGrid} updateGrid={() => updateGrid()} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default MapPage;
