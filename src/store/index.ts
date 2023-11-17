import { create } from 'zustand'
import { createCaveSlice } from './caveStore'
import { createGameInitSlice } from './gameInitStore'

export const useBoundStore = create((...a) => ({
  ...createCaveSlice(...a),
  ...createGameInitSlice(...a),
}))
