import { KeyboardEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'

export default function Drone() {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const drone = useRef(null)
  const dronePolygon = useRef(null)

  const dronePosition = {
    transform: `translate(${position[0]}px, ${position[1]}px)`,
  }

  function changeDronePosition(event: KeyboardEvent<HTMLDivElement>) {
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
    document.addEventListener('keydown', changeDronePosition)

    return () => document.removeEventListener('keydown', changeDronePosition)
  }, [])

  useEffect(() => {
    const cave = document.querySelector('#cave')
    const caveRef = document.querySelector('#cave').getBoundingClientRect()
    const caveAllBlocks = document.querySelectorAll('g')
    const droneRef = dronePolygon.current.getBoundingClientRect()
    const relativeDronePosTop =
      Math.floor(
        (dronePolygon.current.getBoundingClientRect().bottom -
          caveRef.top -
          11) /
          12
      ) + 1

    const caveCurrentLeftBlock = caveAllBlocks[relativeDronePosTop]

    if (caveAllBlocks.length > 0) {
      const caveCurrentLeftBlock = caveAllBlocks[relativeDronePosTop].firstChild
      const caveCurrentRightBlock = caveAllBlocks[relativeDronePosTop].lastChild

      const horizontColision =
        droneRef.left <= caveCurrentLeftBlock.getBoundingClientRect().right ||
        droneRef.right >= caveCurrentRightBlock.getBoundingClientRect().left

      if (horizontColision) {
        console.log('colision')
      }
    }

    // caveAllBlocks.forEach((box, index) => {
    //   const caveBox = box.getBoundingClientRect()

    //   if (dronePolygon.current && cave) {
    //     const droneRef = dronePolygon.current.getBoundingClientRect()

    //     const horizontColision =
    //       (index % 2 === 0 && droneRef.left <= caveBox.right) ||
    //       (index % 2 !== 0 && droneRef.right >= caveBox.left)

    //     const verticalColision =
    //       droneRef.top <= caveBox.bottom && droneRef.bottom >= caveBox.top

    //     if (horizontColision && verticalColision) {
    //       // console.log('colision')
    //     }

    //   }
    // })
  }, [position])

  return (
    <StyledDrone dronePosition={position} style={dronePosition}>
      <svg
        ref={drone}
        width='20'
        height='11'
        xmlns='http://www.w3.org/2000/svg'>
        <polygon ref={dronePolygon} points='0,0 20,0 10,11' />
      </svg>
    </StyledDrone>
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
