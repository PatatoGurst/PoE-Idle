import React from 'react';
import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './MapPage.css';
import HexagonGrid from './HexagonGrid';
import { Hexagon, computeHexagons } from './MapUtils';

function MapPage() {
  const divRef = React.useRef<HTMLInputElement>(null);
  const [hexagonGrid, setHexagonGrid] = useState<Hexagon[][]>(computeHexagons(8, 5));
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
    setHexagonGrid([...hexagonGrid]);
  };

  return (
    <div className='map-container' ref={divRef}>
      <div> test </div>
      <div className='map'>
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
