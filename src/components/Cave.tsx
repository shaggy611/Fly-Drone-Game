import { useEffect, useRef } from 'react'
import { useBoundStore } from '../store'
import styled from 'styled-components'
import CaveSVG from './CaveSVG'
import useGameInit from '../hooks/useGameInit'

function Cave() {
  const loading = useBoundStore((state) => state.loading)
  const caveSvgPoints = useBoundStore((state) => state.caveSvgPoints)
  const verticalSpeed = useBoundStore((state) => state.verticalSpeed)
  const verticalTraveledDistance = useBoundStore(
    (state) => state.verticalTraveledDistance
  )
  const setVerticalTraveledDistance = useBoundStore(
    (state) => state.setVerticalTraveledDistance
  )
  const caveRef = useRef<HTMLDivElement | null>(null)
  const speedIntervalRef = useRef<number | null>(null)

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

  useGameInit()

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
