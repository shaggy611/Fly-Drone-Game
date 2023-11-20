import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useBoundStore } from '../store'
import styled from 'styled-components'
import apiGetCaveCoords from '../utils/apiGetCaveCoords'

function Cave() {
  const cords = useBoundStore((state) => state.caveCoords)
  const [svgPoints, setSvgPoints] = useState()

  const polygonHeight = 12

  const generateCaveSVG = () => {
    let cordsString = []

    if (cords.length > 0) {
      for (let i = 0; i < cords.length - 1; i++) {
        const [x1, y1] = cords[i].split(',').map(Number)
        const [x2, y2] = cords[i + 1].split(',').map(Number)

        cordsString.push(`${x1};${y1};${x2};${y2}`)
      }

      return cordsString
    }
  }

  useEffect(() => {
    async function getCaveCoords() {
      await apiGetCaveCoords()
    }

    getCaveCoords()
  }, [])

  useEffect(() => {
    if (cords.length > 0) {
      const stringSVG = generateCaveSVG()
      setSvgPoints(stringSVG)
    }

    return
  }, [cords])

  return (
    <StyledCave>
      {svgPoints ? (
        <svg width='500' height='10000' xmlns='http://www.w3.org/2000/svg'>
          {svgPoints.map((item, index) => {
            const [x1, y1, x2, y2] = item.split(';').map(Number)

            return (
              <g key={uuidv4()}>
                <polygon
                  points={`0,${polygonHeight * index}      ${250 + x1},${
                    polygonHeight * index
                  }        ${250 + x2},${
                    polygonHeight * index + polygonHeight
                  }       0,${polygonHeight * index + polygonHeight}`}
                  stroke='black'
                  fill='black'
                />

                <polygon
                  points={`${250 + y1},${polygonHeight * index}      500,${
                    polygonHeight * index
                  }        500,${polygonHeight * index + polygonHeight}       ${
                    250 + y2
                  },${polygonHeight * index + polygonHeight}`}
                  stroke='black'
                  fill='black'
                />
              </g>
            )
          })}
        </svg>
      ) : (
        ''
      )}
    </StyledCave>
  )
}

export default Cave

const StyledCave = styled.div`
  & svg {
    margin-top: 30px;
    background-color: antiquewhite;
  }
`
