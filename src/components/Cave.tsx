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
  const verticalSpeed = useBoundStore((state) => state.verticalSpeed)
  const traveledDistance = useBoundStore((state) => state.traveledDistance)
  const setTraveledDistance = useBoundStore(
    (state) => state.setTraveledDistance
  )
  const caveRef = useRef<HTMLDivElement | null>(null)
  const speedIntervalRef = useRef<number | null>(null)

  // const [distance, setDistance] = useState(0)

  useEffect(() => {
    function droneVerticalSpeedChange() {
      if (verticalSpeed === 0) {
        clearInterval(speedIntervalRef.current!)
        return
      }
      setTraveledDistance(traveledDistance + verticalSpeed * 2)
    }

    speedIntervalRef.current = setInterval(droneVerticalSpeedChange, 70)

    return () => clearInterval(speedIntervalRef.current!)
  }, [traveledDistance, verticalSpeed, setTraveledDistance])

  useEffect(() => {
    if (caveRef.current && traveledDistance !== 0) {
      caveRef.current.style.transform = `translateY(-${traveledDistance}px)`
    }
  }, [traveledDistance])

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

const CaveSVGWrapper = styled.div`
  transition: all 0.1s ease-in;
`
