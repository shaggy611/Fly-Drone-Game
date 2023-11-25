import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
} from './../types/index'
import { StateCreator } from 'zustand'

const createGLobalGameSlice: StateCreator<
  caveStore & gameInitializeStore & globalGameStore,
  [],
  [],
  globalGameStore
> = (set) => ({
  playerName: '',
  gameComplexity: 1,
  loading: false,
  start: false,
  caveBlockHeight: 12,
  setLoading: () => set((state) => ({ loading: !state.loading })),
  setStart: () => set((state) => ({ start: !state.start })),
  setGameComplexity: (payload) => set(() => ({ gameComplexity: payload })),
  setPlayerName: (payload) => set(() => ({ playerName: payload })),
})

export default createGLobalGameSlice
