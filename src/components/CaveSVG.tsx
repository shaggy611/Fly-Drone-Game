import { useBoundStore } from '../store'

export default function CaveSVG() {
  const cords = useBoundStore((state) => state.caveCoords)
  const caveBuildBlock = useBoundStore((state) => state.caveBlockHeight)
  const caveSvgPoints = useBoundStore((state) => state.caveSvgPoints)

  const setCaveRef = useBoundStore((state) => state.setCaveRef)

  const setCaveReference = (ref: SVGSVGElement) => {
    if (ref) {
      setCaveRef(ref)
    }
  }

  return (
    <svg
      ref={setCaveReference}
      id='cave'
      width='500'
      height={cords.length * caveBuildBlock}
      xmlns='http://www.w3.org/2000/svg'>
      {caveSvgPoints.map((item, index) => {
        if (index < 10) {
          const [x1, y1, x2, y2] = item.split(';').map(Number)

          if (caveSvgPoints.length - 1 === index) {
            return
          }

          return (
            <g key={index}>
              <polygon
                points={`0,${caveBuildBlock * index} ${250 + x1},${
                  caveBuildBlock * index
                } ${250 + x2},${caveBuildBlock * index + caveBuildBlock} 0,${
                  caveBuildBlock * index + caveBuildBlock
                }`}
                stroke='black'
                fill='black'
              />

              <polygon
                points={`${250 + y1},${caveBuildBlock * index} 500,${
                  caveBuildBlock * index
                } 500,${caveBuildBlock * index + caveBuildBlock} ${250 + y2},${
                  caveBuildBlock * index + caveBuildBlock
                }`}
                stroke='black'
                fill='black'
              />
            </g>
          )
        }
      })}
    </svg>
  )
}
