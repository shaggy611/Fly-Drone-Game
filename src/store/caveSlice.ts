import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore
} from './../types/index'
import { StateCreator } from 'zustand'

const createCaveSlice: StateCreator<
  caveStore & globalGameStore & gameInitializeStore & droneStore,
  [],
  [],
  caveStore
> = (set) => ({
  caveCoords: [],
  setCaveCoords: (payload) => set(() => ({ caveCoords: payload })),
})

export default createCaveSlice
