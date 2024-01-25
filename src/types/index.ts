// import { KeyboardEvent } from 'react'

export interface KeyboardEvent {
  key: string
}
export interface globalGameStore {
  playerName: string
  gameComplexity: number
  loading: boolean
  gameDataLoaded: boolean
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
  setGameDataLoaded: () => void
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
  caveRef: SVGSVGElement | null
  caveAllBlocks: NodeListOf<Element> | undefined
  setCaveCoords: (payload: string[]) => void
  setCaveSvgPoints: (payload: string[]) => void
  setCaveRef: (payload: SVGSVGElement) => void
  setCaveAllBlocks: (payload: NodeListOf<Element>) => void
}

export interface droneStore {
  horizontalSpeed: number
  verticalSpeed: number
  edgesPoints: number[][]
  // droneRef: SVGPolygonElement | null
  droneRef: HTMLImageElement | null
  verticalTraveledDistance: number
  horizontalTraveledDistance: number
  setHorizontalSpeed: (payload: number) => void
  setEdgesPoints: (payload: number[][]) => void
  setVerticalSpeedUp: () => void
  setVerticalSpeedDown: () => void
  // setDroneRef: (payload: SVGPolygonElement) => void
  setDroneRef: (payload: HTMLImageElement) => void
  setVerticalTraveledDistance: (payload: number) => void
  setHorizontalTraveledDistance: (payload: number) => void
}

export type changeDroneSpeed = () => void