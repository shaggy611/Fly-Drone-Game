import { useEffect } from 'react'
import { useBoundStore } from '../store'
import apiGetCaveCoords from '../utils/api/apiGetCaveCoords'
import prepareCoordsForSVG from '../utils/prepareCoordsForSVG'
import { apiInitGame } from '../utils/api/apiGameInitialize'

const useGameInit = () => {
  const cords = useBoundStore((state) => state.caveCoords)
  const token = useBoundStore((state) => state.token)
  const setLoading = useBoundStore((state) => state.setLoading)
  const setCaveSvgPoints = useBoundStore((state) => state.setCaveSvgPoints)
  const setGameDataLoaded = useBoundStore((state) => state.setGameDataLoaded)

  useEffect(() => {
    async function initGame() {
      await apiInitGame()
    }
    initGame()
    setLoading()
  }, [setLoading])

  useEffect(() => {
    async function getCaveCoords() {
      await apiGetCaveCoords()
    }

    if (token.length > 0) {
      getCaveCoords()
    }
  }, [token])

  useEffect(() => {
    if (cords.length > 0) {
      const stringSVG = prepareCoordsForSVG(cords)
      setCaveSvgPoints(stringSVG)
      setLoading()
      setGameDataLoaded()
    }
  }, [cords, setCaveSvgPoints, setLoading])
}

export default useGameInit
