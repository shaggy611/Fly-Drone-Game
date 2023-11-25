import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useBoundStore } from '../store'
import styled from 'styled-components'
import apiGetCaveCoords from '../utils/api/apiGetCaveCoords'
import prepareCoordsForSVG from '../utils/prepareCoordsForSVG'
import { apiInitGame } from '../utils/api/apiGameInitialize'
import { LinearProgress, Typography } from '@mui/material'

function Cave() {
  const cords = useBoundStore((state) => state.caveCoords)
  const token = useBoundStore((state) => state.token)
  const loading = useBoundStore((state) => state.loading)
  const setLoading = useBoundStore((state) => state.setLoading)
  const [svgPoints, setSvgPoints] = useState<string[]>()
  const caveBuildBlock = useBoundStore((state) => state.caveBlockHeight)

  useEffect(() => {
    async function initGame() {
      await apiInitGame()
    }
    initGame()
    setLoading()
  }, [])

  useEffect(() => {
    async function getCaveCoords() {
      await apiGetCaveCoords()
    }

    if (token.length > 0) {
      getCaveCoords()
    }
  }, [token])

  useEffect(() => {
    if (cords.length > 0) {
      const stringSVG = prepareCoordsForSVG(cords)
      setSvgPoints(stringSVG)
      setLoading()
    }
  }, [cords])

  return (
    <>
      {loading ? (
        <>
          <LinearProgress color='success' p={3} />
          <Typography
            sx={{ fontSize: '1rem' }}
            p={0}
            align='center'
            gutterBottom>
            Loading game data...
          </Typography>
        </>
      ) : (
        <StyledCave>
          {svgPoints ? (
            <svg
              width='500'
              height={cords.length * caveBuildBlock}
              xmlns='http://www.w3.org/2000/svg'>
              {svgPoints.map((item, index) => {
                const [x1, y1, x2, y2] = item.split(';').map(Number)

                return (
                  <g key={uuidv4()}>
                    <polygon
                      points={`
                  0,${caveBuildBlock * index}
                  ${250 + x1},${caveBuildBlock * index}
                  ${250 + x2},${caveBuildBlock * index + caveBuildBlock} 
                  0,${caveBuildBlock * index + caveBuildBlock}
                  `}
                      stroke='black'
                      fill='black'
                    />

                    <polygon
                      points={`
                  ${250 + y1},${caveBuildBlock * index} 
                  500,${caveBuildBlock * index} 
                  500,${caveBuildBlock * index + caveBuildBlock} 
                  ${250 + y2},${caveBuildBlock * index + caveBuildBlock}
                  `}
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
      )}
    </>
  )
}

export default Cave

const StyledCave = styled.div`
  overflow: hidden;
  max-height: 70vh;

  & svg {
    margin-top: 30px;
    background-color: antiquewhite;
  }
`
