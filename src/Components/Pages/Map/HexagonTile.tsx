import { RegularPolygon } from 'react-konva';
import { Hexagon } from './MapUtils';

function HexagonTile(props: {
  tile: Hexagon;
  mouseEnter: (h: Hexagon) => void;
  mouseLeave: (h: Hexagon) => void;
  onClick: (h: Hexagon) => void;
}) {
  return (
    <RegularPolygon
      sides={6}
      x={props.tile.x}
      y={props.tile.y}
      radius={props.tile.radius}
      fill={props.tile.color}
      stroke='red'
      strokeWidth={1}
      onMouseEnter={() => props.mouseEnter(props.tile)}
      onMouseLeave={() => props.mouseLeave(props.tile)}
      onClick={() => props.onClick(props.tile)}
    />
  );
}

export default HexagonTile;
