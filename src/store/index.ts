import { create } from 'zustand'
import createCaveSlice from './caveSlice'
import createGameInitSlice from './gameInitSlice'
import createGLobalGameSlice from './globalGameSlice'
import {
  caveStore,
  gameInitializeStore,
  globalGameStore,
  droneStore,
} from '../types'
import createDroneSlice from './droneSlice'

export const useBoundStore = create<
  globalGameStore & caveStore & gameInitializeStore & droneStore
>()((...a) => ({
  ...createCaveSlice(...a),
  ...createGameInitSlice(...a),
  ...createGLobalGameSlice(...a),
  ...createDroneSlice(...a),
}))
