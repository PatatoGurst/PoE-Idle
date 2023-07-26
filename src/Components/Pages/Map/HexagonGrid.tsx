import { Line, RegularPolygon } from 'react-konva';

function HexagonGrid() {
  const RADIUS = 30;
  const diffX = Math.ceil(Math.sqrt(3 * RADIUS * RADIUS)) + 1;
  const diffY = (RADIUS * 3) / 2;
  return (
    <>
      <RegularPolygon sides={6} x={0} y={0} radius={30} fill='black' stroke='red' strokeWidth={1} />
      <RegularPolygon
        sides={6}
        x={diffX}
        y={0}
        radius={RADIUS}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />
      <RegularPolygon
        sides={6}
        x={-diffX}
        y={0}
        radius={RADIUS}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />

      <RegularPolygon
        sides={6}
        x={diffX / 2}
        y={diffY}
        radius={30}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />
      <RegularPolygon
        sides={6}
        x={diffX / 2}
        y={-diffY}
        radius={30}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />
      <RegularPolygon
        sides={6}
        x={-diffX / 2}
        y={diffY}
        radius={30}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />
      <RegularPolygon
        sides={6}
        x={-diffX / 2}
        y={-diffY}
        radius={30}
        fill='black'
        stroke='red'
        strokeWidth={1}
      />
      <Line points={[0, 0, 30, 0]} stroke='green' />
    </>
  );
}

export default HexagonGrid;
