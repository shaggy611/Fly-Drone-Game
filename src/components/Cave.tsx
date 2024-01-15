import { useEffect, useRef } from 'react'
import { useBoundStore } from '../store'
import styled from 'styled-components'
import apiGetCaveCoords from '../utils/api/apiGetCaveCoords'
import prepareCoordsForSVG from '../utils/prepareCoordsForSVG'
import { apiInitGame } from '../utils/api/apiGameInitialize'
import CaveSVG from './CaveSVG'

function Cave() {
  const cords = useBoundStore((state) => state.caveCoords)
  const token = useBoundStore((state) => state.token)
  const loading = useBoundStore((state) => state.loading)
  const setLoading = useBoundStore((state) => state.setLoading)
  const caveSvgPoints = useBoundStore((state) => state.caveSvgPoints)
  const setCaveSvgPoints = useBoundStore((state) => state.setCaveSvgPoints)
  const speed = useBoundStore((state) => state.speed)
  const caveRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (caveRef.current && speed !== 0) {
      caveRef.current.style.transform = `translateY(${speed}px)`
      console.log('speed')
    }
  }, [speed])

  useEffect(() => {
    async function initGame() {
      await apiInitGame()
    }
    initGame()
    setLoading()
  }, [setLoading])

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
      setCaveSvgPoints(stringSVG)
      setLoading()
    }
  }, [cords, setCaveSvgPoints, setLoading])

  return (
    <>
      {loading ? (
        ''
      ) : (
        <StyledCave>
          {caveSvgPoints ? (
            <CaveSVGWrapper ref={caveRef}>
              <CaveSVG />
            </CaveSVGWrapper>
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
  margin-top: 50px;

  & svg {
    margin-top: 30px;
    background-color: antiquewhite;
  }
`

const CaveSVGWrapper = styled.div``
