import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'
import { changeDronePosition } from '../types'

export default function Drone() {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const caveBlockHeight = useBoundStore((state) => state.caveBlockHeight)
  const setGameFailed = useBoundStore((state) => state.setGameFailed)
  const setGameSuccess = useBoundStore((state) => state.setGameSuccess)
  const setStart = useBoundStore((state) => state.setStart)
  const loading = useBoundStore((state) => state.loading)
  const dronePolygon = useRef<SVGPolygonElement>(null)

  const dronePosition = {
    transform: `translate(${position[0]}px, ${position[1]}px)`,
  }

  const changeDronePosition: changeDronePosition = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        setPosition([(position[0] -= 1), position[1]])
        break
      case 'ArrowRight':
        setPosition([(position[0] += 1), position[1]])
        break
      case 'ArrowUp':
        setPosition([position[0], (position[1] -= 1)])
        break
      case 'ArrowDown':
        setPosition([position[0], (position[1] += 1)])
        break
    }
  }

  useEffect(() => {
    if (!loading) {
      document.addEventListener('keydown', changeDronePosition)
    }

    return () => document.removeEventListener('keydown', changeDronePosition)
  }, [loading])

  useEffect(() => {
    const caveSize = document.querySelector('#cave')?.getBoundingClientRect()
    const caveAllBlocks = document.querySelectorAll('#cave g')
    const droneSize = dronePolygon?.current?.getBoundingClientRect()

    const relativeDronePosTop =
      Math.floor((droneSize!.bottom - caveSize!.top - 11) / caveBlockHeight) + 1

    if (caveAllBlocks.length > 0) {
      const caveCurrentLeftBlock = caveAllBlocks[relativeDronePosTop].firstChild
      const caveCurrentRightBlock = caveAllBlocks[relativeDronePosTop].lastChild

      const horizontColision =
        droneSize!.left <=
          caveCurrentLeftBlock!.getBoundingClientRect().right ||
        droneSize!.right >= caveCurrentRightBlock!.getBoundingClientRect().left

      if (horizontColision) {
        setGameFailed()
        setStart()
      }
    }
  }, [position, caveBlockHeight])

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
