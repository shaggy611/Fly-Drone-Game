import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'
import useDroneSpeed from '../hooks/useDroneSpeed'
import useDroneCollision from '../hooks/useDroneCollisions'
import droneIcon from '../assets/drone-ico-1.png'

export default function Drone() {
  const horizontalSpeed = useBoundStore((state) => state.horizontalSpeed)
  const horizontalTraveledDistance = useBoundStore(
    (state) => state.horizontalTraveledDistance
  )
  const setHorizontalTraveledDistance = useBoundStore(
    (state) => state.setHorizontalTraveledDistance
  )
  const loading = useBoundStore((state) => state.loading)
  const setDroneRef = useBoundStore((state) => state.setDroneRef)
  const speedIntervalRef = useRef<number | null>(null)

  useDroneSpeed()

  useDroneCollision()

  // const setDronePolygonRef = (ref: SVGPolygonElement) => {
  //   if (ref) {
  //     setDroneRef(ref)
  //   }
  // }

  const setDronePolygonRef = (ref: HTMLImageElement) => {
    if (ref) {
      setDroneRef(ref)
    }
  }
  
  useEffect(() => {
    function droneHorizontalSpeedChange() {
      if (horizontalSpeed === 0) {
        clearInterval(speedIntervalRef.current!)
        return
      }
      setHorizontalTraveledDistance(
        horizontalTraveledDistance + horizontalSpeed
      )
    }

    speedIntervalRef.current = setInterval(droneHorizontalSpeedChange, 70)

    return () => clearInterval(speedIntervalRef.current!)
  }, [
    horizontalTraveledDistance,
    horizontalSpeed,
    setHorizontalTraveledDistance,
  ])

  return (
    <>
      {' '}
      {loading ? (
        ''
      ) : (
        <StyledDrone
          style={{ transform: `translateX(${horizontalTraveledDistance}px)` }}>
          {/* <svg width='20' height='11' xmlns='http://www.w3.org/2000/svg'>
            <polygon ref={setDronePolygonRef} points='0,0 20,0 10,11' />
          </svg> */}
          <img
            src={droneIcon}
            width='26'
            height='17'
            ref={setDronePolygonRef}
          />
        </StyledDrone>
      )}
    </>
  )
}

const StyledDrone = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transition: all 0.1s ease-in;

  & {
    fill: red;
    stroke: purple;
    stroke-width: 1;
  }
`
