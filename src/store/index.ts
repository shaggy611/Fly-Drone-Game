import { create } from 'zustand'
import createCaveSlice from './caveSlice'
import createGameInitSlice from './gameInitSlice'
import { caveStore, gameGlobalStore } from '../types'

export const useBoundStore = create<gameGlobalStore & caveStore>()((...a) => ({
  ...createCaveSlice(...a),
  ...createGameInitSlice(...a),
}))
