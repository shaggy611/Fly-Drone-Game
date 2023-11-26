import { KeyboardEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'

function Drone() {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)

  const dronePosition = {
    transform: `translate(${position[0]}px, ${position[1]}px)`,
  }

  function changeDronePosition(event: KeyboardEvent) {
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

  return <StyledDrone dronePosition={position} style={dronePosition} />
}

export default Drone

const StyledDrone = styled.div<{
  dronePosition: number[]
}>`
  width: 30px;
  height: 30px;
  background-color: red;
  position: absolute;
  left: 50%;
  top: 30px;
`
