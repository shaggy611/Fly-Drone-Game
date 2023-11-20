import { useBoundStore } from '../store'
import { apiInitGame } from '../utils/apiGameInitialize'
import { useEffect } from 'react'

function GameInitializer() {
  const setToken = useBoundStore((state) => state.setToken)
  const setId = useBoundStore((state) => state.setId)

  useEffect(() => {

    async function initGame() {
      const { id, token } = await apiInitGame()
      setId(id)
      setToken(token)
    }

    initGame()
  }, [])

  return <></>
}

export default GameInitializer
