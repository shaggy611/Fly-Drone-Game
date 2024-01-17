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
  caveSize: undefined,
  caveAllBlocks: undefined,
  setCaveCoords: (payload) => set(() => ({ caveCoords: payload })),
  setCaveSvgPoints: (payload) => set(() => ({ caveSvgPoints: payload })),
  setCaveSize: (payload) => set(() => ({caveSize: payload})),
  setCaveAllBlocks: (payload) => set(() => ({caveAllBlocks: payload}))
})

export default createCaveSlice
