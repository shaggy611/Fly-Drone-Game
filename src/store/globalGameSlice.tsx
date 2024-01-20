import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from './../types/index'
import { StateCreator } from 'zustand'

const initialGLobalGameState = {
  playerName: '',
  gameComplexity: 1,
  loading: false,
  start: false,
  caveBlockHeight: 10,
  gameFailed: false,
  gameSuccess: false,
}

const createGLobalGameSlice: StateCreator<
  caveStore & gameInitializeStore & globalGameStore & droneStore,
  [],
  [],
  globalGameStore
> = (set) => ({
  ...initialGLobalGameState,
  
  setGameFailed: () => set((state) => ({ gameFailed: !state.gameFailed })),
  setGameSuccess: () => set((state) => ({ gameFailed: !state.gameSuccess })),
  setLoading: () => set((state) => ({ loading: !state.loading })),
  setStart: () => set((state) => ({ start: !state.start })),
  setGameComplexity: (payload) => set(() => ({ gameComplexity: payload })),
  setPlayerName: (payload) => set(() => ({ playerName: payload })),
})

export default createGLobalGameSlice
