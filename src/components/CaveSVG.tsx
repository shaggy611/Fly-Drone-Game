import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useBoundStore } from '../store'

export default function CaveSVG() {
  const cords = useBoundStore((state) => state.caveCoords)
  const caveBuildBlock = useBoundStore((state) => state.caveBlockHeight)
  const caveSvgPoints = useBoundStore((state) => state.caveSvgPoints)
  const setEdgesPoints = useBoundStore((state) => state.setEdgesPoints)
  const pointForCalcColision = cords.map((item, index) => {
    const [x1, y1] = item.split(',').map(Number)
    return [250 + x1, caveBuildBlock * index + caveBuildBlock]
  })

  useEffect(() => {
    setEdgesPoints(pointForCalcColision)
  }, [])

  return (
    <svg
      id='cave'
      width='500'
      height={cords.length * caveBuildBlock}
      xmlns='http://www.w3.org/2000/svg'>
      {caveSvgPoints.map((item, index) => {
        const [x1, y1, x2, y2] = item.split(';').map(Number)

        if(caveSvgPoints.length - 1 === index) { return }

        return (
          <g key={uuidv4()}>
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
      })}
    </svg>
  )
}
