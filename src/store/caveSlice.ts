import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from './../types/index'
import { StateCreator } from 'zustand'
import { sliceResetFns } from './index'

const initialCaveState = {
  caveCoords: [],
  caveSvgPoints: [],
  caveRef: null,
  caveAllBlocks: undefined,
}

const createCaveSlice: StateCreator<
  caveStore & globalGameStore & gameInitializeStore & droneStore,
  [],
  [],
  caveStore
> = (set) => {
  sliceResetFns.add(() => set(initialCaveState))

  return {
    ...initialCaveState,
    setCaveCoords: (payload) => set(() => ({ caveCoords: payload })),
    setCaveSvgPoints: (payload) => set(() => ({ caveSvgPoints: payload })),
    setCaveRef: (payload) => set(() => ({ caveRef: payload })),
    setCaveAllBlocks: (payload) => set(() => ({ caveAllBlocks: payload })),
  }
}

export default createCaveSlice
