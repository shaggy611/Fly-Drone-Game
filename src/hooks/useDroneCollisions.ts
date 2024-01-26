import { useEffect } from 'react'
import { useBoundStore } from '../store'

const useDroneCollision = () => {
  const caveRef = useBoundStore((state) => state.caveRef)
  const verticalTraveledDistance = useBoundStore(
    (state) => state.verticalTraveledDistance
  )
  const droneRef = useBoundStore((state) => state.droneRef)
  const caveBlockHeight = useBoundStore((state) => state.caveBlockHeight)
  const setGameFailed = useBoundStore((state) => state.setGameFailed)
  const setGameSuccess = useBoundStore((state) => state.setGameSuccess)
  const setStart = useBoundStore((state) => state.setStart)
  const horizontalTraveledDistance = useBoundStore(
    (state) => state.horizontalTraveledDistance
  )

  useEffect(() => {
    if (droneRef && caveRef) {
      const caveSize = caveRef.getBoundingClientRect()
      const caveAllBlocks = caveRef.children
      const droneSize = droneRef.getBoundingClientRect()

      const relativeDronePosTop =
        Math.floor((droneSize!.bottom - caveSize!.top - 11) / caveBlockHeight) +
        1

      if (caveAllBlocks.length > 0) {
        const caveCurrentLeftBlock = caveAllBlocks[relativeDronePosTop]
          .firstChild as HTMLElement
        const caveCurrentRightBlock = caveAllBlocks[relativeDronePosTop]
          .lastChild as HTMLElement
        const caveLastBlock = caveAllBlocks[caveAllBlocks.length - 1]
          .firstChild as HTMLElement
        const lastCavePoint = Math.floor(
          caveLastBlock.getBoundingClientRect().top
        )

        const horizontColision =
          droneSize!.left <=
            caveCurrentLeftBlock!.getBoundingClientRect().right ||
          droneSize!.right >=
            caveCurrentRightBlock!.getBoundingClientRect().left

        // Checking when the Drone collided with Cave walls
        if (horizontColision) {
          setGameFailed()
        }

        // Checking when the drone has successfully reached the end of the cave
        if (lastCavePoint <= droneSize.bottom) {
          setGameSuccess()
        }
      }
    }
  }, [
    horizontalTraveledDistance,
    droneRef,
    caveRef,
    verticalTraveledDistance,
    caveBlockHeight,
    setGameFailed,
    setStart,
  ])
}

export default useDroneCollision
