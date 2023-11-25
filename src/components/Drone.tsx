import { KeyboardEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'

function Drone() {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const dronRef = useRef(null)

  useEffect(() => {
    const dron = dronRef.current
    function changeDronePosition(event: KeyboardEvent) {
      console.log('test')
      switch (event.key) {
        case 'ArrowLeft':
          setPosition([position[0] - 1, position[1]])
          break
        case 'ArrowRight':
          setPosition([position[0] + 1, position[1]])
          break
        case 'ArrowUp':
          setPosition([position[0], position[1] - 1])
          break
        case 'ArrowDown':
          setPosition([position[0], position[1] + 1])
          break
      }
    }

    if (dron) {
      dron.addEventListener('keydown', changeDronePosition)
    }

    return () => dron.removeEventListener('keydown', changeDronePosition)
  }, [])

  return <StyledDrone dronePosition={position} tabIndex={0} ref={dronRef} />
}

export default Drone

const StyledDrone = styled.div<{
  dronePosition: number[]
}>`
  transform: ${(props) =>
    `translate(${props.dronePosition[0]}px, ${props.dronePosition[1]}px)`};
  width: 30px;
  height: 30px;
  background-color: red;
  position: absolute;
  left: 50%;
  top: 30px;
`
