import { create } from 'zustand'
import createCaveSlice from './caveSlice'
import createGameInitSlice from './gameInitSlice'
import createGLobalGameSlice from './globalGameSlice'
import { caveStore, gameInitializeStore, globalGameStore } from '../types'

export const useBoundStore = create<
  globalGameStore & caveStore & gameInitializeStore
>()((...a) => ({
  ...createCaveSlice(...a),
  ...createGameInitSlice(...a),
  ...createGLobalGameSlice(...a),
}))
