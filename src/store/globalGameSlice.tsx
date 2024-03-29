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
  loading: false,
  start: false,
  caveBlockHeight: 10,
  gameFailed: false,
  gameSuccess: false,
  gameDataLoaded: false,
  score: 0,
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
    setGameSuccess: () => set((state) => ({ gameSuccess: !state.gameSuccess })),
    setLoading: () => set((state) => ({ loading: !state.loading })),
    setStart: () => set((state) => ({ start: !state.start })),
    setGameComplexity: (payload) => set(() => ({ gameComplexity: payload })),
    setPlayerName: (payload) => set(() => ({ playerName: payload })),
    setGameDataLoaded: () =>
      set((state) => ({ gameDataLoaded: !state.gameDataLoaded })),
    setScore: (payload) => set((state) => ({ score: state.score + payload })),
  }
}

export default createGLobalGameSlice
