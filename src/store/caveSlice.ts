import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
} from './../types/index'
import { StateCreator } from 'zustand'

const createCaveSlice: StateCreator<
  caveStore & globalGameStore & gameInitializeStore,
  [],
  [],
  caveStore
> = (set) => ({
  caveCoords: [],
  setCaveCoords: (payload) => set(() => ({ caveCoords: payload })),
})

export default createCaveSlice
