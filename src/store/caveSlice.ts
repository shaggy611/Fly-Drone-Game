import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from './../types/index'
import { StateCreator } from 'zustand'

const createCaveSlice: StateCreator<
  caveStore & globalGameStore & gameInitializeStore & droneStore,
  [],
  [],
  caveStore
> = (set) => ({
  caveCoords: [],
  caveSvgPoints: [],
  setCaveCoords: (payload) => set(() => ({ caveCoords: payload })),
  setCaveSvgPoints: (payload) => set(() => ({ caveSvgPoints: payload })),
})

export default createCaveSlice
