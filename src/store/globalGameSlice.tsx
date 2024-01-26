import { sliceResetFns } from '.'
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
  loading: true,
  start: false,
  caveBlockHeight: 10,
  gameFailed: false,
  gameSuccess: false,
  gameDataLoaded: false,
}

const createGLobalGameSlice: StateCreator<
  caveStore & gameInitializeStore & globalGameStore & droneStore,
  [],
  [],
  globalGameStore
> = (set) => {
  sliceResetFns.add(() => set(initialGLobalGameState))

  return {
    ...initialGLobalGameState,

    setGameFailed: () => set((state) => ({ gameFailed: !state.gameFailed })),
    setGameSuccess: () => set((state) => ({ gameFailed: !state.gameSuccess })),
    setLoading: () => set((state) => ({ loading: !state.loading })),
    setStart: () => set((state) => ({ start: !state.start })),
    setGameComplexity: (payload) => set(() => ({ gameComplexity: payload })),
    setPlayerName: (payload) => set(() => ({ playerName: payload })),
    setGameDataLoaded: () =>
      set((state) => ({ gameDataLoaded: !state.gameDataLoaded })),
  }
}

export default createGLobalGameSlice
