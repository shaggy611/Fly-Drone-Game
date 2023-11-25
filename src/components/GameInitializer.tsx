import { apiInitGame } from '../utils/api/apiGameInitialize'
import { useEffect } from 'react'

function GameInitializer() {
  useEffect(() => {
    async function initGame() {
      await apiInitGame()
    }

    initGame()
  }, [])

  return <></>
}

export default GameInitializer
