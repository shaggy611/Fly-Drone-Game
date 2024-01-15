import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'
import useDronePositionSpeed from '../hooks/useDronePosition'

export default function Drone() {
  const position = useBoundStore((state) => state.position)
  const caveBlockHeight = useBoundStore((state) => state.caveBlockHeight)
  const setGameFailed = useBoundStore((state) => state.setGameFailed)
  const setStart = useBoundStore((state) => state.setStart)
  const loading = useBoundStore((state) => state.loading)
  const dronePolygon = useRef<SVGPolygonElement>(null)

  const dronePosition = {
    transform: `translate(${position[0]}px, ${position[1]}px)`,
  }

  useDronePositionSpeed()

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
  }, [position, caveBlockHeight, setGameFailed, setStart])

  return (
    <>
      {' '}
      {loading ? (
        ''
      ) : (
        <StyledDrone dronePosition={position} style={dronePosition}>
          <svg width='20' height='11' xmlns='http://www.w3.org/2000/svg'>
            <polygon ref={dronePolygon} points='0,0 20,0 10,11' />
          </svg>
        </StyledDrone>
      )}
    </>
  )
}

const StyledDrone = styled.div<{
  dronePosition: number[]
}>`
  position: absolute;
  left: 50%;
  top: 30px;

  & {
    fill: red;
    stroke: purple;
    stroke-width: 1;
  }
`
