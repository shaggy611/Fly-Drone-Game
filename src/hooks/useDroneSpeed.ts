import { changeDroneSpeed } from '../types'
import { useBoundStore } from '../store/index'
import { useEffect } from 'react'
import { KeyboardEvent } from '../types/index'

const useDroneSpeed: changeDroneSpeed = () => {
  const horizontalSpeed = useBoundStore((state) => state.horizontalSpeed)
  const setHorizontalSpeed = useBoundStore((state) => state.setHorizontalSpeed)
  const loading = useBoundStore((state) => state.loading)
  const setVerticalSpeedUp = useBoundStore((state) => state.setVerticalSpeedUp)
  const setVerticalSpeedDown = useBoundStore(
    (state) => state.setVerticalSpeedDown
  )

  useEffect(() => {
    const changeDronePosition = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          setHorizontalSpeed(-1)
          break
        case 'ArrowRight':
          setHorizontalSpeed(1)
          break
        case 'ArrowUp':
          setVerticalSpeedDown()
          break
        case 'ArrowDown':
          setVerticalSpeedUp()
          break
      }
    }

    if (!loading) {
      document.addEventListener('keydown', changeDronePosition)
    }

    return () => {
      document.removeEventListener('keydown', changeDronePosition)
    }
  }, [
    loading,
    horizontalSpeed,
    setHorizontalSpeed,
    setVerticalSpeedUp,
    setVerticalSpeedDown,
  ])
}

export default useDroneSpeed
