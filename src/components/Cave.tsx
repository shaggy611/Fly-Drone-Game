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
  const verticalTraveledDistance = useBoundStore(
    (state) => state.verticalTraveledDistance
  )
  const setVerticalTraveledDistance = useBoundStore(
    (state) => state.setVerticalTraveledDistance
  )
  const caveRef = useRef<HTMLDivElement | null>(null)
  const speedIntervalRef = useRef<number | null>(null)
  const setGameDataLoaded = useBoundStore((state) => state.setGameDataLoaded)

  useEffect(() => {
    function droneVerticalSpeedChange() {
      if (verticalSpeed === 0) {
        clearInterval(speedIntervalRef.current!)
        return
      }
      setVerticalTraveledDistance(verticalTraveledDistance + verticalSpeed * 2)
    }

    speedIntervalRef.current = setInterval(droneVerticalSpeedChange, 70)

    return () => clearInterval(speedIntervalRef.current!)
  }, [verticalTraveledDistance, verticalSpeed, setVerticalTraveledDistance])

  useEffect(() => {
    if (caveRef.current && verticalTraveledDistance !== 0) {
      caveRef.current.style.transform = `translateY(-${verticalTraveledDistance}px)`
    }
  }, [verticalTraveledDistance])

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
      setGameDataLoaded()
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
  max-height: 95vh;
  /* margin-top: 50px; */

  & svg {
    /* margin-top: 30px; */
    background-color: antiquewhite;
  }
`

const CaveSVGWrapper = styled.div`
  transition: all 0.13s ease-in;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`
