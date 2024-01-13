// import { KeyboardEvent } from 'react'

export interface KeyboardEvent {
  key: string
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

export interface droneStore {
  position: number[]
  edgesPoints: number[][]
  setPosition: (payload: [number, number]) => void
  setEdgesPoints: (payload: number[][]) => void
}

export type changeDronePosition = () => void
