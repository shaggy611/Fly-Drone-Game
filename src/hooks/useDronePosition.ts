import { changeDronePositionSpeed } from '../types'
import { useBoundStore } from './../store/index'
import { useEffect } from 'react'
import { KeyboardEvent } from '../types/index'

const useDronePositionSpeed: changeDronePositionSpeed = () => {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const loading = useBoundStore((state) => state.loading)
  const setSpeedUp = useBoundStore((state) => state.setSpeedUp)
  const setSpeedDown = useBoundStore((state) => state.setSpeedDown)

  useEffect(() => {
    const changeDronePosition = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          setPosition([position[0] - 1, position[1]])
          break
        case 'ArrowRight':
          setPosition([position[0] + 1, position[1]])
          break
        case 'ArrowUp':
          // setPosition([position[0], position[1] - 1])
          setSpeedDown()
          break
        case 'ArrowDown':
          // setPosition([position[0], position[1] + 1])
          setSpeedUp()
          break
      }
    }

    if (!loading) {
      document.addEventListener('keydown', changeDronePosition)
    }

    return () => {
      document.removeEventListener('keydown', changeDronePosition)
    }
  }, [loading, position, setPosition, setSpeedDown, setSpeedUp])
}

export default useDronePositionSpeed
