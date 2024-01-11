import { KeyboardEvent } from 'react'

export interface gameInitializeStore {
  token: string
  id: string
  setToken: (param: string) => void
  setId: (param: string) => void
}

export interface caveStore {
  caveCoords: string[]
  caveSvgPoints: string[]
  setCaveCoords: (payload: string[]) => void
  setCaveSvgPoints: (payload: string[]) => void
}

export interface globalGameStore {
  playerName: string
  gameComplexity: number
  loading: boolean
  start: boolean
  caveBlockHeight: number
  gameFailed: boolean
  gameSuccess: boolean
  setLoading: () => void
  setStart: () => void
  setGameFailed: () => void
  setGameSuccess: () => void
  setPlayerName: (payload: string) => void
  setGameComplexity: (payload: number) => void
}

export interface droneStore {
  position: number[]
  edgesPoints: []
  setPosition: (payload: [number, number]) => void
  setEdgesPoints: (payload: []) => void
}

export type changeDronePosition = (event: KeyboardEvent<HTMLDivElement>) => void
