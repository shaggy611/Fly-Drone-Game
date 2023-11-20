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
  loading: false,
  start: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),
  setStart: () => set((state) => ({ start: !state.start })),
})

export default createGLobalGameSlice
