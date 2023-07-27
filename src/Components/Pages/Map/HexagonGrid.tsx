import HexagonTile from './HexagonTile';
import { Hexagon } from './MapUtils';

function HexagonGrid(props: { grid: Hexagon[][]; updateGrid: () => void }) {
  const mouseEnter = (h: Hexagon) => {
    h.color = 'blue';
    props.updateGrid();
  };

  const mouseLeave = (h: Hexagon) => {
    h.color = 'black';
    props.updateGrid();
  };

  const onClick = (h: Hexagon) => {
    h.color = 'green';
    props.updateGrid();
  };

  return (
    <>
      {props.grid.map((line) => {
        return line.map((hexagon) => {
          return (
            <HexagonTile
              tile={hexagon}
              mouseEnter={() => mouseEnter(hexagon)}
              mouseLeave={() => mouseLeave(hexagon)}
              onClick={() => onClick(hexagon)}
            />
          );
        });
      })}
    </>
  );
}

export default HexagonGrid;
