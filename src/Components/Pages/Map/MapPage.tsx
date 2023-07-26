import Konva from 'konva';
import React from 'react';
import { useEffect, useState } from 'react';
import { Layer, Stage, Rect, Text } from 'react-konva';
import './MapPage.css';
import HexagonGrid from './HexagonGrid';

function MapPage() {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  const divRef = React.useRef<HTMLInputElement>(null);
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
            <HexagonGrid />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default MapPage;
