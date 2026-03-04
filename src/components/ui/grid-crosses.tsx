/**
 * GridCrosses — places Cross marks at structural points of a container.
 *
 * Usage:
 *   <GridCrosses corners />                    — 4 corner crosses
 *   <GridCrosses corners cols={3} rows={2} />  — corners + internal intersections
 *   <GridCrosses points={[{ x: "50%", y: "50%" }]} /> — custom positions
 */

import Cross from "./cross";

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const cornerClasses: Record<CornerPosition, string> = {
  "top-left": "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-left": "absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2",
};

interface Point {
  x: string;
  y: string;
}

interface GridCrossesProps {
  /** Show crosses at 4 corners */
  corners?: boolean;
  /** Grid columns — generates internal vertical intersection crosses */
  cols?: number;
  /** Grid rows — generates internal horizontal intersection crosses */
  rows?: number;
  /** Custom positioned crosses */
  points?: Point[];
  /** Opacity for all crosses */
  opacity?: number;
  /** Hide internal crosses below this breakpoint */
  breakpoint?: "sm" | "md" | "lg" | "xl";
}

function buildIntersections(cols: number, rows: number): Point[] {
  const points: Point[] = [];

  // Vertical divider positions (e.g. 3 cols → dividers at 1/3, 2/3)
  const xPositions: number[] = [];
  for (let c = 1; c < cols; c++) {
    xPositions.push((c / cols) * 100);
  }

  // Horizontal positions: top edge (0), each row divider, bottom edge (100)
  const yPositions: number[] = [0];
  for (let r = 1; r < rows; r++) {
    yPositions.push((r / rows) * 100);
  }
  yPositions.push(100);

  for (const x of xPositions) {
    for (const y of yPositions) {
      points.push({ x: `${x}%`, y: `${y}%` });
    }
  }

  return points;
}

export default function GridCrosses({
  corners = false,
  cols,
  rows,
  points: customPoints,
  opacity = 0.35,
  breakpoint = "lg",
}: GridCrossesProps) {
  const intersections =
    cols && rows ? buildIntersections(cols, rows) : [];

  const allCustom = [...intersections, ...(customPoints || [])];

  const hiddenClass = `hidden ${breakpoint}:block`;

  return (
    <>
      {corners &&
        (Object.keys(cornerClasses) as CornerPosition[]).map((pos) => (
          <Cross key={pos} className={cornerClasses[pos]} opacity={opacity} />
        ))}

      {allCustom.map((point, i) => (
        <Cross
          key={i}
          className={`absolute ${hiddenClass}`}
          opacity={opacity}
          style={{ top: point.y, left: point.x, transform: "translate(-50%, -50%)" }}
        />
      ))}
    </>
  );
}
