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
  loading: boolean
  start: boolean
  setLoading: () => void
  setStart: () => void
}
