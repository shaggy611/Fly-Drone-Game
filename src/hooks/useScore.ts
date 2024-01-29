import { useState, useEffect } from 'react'
import { useBoundStore } from '../store'

const useScore = () => {
  const relativeTopPosition = useBoundStore(
    (state) => state.relativeTopPosition
  )
  const horizontalTraveledDistance = useBoundStore(
    (state) => state.horizontalTraveledDistance
  )
  const verticalTraveledDistance = useBoundStore(
    (state) => state.verticalTraveledDistance
  )
  const setScore = useBoundStore((state) => state.setScore)
  const gameComplexity = useBoundStore((state) => state.gameComplexity)
  const verticalSpeed = useBoundStore((state) => state.verticalSpeed)
  const gameFailed = useBoundStore((state) => state.gameFailed)
  const gameSuccess = useBoundStore((state) => state.gameSuccess)

  const [prevCaveBlock, setPrevCaveBlock] = useState(2)

  useEffect(() => {
    if (relativeTopPosition > prevCaveBlock) {
      setPrevCaveBlock(relativeTopPosition)
      setScore(1 * (gameComplexity + verticalSpeed))
    }

    if (gameFailed || gameSuccess) {
      setPrevCaveBlock(2)
    }
  }, [
    horizontalTraveledDistance,
    verticalTraveledDistance,
    gameFailed,
    gameSuccess,
  ])
}

export default useScore
