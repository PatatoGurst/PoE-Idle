import HexagonTile from './HexagonTile';
import { Hexagon } from './MapUtils';

function HexagonGrid(props: { grid: any; updateGrid: () => void; clicked: (i: number, j: number) => void; }) {
  const mouseEnter = (h: Hexagon) => {
    //h.color = 'blue';
    props.updateGrid();
  };

  const mouseLeave = (h: Hexagon) => {
    //h.color = 'black';
    props.updateGrid();
  };

  const onClick = (h: Hexagon) => {
    props.clicked(h.i, h.j);
    props.updateGrid();
  };


  return (
    <>
      {Object.keys(props.grid).map((lineKey: string) => {
        const line: any = props.grid[lineKey];
        return Object.keys(line).map((hexagonKey) => {
          const hexagon: Hexagon = line[hexagonKey];
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
