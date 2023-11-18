import { gameGlobalStore, caveStore } from '../types'
import { StateCreator } from 'zustand'

const createGameInitSlice: StateCreator<
  gameGlobalStore & caveStore,
  [],
  [],
  gameGlobalStore
> = (set) => ({
  token: '',
  id: '',
  loading: false,
  setToken: (param: string) => set(() => ({ token: param })),
  setId: (param: string) => set(() => ({ id: param })),
  setLoading: () => set((state) => ({ loading: !state.loading })),
})

export default createGameInitSlice
