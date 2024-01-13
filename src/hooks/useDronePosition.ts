import { changeDronePosition } from '../types'
import { useBoundStore } from './../store/index'
import { useEffect } from 'react'
import { KeyboardEvent } from '../types/index'

const useDronePosition: changeDronePosition = () => {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const loading = useBoundStore((state) => state.loading)

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
          setPosition([position[0], position[1] - 1])
          break
        case 'ArrowDown':
          setPosition([position[0], position[1] + 1])
          break
      }
    }

    if (!loading) {
      document.addEventListener('keydown', changeDronePosition)
    }

    return () => document.removeEventListener('keydown', changeDronePosition)
  }, [loading, position, setPosition])
}

export default useDronePosition
