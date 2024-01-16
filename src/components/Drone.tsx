import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'
import useDroneSpeed from '../hooks/useDroneSpeed'
import { useState } from 'react'

export default function Drone() {
  const horizontalSpeed = useBoundStore((state) => state.horizontalSpeed)
  const caveBlockHeight = useBoundStore((state) => state.caveBlockHeight)
  const setGameFailed = useBoundStore((state) => state.setGameFailed)
  const setStart = useBoundStore((state) => state.setStart)
  const loading = useBoundStore((state) => state.loading)
  const dronePolygon = useRef<SVGPolygonElement>(null)
  const speedIntervalRef = useRef<number | null>(null)
  const [distance, setDistance] = useState(0)

  useDroneSpeed()

  useEffect(() => {
    function droneHorizontalSpeedChange() {
      if (horizontalSpeed === 0) {
        clearInterval(speedIntervalRef.current!)
        return
      }
      setDistance(distance + horizontalSpeed)
    }

    speedIntervalRef.current = setInterval(droneHorizontalSpeedChange, 70)

    return () => clearInterval(speedIntervalRef.current!)
  }, [distance, horizontalSpeed])

  useEffect(() => {
    const caveSize = document.querySelector('#cave')?.getBoundingClientRect()
    const caveAllBlocks = document.querySelectorAll('#cave g')
    const droneSize = dronePolygon?.current?.getBoundingClientRect()

    const relativeDronePosTop =
      Math.floor((droneSize!.bottom - caveSize!.top - 11) / caveBlockHeight) + 1

    if (caveAllBlocks.length > 0) {
      const caveCurrentLeftBlock = caveAllBlocks[relativeDronePosTop]
        .firstChild as HTMLElement
      const caveCurrentRightBlock = caveAllBlocks[relativeDronePosTop]
        .lastChild as HTMLElement

      const horizontColision =
        droneSize!.left <=
          caveCurrentLeftBlock!.getBoundingClientRect().right ||
        droneSize!.right >= caveCurrentRightBlock!.getBoundingClientRect().left

      if (horizontColision) {
        setGameFailed()
        setStart()
      }
    }
  }, [caveBlockHeight, setGameFailed, setStart])

  return (
    <>
      {' '}
      {loading ? (
        ''
      ) : (
        <StyledDrone
          dronePosition={horizontalSpeed}
          style={{ transform: `translateX(${distance}px)` }}>
          <svg width='20' height='11' xmlns='http://www.w3.org/2000/svg'>
            <polygon ref={dronePolygon} points='0,0 20,0 10,11' />
          </svg>
        </StyledDrone>
      )}
    </>
  )
}

const StyledDrone = styled.div<{
  dronePosition: number
}>`
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
