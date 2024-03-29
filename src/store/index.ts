import { create } from 'zustand'
import createCaveSlice from './caveSlice'
import createGameInitSlice from './gameInitSlice'
import createGLobalGameSlice from './globalGameSlice'
import createDroneSlice from './droneSlice'
import {
  caveStore,
  gameInitializeStore,
  globalGameStore,
  droneStore,
} from '../types'

export const sliceResetFns = new Set<() => void>()

export const resetAllStore = () => {
  sliceResetFns.forEach((resetFn) => {
    resetFn()
  })
}

export const useBoundStore = create<
  globalGameStore & caveStore & gameInitializeStore & droneStore
>()((...a) => ({
  ...createCaveSlice(...a),
  ...createGameInitSlice(...a),
  ...createGLobalGameSlice(...a),
  ...createDroneSlice(...a),
}))
