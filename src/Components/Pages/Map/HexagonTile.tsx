import { RegularPolygon, Text } from 'react-konva';
import { Hexagon } from './MapUtils';

function HexagonTile(props: {
  tile: Hexagon;
  i: string;
  j: string;
  mouseEnter: (h: Hexagon) => void;
  mouseLeave: (h: Hexagon) => void;
  onClick: (h: Hexagon) => void;
}) {
  return (
    <>
      <RegularPolygon
        sides={6}
        x={props.tile.x}
        y={props.tile.y}
        radius={props.tile.radius}
        rotation={30}
        fill={props.tile.color}
        stroke='red'
        strokeWidth={1}
        onMouseEnter={() => props.mouseEnter(props.tile)}
        onMouseLeave={() => props.mouseLeave(props.tile)}
        onClick={() => props.onClick(props.tile)}
      />
      <Text
        text={props.i + ' | ' + props.j}
        x={props.tile.x}
        y={props.tile.y}
        stroke='white'
        strokeWidth={1}
        offsetX={3 * (props.i + props.j).length}
      />
    </>
  );
}

export default HexagonTile;
