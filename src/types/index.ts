export interface gameInitializeStore {
  token: string
  id: string
  setToken: (param: string) => void
  setId: (param: string) => void
}

export interface caveStore {
  caveCoords: string[]
  setCaveCoords: (payload: string[]) => void
}

export interface globalGameStore {
  playerName: string
  gameComplexity: number
  loading: boolean
  start: boolean
  caveBlockHeight: number
  setLoading: () => void
  setStart: () => void
  setPlayerName: (payload: string) => void
  setGameComplexity: (payload: number) => void
}

export interface droneStore {
  position: number[]
  setPosition: (uayload: number[]) => void
}
